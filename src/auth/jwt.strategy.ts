import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  private readonly logger = new Logger(JwtStrategy.name);

  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'your-secret-key',
    });
    this.logger.debug('JWT Strategy initialized');
  }

  async validate(payload: any) {
    if (!payload || !payload.sub || !payload.username || !payload.role) {
      throw new UnauthorizedException('Invalid token');
    }
  
    return {
      _id: payload.sub,
      username: payload.username,
      role: payload.role
    };
  }
} 