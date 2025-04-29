"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AuthModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const auth_service_1 = require("./auth.service");
const auth_controller_1 = require("./auth.controller");
const jwt_strategy_1 = require("./jwt.strategy");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("./schemas/user.schema");
const core_1 = require("@nestjs/core");
let AuthModule = AuthModule_1 = class AuthModule {
    constructor(moduleRef) {
        this.moduleRef = moduleRef;
        this.logger = new common_1.Logger(AuthModule_1.name);
    }
    async onModuleInit() {
        this.logger.debug('AuthModule initialized');
        const authService = this.moduleRef.get(auth_service_1.AuthService);
        try {
            await authService.registerUser({
                username: 'admin',
                password: 'admin123',
                role: 'admin'
            });
            this.logger.debug('Default admin user created successfully');
        }
        catch (error) {
            if (error.message === 'Username already exists') {
                this.logger.debug('Default admin user already exists');
            }
            else {
                this.logger.error('Error creating default admin:', error);
            }
        }
    }
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = AuthModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.register({
                secret: 'your-secret-key',
                signOptions: { expiresIn: '1d' },
            }),
            mongoose_1.MongooseModule.forFeature([{ name: user_schema_1.User.name, schema: user_schema_1.UserSchema }]),
        ],
        providers: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy],
        controllers: [auth_controller_1.AuthController],
        exports: [auth_service_1.AuthService],
    }),
    __metadata("design:paramtypes", [core_1.ModuleRef])
], AuthModule);
//# sourceMappingURL=auth.module.js.map