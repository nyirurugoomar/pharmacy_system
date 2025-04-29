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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcryptjs");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("./schemas/user.schema");
let AuthService = AuthService_1 = class AuthService {
    constructor(jwtService, userModel) {
        this.jwtService = jwtService;
        this.userModel = userModel;
        this.logger = new common_1.Logger(AuthService_1.name);
    }
    async validateUser(username, password) {
        this.logger.debug(`Attempting to validate user: ${username}`);
        const user = await this.userModel.findOne({ username });
        if (!user) {
            this.logger.warn(`User not found: ${username}`);
            throw new common_1.UnauthorizedException('User not found');
        }
        this.logger.debug(`User found: ${JSON.stringify(user)}`);
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            this.logger.warn(`Invalid password for user: ${username}`);
            throw new common_1.UnauthorizedException('Invalid password');
        }
        return user;
    }
    async login(user) {
        this.logger.debug(`Logging in user: ${JSON.stringify(user)}`);
        if (!user || !user._id || !user.username || !user.role) {
            this.logger.error('Invalid user object for login');
            throw new common_1.UnauthorizedException('Invalid user data');
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
    async registerUser(dto) {
        this.logger.debug(`Registering user: ${JSON.stringify(dto)}`);
        const existing = await this.userModel.findOne({ username: dto.username });
        if (existing) {
            throw new common_1.ConflictException('Username already exists');
        }
        const hashedPassword = await bcrypt.hash(dto.password, 10);
        const user = new this.userModel({ ...dto, password: hashedPassword });
        await user.save();
        const { password, ...result } = user.toObject();
        this.logger.debug(`User registered: ${JSON.stringify(result)}`);
        return result;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        mongoose_2.Model])
], AuthService);
//# sourceMappingURL=auth.service.js.map