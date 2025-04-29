import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CashierService } from './cashier.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { CreateCashierDto } from './dto/create-cashier.dto';
import { CreateEarningDto } from './dto/create-earning.dto';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../auth/roles.decorator';

@ApiTags('Cashier')
@UseGuards(AuthGuard('jwt'))
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
}
