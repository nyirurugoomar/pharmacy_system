import { Body, Controller, Get, Post, Query, UseGuards, Res } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { CashierService } from './cashier.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { CreateCashierDto } from './dto/create-cashier.dto';
import { CreateEarningDto } from './dto/create-earning.dto';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../auth/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Response } from 'express';

@ApiTags('Cashier')
@UseGuards(AuthGuard('jwt'), JwtAuthGuard, RolesGuard)
@Controller('cashier')
export class CashierController {
  constructor(private readonly cashierService: CashierService) {}

  @Roles('admin', 'cashier')
  @Post('create-sale')
  createSale(@Body() createSaleDto: CreateSaleDto) {
    return this.cashierService.createSale(createSaleDto);
  }
  @Roles('admin', 'cashier')
  @Get('get-sales')
    getSales() {
        return this.cashierService.getSales();
    }
  @Roles('admin')
    @Post('cashier-register')
    createCashier(@Body() createCashierDto: CreateCashierDto) {
        return this.cashierService.createCashier(createCashierDto);
    }
  @Roles('admin', 'cashier')
  @Post('earning')
  createEarning(@Body() dto: CreateEarningDto) {
    return this.cashierService.createEarning(dto);
  }
  @Roles('admin', 'cashier')
  @Get('earnings')
  getEarnings(@Query('date') date?: string) {
    return this.cashierService.getEarnings(date ? new Date(date) : undefined);
  }
  @Roles('admin', 'cashier')
  @Post('expense')
  createExpense(@Body() dto: CreateExpenseDto) {
    return this.cashierService.createExpense(dto);
  }
  @Roles('admin', 'cashier')
  @Get('expenses')
  getExpenses(@Query('date') date?: string) {
    return this.cashierService.getExpenses(date ? new Date(date) : undefined);
  }
  @Roles('admin', 'cashier')
  @Get('net-profit')
  getNetProfit(@Query('date') date: string) {
    return this.cashierService.getNetProfit(new Date(date));
  }

  @Get('insurance-status')
  @Roles('admin')
  @ApiOperation({ summary: 'Get insurance claims status' })
  @ApiQuery({ name: 'startDate', required: false, type: Date })
  @ApiQuery({ name: 'endDate', required: false, type: Date })
  @ApiResponse({ status: 200, description: 'Returns insurance claims statistics' })
  async getInsuranceStatus(
    @Query('startDate') startDate?: Date,
    @Query('endDate') endDate?: Date,
  ) {
    return this.cashierService.getInsuranceStatus(startDate, endDate);
  }

  @Get('purchase-expenses')
  @Roles('admin')
  @ApiOperation({ summary: 'Get purchase expenses and credits' })
  @ApiQuery({ name: 'startDate', required: false, type: Date })
  @ApiQuery({ name: 'endDate', required: false, type: Date })
  @ApiResponse({ status: 200, description: 'Returns purchase expenses statistics' })
  async getPurchaseExpenses(
    @Query('startDate') startDate?: Date,
    @Query('endDate') endDate?: Date,
  ) {
    return this.cashierService.getPurchaseExpenses(startDate, endDate);
  }

  @Get('export/excel')
  @Roles('admin')
  @ApiOperation({ summary: 'Export data to Excel' })
  @ApiQuery({ name: 'startDate', required: false, type: Date })
  @ApiQuery({ name: 'endDate', required: false, type: Date })
  @ApiResponse({ status: 200, description: 'Returns Excel file' })
  async exportToExcel(
    @Res() res: Response,
    @Query('startDate') startDate?: Date,
    @Query('endDate') endDate?: Date,
  ) {
    const workbook = await this.cashierService.exportToExcel(startDate, endDate);
    
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    res.setHeader(
      'Content-Disposition',
      'attachment; filename=pharmacy-report.xlsx',
    );

    await workbook.xlsx.write(res);
    res.end();
  }

  @Get('export/pdf')
  @Roles('admin')
  @ApiOperation({ summary: 'Export data to PDF' })
  @ApiQuery({ name: 'startDate', required: false, type: Date })
  @ApiQuery({ name: 'endDate', required: false, type: Date })
  @ApiResponse({ status: 200, description: 'Returns PDF file' })
  async exportToPDF(
    @Res() res: Response,
    @Query('startDate') startDate?: Date,
    @Query('endDate') endDate?: Date,
  ) {
    const doc = await this.cashierService.exportToPDF(startDate, endDate);
    
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader(
      'Content-Disposition',
      'attachment; filename=pharmacy-report.pdf',
    );

    doc.pipe(res);
    doc.end();
  }
}
