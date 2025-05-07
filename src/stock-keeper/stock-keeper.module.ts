import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StockKeeperService } from './stock-keeper.service';
import { StockKeeperController } from './stock-keeper.controller';
import { Purchase, PurchaseSchema } from './schemas/purchase.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Purchase.name, schema: PurchaseSchema }
    ])
  ],
  controllers: [StockKeeperController],
  providers: [StockKeeperService],
})
export class StockKeeperModule {} 