import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
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
  createPurchase(@Body() createPurchaseDto: CreatePurchaseDto) {
    return this.stockKeeperService.createPurchase(createPurchaseDto);
  }

  @Roles('admin', 'stock-keeper')
  @Get('purchases')
  getAllPurchases() {
    return this.stockKeeperService.getAllPurchases();
  }
} 