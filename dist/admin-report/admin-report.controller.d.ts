import { AdminReportService } from './admin-report.service';
export declare class AdminReportController {
    private readonly adminReportService;
    constructor(adminReportService: AdminReportService);
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
