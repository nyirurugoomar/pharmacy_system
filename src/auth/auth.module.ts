import { Module, OnModuleInit, Logger } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { ModuleRef } from '@nestjs/core';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'your-secret-key',
      signOptions: { expiresIn: '1d' },
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule implements OnModuleInit {
  private readonly logger = new Logger(AuthModule.name);

  constructor(private moduleRef: ModuleRef) {}

  async onModuleInit() {
    this.logger.debug('AuthModule initialized');
    const authService = this.moduleRef.get(AuthService);
    try {
      // Try to create default admin if it doesn't exist
      await authService.registerUser({
        username: 'admin',
        password: 'admin123',
        role: 'admin'
      });
      this.logger.debug('Default admin user created successfully');
    } catch (error) {
      if (error.message === 'Username already exists') {
        this.logger.debug('Default admin user already exists');
      } else {
        this.logger.error('Error creating default admin:', error);
      }
    }
  }
} 