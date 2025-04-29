import { CreatePurchaseDto } from './dto/create-purchase.dto';
export declare class StockKeeperService {
    private purchases;
    createPurchase(createPurchaseDto: CreatePurchaseDto): {
        message: string;
        data: CreatePurchaseDto;
    };
    getAllPurchases(): any[];
}
