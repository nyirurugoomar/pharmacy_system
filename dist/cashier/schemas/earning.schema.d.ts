import { Document } from 'mongoose';
export declare class Earning extends Document {
    posAmount: number;
    cashAmount: number;
    momoAmount: number;
    date: Date;
}
export declare const EarningSchema: import("mongoose").Schema<Earning, import("mongoose").Model<Earning, any, any, any, Document<unknown, any, Earning> & Earning & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Earning, Document<unknown, {}, import("mongoose").FlatRecord<Earning>> & import("mongoose").FlatRecord<Earning> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
