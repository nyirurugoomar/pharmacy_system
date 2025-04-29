import { StockKeeperService } from './stock-keeper.service';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
export declare class StockKeeperController {
    private readonly stockKeeperService;
    constructor(stockKeeperService: StockKeeperService);
    createPurchase(createPurchaseDto: CreatePurchaseDto): {
        message: string;
        data: CreatePurchaseDto;
    };
    getAllPurchases(): any[];
}
