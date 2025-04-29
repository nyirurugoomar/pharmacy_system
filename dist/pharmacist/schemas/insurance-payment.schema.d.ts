import { Document } from 'mongoose';
export declare class InsurancePayment extends Document {
    insuranceCompany: string;
    amount: number;
    status: string;
    date: Date;
}
export declare const InsurancePaymentSchema: import("mongoose").Schema<InsurancePayment, import("mongoose").Model<InsurancePayment, any, any, any, Document<unknown, any, InsurancePayment> & InsurancePayment & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, InsurancePayment, Document<unknown, {}, import("mongoose").FlatRecord<InsurancePayment>> & import("mongoose").FlatRecord<InsurancePayment> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
