import { Document } from 'mongoose';
export type CashierDocument = Cashier & Document;
export declare class Cashier {
    name: string;
    password: string;
}
export declare const CashierSchema: import("mongoose").Schema<Cashier, import("mongoose").Model<Cashier, any, any, any, Document<unknown, any, Cashier> & Cashier & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Cashier, Document<unknown, {}, import("mongoose").FlatRecord<Cashier>> & import("mongoose").FlatRecord<Cashier> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
