import { Module } from '@nestjs/common';
import { StockKeeperService } from './stock-keeper.service';
import { StockKeeperController } from './stock-keeper.controller';
 
@Module({
  controllers: [StockKeeperController],
  providers: [StockKeeperService],
})
export class StockKeeperModule {} 