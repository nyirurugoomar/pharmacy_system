import { Injectable } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';

@Injectable()
export class StockKeeperService {
  private purchases = [];

  createPurchase(createPurchaseDto: CreatePurchaseDto) {
    // In a real app, save to DB
    this.purchases.push(createPurchaseDto);
    return { message: 'Purchase recorded', data: createPurchaseDto };
  }

  getAllPurchases() {
    // In a real app, fetch from DB
    return this.purchases;
  }
} 