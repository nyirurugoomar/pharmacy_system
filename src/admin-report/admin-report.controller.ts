import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AdminReportService } from './admin-report.service';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../auth/roles.decorator';

@ApiTags('Admin Report')
@UseGuards(AuthGuard('jwt'))
@Controller('admin-report')
export class AdminReportController {
  constructor(private readonly adminReportService: AdminReportService) {}

  @Roles('admin')
  @Get('earnings-vs-expenses')
  getEarningsVsExpenses(@Query('period') period: string) {
    return this.adminReportService.getEarningsVsExpenses(period);
  }

  @Roles('admin')
  @Get('insurance-status')
  getInsuranceStatus() {
    return this.adminReportService.getInsuranceStatus();
  }

  @Roles('admin')
  @Get('purchase-expenses')
  getPurchaseExpenses() {
    return this.adminReportService.getPurchaseExpenses();
  }

  @Roles('admin')
  @Get('export')
  exportReports(@Query('format') format: string) {
    return this.adminReportService.exportReports(format);
  }
} 