import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PharmacistModule } from './pharmacist/pharmacist.module';
import { CashierModule } from './cashier/cashier.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { StockKeeperModule } from './stock-keeper/stock-keeper.module';
import { AdminReportModule } from './admin-report/admin-report.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/roles.guard';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    PharmacistModule,
    CashierModule,
    StockKeeperModule,
    AdminReportModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useFactory: (reflector: Reflector) => {
        const guard = new (AuthGuard('jwt'))();
        return {
          canActivate: (context) => {
            const isPublic = reflector.get<boolean>('isPublic', context.getHandler());
            if (isPublic) {
              return true;
            }
            return guard.canActivate(context);
          }
        };
      },
      inject: [Reflector],
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
