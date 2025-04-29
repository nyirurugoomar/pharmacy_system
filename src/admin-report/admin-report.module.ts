import { Module } from '@nestjs/common';
import { AdminReportService } from './admin-report.service';
import { AdminReportController } from './admin-report.controller';
 
@Module({
  controllers: [AdminReportController],
  providers: [AdminReportService],
})
export class AdminReportModule {} 