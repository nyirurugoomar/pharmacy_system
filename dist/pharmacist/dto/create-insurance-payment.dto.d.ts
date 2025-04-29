export declare class CreateInsurancePaymentDto {
    insuranceCompany: string;
    amount: number;
    status: 'Paid' | 'Not Paid' | 'Pending';
    date: Date;
}
