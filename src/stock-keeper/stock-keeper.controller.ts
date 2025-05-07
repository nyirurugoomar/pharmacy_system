import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { StockKeeperService } from './stock-keeper.service';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../auth/roles.decorator';

@ApiTags('Stock Keeper')
@UseGuards(AuthGuard('jwt'))
@Controller('stock-keeper')
export class StockKeeperController {
  constructor(private readonly stockKeeperService: StockKeeperService) {}

  @Roles('admin', 'stock-keeper')
  @Post('purchase')
  @ApiOperation({ summary: 'Create a new purchase' })
  createPurchase(@Body() createPurchaseDto: CreatePurchaseDto) {
    return this.stockKeeperService.createPurchase(createPurchaseDto);
  }

  @Roles('admin', 'stock-keeper')
  @Get('purchases')
  @ApiOperation({ summary: 'Get all purchases' })
  getAllPurchases() {
    return this.stockKeeperService.getAllPurchases();
  }

  @Roles('admin', 'stock-keeper')
  @Get('total-purchases')
  @ApiOperation({ summary: 'Get total purchases summary' })
  @ApiResponse({ description: 'Returns total amount, number of purchases, and total quantity' })
  getTotalPurchases() {
    return this.stockKeeperService.getTotalPurchases();
  }

  @Roles('admin', 'stock-keeper')
  @Get('outstanding-credits')
  @ApiOperation({ summary: 'Get outstanding credits summary' })
  @ApiResponse({ description: 'Returns total outstanding amount and number of pending purchases' })
  getOutstandingCredits() {
    return this.stockKeeperService.getOutstandingCredits();
  }

  @Roles('admin', 'stock-keeper')
  @Get('summary')
  @ApiOperation({ summary: 'Get complete purchase summary' })
  @ApiResponse({ description: 'Returns combined summary of total purchases and outstanding credits' })
  getPurchaseSummary() {
    return this.stockKeeperService.getPurchaseSummary();
  }
} 