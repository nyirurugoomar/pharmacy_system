import { Injectable, UnauthorizedException, ConflictException, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { RegisterUserDto } from './dto/register-user.dto';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private jwtService: JwtService,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async validateUser(username: string, password: string) {
    this.logger.debug(`Attempting to validate user: ${username}`);
    const user = await this.userModel.findOne({ username });
    if (!user) {
      this.logger.warn(`User not found: ${username}`);
      throw new UnauthorizedException('User not found');
    }
    this.logger.debug(`User found: ${JSON.stringify(user)}`);
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      this.logger.warn(`Invalid password for user: ${username}`);
      throw new UnauthorizedException('Invalid password');
    }
    return user;
  }

  async login(user: any) {
    this.logger.debug(`Logging in user: ${JSON.stringify(user)}`);
    if (!user || !user._id || !user.username || !user.role) {
      this.logger.error('Invalid user object for login');
      throw new UnauthorizedException('Invalid user data');
    }
    const payload = { 
      sub: user._id,
      username: user.username, 
      role: user.role 
    };
    this.logger.debug(`JWT payload: ${JSON.stringify(payload)}`);
    const token = this.jwtService.sign(payload);
    this.logger.debug(`Generated token: ${token}`);
    return {
      access_token: token,
      user: { username: user.username, role: user.role },
    };
  }

  async registerUser(dto: RegisterUserDto) {
    this.logger.debug(`Registering user: ${JSON.stringify(dto)}`);
    const existing = await this.userModel.findOne({ username: dto.username });
    if (existing) {
      throw new ConflictException('Username already exists');
    }
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const user = new this.userModel({ ...dto, password: hashedPassword });
    await user.save();
    const { password, ...result } = user.toObject();
    this.logger.debug(`User registered: ${JSON.stringify(result)}`);
    return result;
  }
} 