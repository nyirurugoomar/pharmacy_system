import { Document } from 'mongoose';
export type MedicineDocument = Medicine & Document;
export declare class Medicine {
    name: string;
    stock: number;
    price: number;
    description: string;
    available: boolean;
    createdAt: Date;
}
export declare const MedicineSchema: import("mongoose").Schema<Medicine, import("mongoose").Model<Medicine, any, any, any, Document<unknown, any, Medicine> & Medicine & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Medicine, Document<unknown, {}, import("mongoose").FlatRecord<Medicine>> & import("mongoose").FlatRecord<Medicine> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
