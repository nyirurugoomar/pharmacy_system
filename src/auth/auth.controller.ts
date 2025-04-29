import { Controller, Post, Body, UnauthorizedException, UseGuards, Logger, BadRequestException } from '@nestjs/common';
import { ApiTags, ApiBody, ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from './roles.decorator';
import { RolesGuard } from './roles.guard';
import { Public } from './public.decorator';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(private readonly authService: AuthService) {}

  @Public()
  @ApiBody({ type: LoginDto })
  @Post('login')
  async login(@Body() body: LoginDto) {
    this.logger.debug(`Login attempt for user: ${body.username}`);
    try {
      const user = await this.authService.validateUser(body.username, body.password);
      this.logger.debug(`User logged in successfully: ${user.username} with role: ${user.role}`);
      return this.authService.login(user);
    } catch (error) {
      this.logger.error(`Login failed for user ${body.username}: ${error.message}`);
      throw error;
    }
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin')
  @ApiBearerAuth()
  @ApiBody({ type: RegisterUserDto })
  @Post('register')
  async register(@Body() body: RegisterUserDto) {
    return this.authService.registerUser(body);
  }

  // Example of a protected admin-only endpoint:
  // @UseGuards(AuthGuard('jwt'))
  // @Roles('admin')
  // @Get('admin-only')
  // adminOnly() { return { message: 'Only admin can see this' }; }
} 