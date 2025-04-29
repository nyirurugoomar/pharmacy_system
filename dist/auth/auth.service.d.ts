import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { RegisterUserDto } from './dto/register-user.dto';
export declare class AuthService {
    private jwtService;
    private userModel;
    private readonly logger;
    constructor(jwtService: JwtService, userModel: Model<UserDocument>);
    validateUser(username: string, password: string): Promise<import("mongoose").Document<unknown, {}, UserDocument> & User & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    login(user: any): Promise<{
        access_token: string;
        user: {
            username: any;
            role: any;
        };
    }>;
    registerUser(dto: RegisterUserDto): Promise<{
        username: string;
        role: string;
        _id: unknown;
        $locals: Record<string, unknown>;
        $op: "save" | "validate" | "remove" | null;
        $where: Record<string, unknown>;
        baseModelName?: string;
        collection: import("mongoose").Collection;
        db: import("mongoose").Connection;
        errors?: import("mongoose").Error.ValidationError;
        id?: any;
        isNew: boolean;
        schema: import("mongoose").Schema;
        __v: number;
    }>;
}
