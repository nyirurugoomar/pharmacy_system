import { Document } from 'mongoose';
export type PharmacistDocument = Pharmacist & Document;
export declare class Pharmacist {
    name: string;
    password: string;
}
export declare const PharmacistSchema: import("mongoose").Schema<Pharmacist, import("mongoose").Model<Pharmacist, any, any, any, Document<unknown, any, Pharmacist> & Pharmacist & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Pharmacist, Document<unknown, {}, import("mongoose").FlatRecord<Pharmacist>> & import("mongoose").FlatRecord<Pharmacist> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
