import { StockKeeperService } from './stock-keeper.service';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
export declare class StockKeeperController {
    private readonly stockKeeperService;
    constructor(stockKeeperService: StockKeeperService);
    createPurchase(createPurchaseDto: CreatePurchaseDto): Promise<{
        message: string;
        data: import("mongoose").Document<unknown, {}, import("./schemas/purchase.schema").Purchase> & import("./schemas/purchase.schema").Purchase & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
    getAllPurchases(): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/purchase.schema").Purchase> & import("./schemas/purchase.schema").Purchase & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    getTotalPurchases(): Promise<any>;
    getOutstandingCredits(): Promise<any>;
    getPurchaseSummary(): Promise<{
        totalPurchases: any;
        outstandingCredits: any;
        summary: {
            totalAmount: any;
            totalPurchases: any;
            totalQuantity: any;
            totalOutstanding: any;
            numberOfOutstanding: any;
        };
    }>;
}
