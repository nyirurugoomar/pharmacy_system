import { Model } from 'mongoose';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { Purchase } from './schemas/purchase.schema';
export declare class StockKeeperService {
    private purchaseModel;
    constructor(purchaseModel: Model<Purchase>);
    createPurchase(createPurchaseDto: CreatePurchaseDto): Promise<{
        message: string;
        data: import("mongoose").Document<unknown, {}, Purchase> & Purchase & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
    getAllPurchases(): Promise<(import("mongoose").Document<unknown, {}, Purchase> & Purchase & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    getPurchaseById(id: string): Promise<import("mongoose").Document<unknown, {}, Purchase> & Purchase & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    updatePurchase(id: string, updatePurchaseDto: any): Promise<import("mongoose").Document<unknown, {}, Purchase> & Purchase & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    deletePurchase(id: string): Promise<{
        message: string;
    }>;
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
