"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const pharmacist_module_1 = require("./pharmacist/pharmacist.module");
const cashier_module_1 = require("./cashier/cashier.module");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const stock_keeper_module_1 = require("./stock-keeper/stock-keeper.module");
const admin_report_module_1 = require("./admin-report/admin-report.module");
const auth_module_1 = require("./auth/auth.module");
const core_1 = require("@nestjs/core");
const roles_guard_1 = require("./auth/roles.guard");
const core_2 = require("@nestjs/core");
const passport_1 = require("@nestjs/passport");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.env',
                isGlobal: true,
            }),
            mongoose_1.MongooseModule.forRoot(process.env.DB_URI),
            pharmacist_module_1.PharmacistModule,
            cashier_module_1.CashierModule,
            stock_keeper_module_1.StockKeeperModule,
            admin_report_module_1.AdminReportModule,
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_GUARD,
                useFactory: (reflector) => {
                    const guard = new ((0, passport_1.AuthGuard)('jwt'))();
                    return {
                        canActivate: (context) => {
                            const isPublic = reflector.get('isPublic', context.getHandler());
                            if (isPublic) {
                                return true;
                            }
                            return guard.canActivate(context);
                        }
                    };
                },
                inject: [core_2.Reflector],
            },
            {
                provide: core_1.APP_GUARD,
                useClass: roles_guard_1.RolesGuard,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map