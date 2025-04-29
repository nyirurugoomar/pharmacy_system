import { OnModuleInit } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
export declare class AuthModule implements OnModuleInit {
    private moduleRef;
    private readonly logger;
    constructor(moduleRef: ModuleRef);
    onModuleInit(): Promise<void>;
}
