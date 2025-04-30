import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Logger,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  private readonly logger = new Logger(RolesGuard.name);

  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    this.logger.debug(`Checking roles for user: ${JSON.stringify(user)}`);
    this.logger.debug(`Required roles: ${requiredRoles}`);

    if (!user || !user.role) {
      this.logger.warn('User or user role not found in request');
      throw new ForbiddenException('User role not found');
    }

    const hasRole = requiredRoles.includes(user.role);
    this.logger.debug(`User has required role: ${hasRole}`);

    if (!hasRole) {
      this.logger.warn(`User ${user.username} with role ${user.role} does not have required roles: ${requiredRoles}`);
      throw new ForbiddenException('Insufficient permissions');
    }

    return true;
  }
}
