export declare class AdminReportService {
    getEarningsVsExpenses(period: string): {
        period: string;
        earnings: number;
        expenses: number;
        netProfit: number;
    };
    getInsuranceStatus(): {
        received: number;
        pending: number;
    };
    getPurchaseExpenses(): {
        totalPurchases: number;
        outstandingCredits: number;
    };
    exportReports(format: string): {
        message: string;
    };
}
