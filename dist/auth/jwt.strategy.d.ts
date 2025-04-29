declare const JwtStrategy_base: new (...args: any) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly logger;
    constructor();
    validate(payload: any): Promise<{
        _id: any;
        username: any;
        role: any;
    }>;
}
export {};
