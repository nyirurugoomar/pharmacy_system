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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminReportController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const admin_report_service_1 = require("./admin-report.service");
const passport_1 = require("@nestjs/passport");
const roles_decorator_1 = require("../auth/roles.decorator");
let AdminReportController = class AdminReportController {
    constructor(adminReportService) {
        this.adminReportService = adminReportService;
    }
    getEarningsVsExpenses(period) {
        return this.adminReportService.getEarningsVsExpenses(period);
    }
    getInsuranceStatus() {
        return this.adminReportService.getInsuranceStatus();
    }
    getPurchaseExpenses() {
        return this.adminReportService.getPurchaseExpenses();
    }
    exportReports(format) {
        return this.adminReportService.exportReports(format);
    }
};
exports.AdminReportController = AdminReportController;
__decorate([
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Get)('earnings-vs-expenses'),
    __param(0, (0, common_1.Query)('period')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminReportController.prototype, "getEarningsVsExpenses", null);
__decorate([
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Get)('insurance-status'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminReportController.prototype, "getInsuranceStatus", null);
__decorate([
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Get)('purchase-expenses'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminReportController.prototype, "getPurchaseExpenses", null);
__decorate([
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Get)('export'),
    __param(0, (0, common_1.Query)('format')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminReportController.prototype, "exportReports", null);
exports.AdminReportController = AdminReportController = __decorate([
    (0, swagger_1.ApiTags)('Admin Report'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Controller)('admin-report'),
    __metadata("design:paramtypes", [admin_report_service_1.AdminReportService])
], AdminReportController);
//# sourceMappingURL=admin-report.controller.js.map