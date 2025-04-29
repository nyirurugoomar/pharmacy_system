import { Document } from 'mongoose';
export declare class InsuranceRecord extends Document {
    insuranceCompany: string;
    clientCount: number;
    date: Date;
}
export declare const InsuranceRecordSchema: import("mongoose").Schema<InsuranceRecord, import("mongoose").Model<InsuranceRecord, any, any, any, Document<unknown, any, InsuranceRecord> & InsuranceRecord & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, InsuranceRecord, Document<unknown, {}, import("mongoose").FlatRecord<InsuranceRecord>> & import("mongoose").FlatRecord<InsuranceRecord> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
