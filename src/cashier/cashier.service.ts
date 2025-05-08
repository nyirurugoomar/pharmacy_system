import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sale, SaleDocument } from './schemas/sale.schema';
import { CreateSaleDto } from './dto/create-sale.dto';
import { Cashier, CashierDocument } from './schemas/cashier.schema';
import { CreateCashierDto } from './dto/create-cashier.dto';
import { Earning, EarningSchema } from './schemas/earning.schema';
import { Expense, ExpenseSchema } from './schemas/expense.schema';
import { CreateEarningDto } from './dto/create-earning.dto';
import { CreateExpenseDto } from './dto/create-expense.dto';
import * as ExcelJS from 'exceljs';
import * as PDFDocument from 'pdfkit';

@Injectable()
export class CashierService {
  constructor(
    @InjectModel(Sale.name) private saleModel: Model<SaleDocument>,
    @InjectModel(Cashier.name) private cashierModel: Model<CashierDocument>,
    @InjectModel(Earning.name) private earningModel: Model<Earning>,
    @InjectModel(Expense.name) private expenseModel: Model<Expense>,
  ) {}

  async createSale(createSaleDto: CreateSaleDto) {
    try {
      const sale = new this.saleModel({
        ...createSaleDto,
        date: new Date(),
      });
      return await sale.save();
    } catch (error) {
      throw new Error(`Failed to create sale: ${error.message}`);
    }
  }

  async getSales() {
    try {
      return await this.saleModel.find().sort({ date: -1 }).exec();
    } catch (error) {
      throw new Error(`Failed to fetch sales: ${error.message}`);
    }
  }

  async createCashier(createCashierDto: CreateCashierDto) {
    try {
      const cashier = new this.cashierModel(createCashierDto);
      return await cashier.save();
    } catch (error) {
      throw new Error(`Failed to create cashier: ${error.message}`);
    }
  }

  async getCashiers() {
    try {
      return await this.cashierModel.find().exec();
    } catch (error) {
      throw new Error(`Failed to fetch cashiers: ${error.message}`);
    }
  }

  async createEarning(dto: CreateEarningDto) {
    try {
      // Validate amounts
      if (dto.posAmount < 0 || dto.cashAmount < 0 || dto.momoAmount < 0) {
        throw new Error('Amounts cannot be negative');
      }

      const earning = new this.earningModel({
        ...dto,
        date: new Date(),
      });
      return await earning.save();
    } catch (error) {
      throw new Error(`Failed to create earning: ${error.message}`);
    }
  }

  async getEarnings(date?: Date) {
    try {
      const query = date ? { date } : {};
      return await this.earningModel.find(query).sort({ date: -1 }).exec();
    } catch (error) {
      throw new Error(`Failed to fetch earnings: ${error.message}`);
    }
  }

  async createExpense(dto: CreateExpenseDto) {
    try {
      if (dto.amount < 0) {
        throw new Error('Amount cannot be negative');
      }

      const expense = new this.expenseModel({
        ...dto,
        date: new Date(),
      });
      return await expense.save();
    } catch (error) {
      throw new Error(`Failed to create expense: ${error.message}`);
    }
  }

  async getExpenses(date?: Date) {
    try {
      const query = date ? { date } : {};
      return await this.expenseModel.find(query).sort({ date: -1 }).exec();
    } catch (error) {
      throw new Error(`Failed to fetch expenses: ${error.message}`);
    }
  }

  async getNetProfit(date?: Date) {
    try {
      let query = {};
      
      if (date) {
        // Validate date
        const parsedDate = new Date(date);
        if (isNaN(parsedDate.getTime())) {
          throw new Error('Invalid date provided');
        }
        
        // Set time to start of day
        const startOfDay = new Date(parsedDate);
        startOfDay.setHours(0, 0, 0, 0);
        
        // Set time to end of day
        const endOfDay = new Date(parsedDate);
        endOfDay.setHours(23, 59, 59, 999);
        
        query = {
          date: {
            $gte: startOfDay,
            $lte: endOfDay
          }
        };
      }
      
      const [earnings, expenses] = await Promise.all([
        this.earningModel.find(query).exec(),
        this.expenseModel.find(query).exec()
      ]);

      const totalEarnings = earnings.reduce((sum, e) => {
        return sum + (Number(e.posAmount) || 0) + (Number(e.cashAmount) || 0) + (Number(e.momoAmount) || 0);
      }, 0);

      const totalExpenses = expenses.reduce((sum, ex) => sum + (Number(ex.amount) || 0), 0);

      const posTotal = earnings.reduce((sum, e) => sum + (Number(e.posAmount) || 0), 0);
      const cashTotal = earnings.reduce((sum, e) => sum + (Number(e.cashAmount) || 0), 0);
      const momoTotal = earnings.reduce((sum, e) => sum + (Number(e.momoAmount) || 0), 0);

      return {
        earnings: totalEarnings,
        expenses: totalExpenses,
        netProfit: totalEarnings - totalExpenses,
        breakdown: {
          posTotal,
          cashTotal,
          momoTotal,
          totalTransactions: earnings.length
        }
      };
    } catch (error) {
      throw new Error(`Failed to calculate net profit: ${error.message}`);
    }
  }

  async getDailyReport(date: Date) {
    try {
      // Validate date
      const parsedDate = new Date(date);
      if (isNaN(parsedDate.getTime())) {
        throw new Error('Invalid date provided');
      }

      const startOfDay = new Date(parsedDate);
      startOfDay.setHours(0, 0, 0, 0);
      
      const endOfDay = new Date(parsedDate);
      endOfDay.setHours(23, 59, 59, 999);

      const [earnings, expenses] = await Promise.all([
        this.earningModel.find({
          date: {
            $gte: startOfDay,
            $lte: endOfDay
          }
        }).exec(),
        this.expenseModel.find({
          date: {
            $gte: startOfDay,
            $lte: endOfDay
          }
        }).exec()
      ]);

      const totalEarnings = earnings.reduce((sum, e) => {
        return sum + (Number(e.posAmount) || 0) + (Number(e.cashAmount) || 0) + (Number(e.momoAmount) || 0);
      }, 0);

      const totalExpenses = expenses.reduce((sum, ex) => sum + (Number(ex.amount) || 0), 0);

      const posTotal = earnings.reduce((sum, e) => sum + (Number(e.posAmount) || 0), 0);
      const cashTotal = earnings.reduce((sum, e) => sum + (Number(e.cashAmount) || 0), 0);
      const momoTotal = earnings.reduce((sum, e) => sum + (Number(e.momoAmount) || 0), 0);

      return {
        date: parsedDate,
        earnings: totalEarnings,
        expenses: totalExpenses,
        netProfit: totalEarnings - totalExpenses,
        breakdown: {
          posTotal,
          cashTotal,
          momoTotal,
          totalTransactions: earnings.length
        }
      };
    } catch (error) {
      throw new Error(`Failed to generate daily report: ${error.message}`);
    }
  }

  async getInsuranceStatus(startDate?: Date, endDate?: Date) {
    try {
      const query: any = {};
      
      if (startDate && endDate) {
        query.date = {
          $gte: new Date(startDate),
          $lte: new Date(endDate)
        };
      }

      const sales = await this.saleModel.find(query).exec();
      
      const insuranceStats = sales.reduce((acc, sale) => {
        if (sale.insurance) {
          acc.totalInsuranceAmount += Number(sale.insurance.amount) || 0;
          acc.totalInsuranceClaims += 1;
          
          if (sale.insurance.status === 'pending') {
            acc.pendingAmount += Number(sale.insurance.amount) || 0;
            acc.pendingClaims += 1;
          } else if (sale.insurance.status === 'paid') {
            acc.paidAmount += Number(sale.insurance.amount) || 0;
            acc.paidClaims += 1;
          }
        }
        return acc;
      }, {
        totalInsuranceAmount: 0,
        totalInsuranceClaims: 0,
        pendingAmount: 0,
        pendingClaims: 0,
        paidAmount: 0,
        paidClaims: 0
      });

      return {
        ...insuranceStats,
        paymentRate: insuranceStats.totalInsuranceClaims > 0 
          ? (insuranceStats.paidClaims / insuranceStats.totalInsuranceClaims) * 100 
          : 0
      };
    } catch (error) {
      throw new Error(`Failed to get insurance status: ${error.message}`);
    }
  }

  async getPurchaseExpenses(startDate?: Date, endDate?: Date) {
    try {
      const query: any = { type: 'purchase' };
      
      if (startDate && endDate) {
        query.date = {
          $gte: new Date(startDate),
          $lte: new Date(endDate)
        };
      }

      const expenses = await this.expenseModel.find(query).exec();
      
      const summary = expenses.reduce((acc, expense) => {
        acc.totalAmount += Number(expense.amount) || 0;
        acc.totalExpenses += 1;
        
        if (expense.status === 'pending') {
          acc.pendingAmount += Number(expense.amount) || 0;
          acc.pendingExpenses += 1;
        } else if (expense.status === 'paid') {
          acc.paidAmount += Number(expense.amount) || 0;
          acc.paidExpenses += 1;
        }
        
        return acc;
      }, {
        totalAmount: 0,
        totalExpenses: 0,
        pendingAmount: 0,
        pendingExpenses: 0,
        paidAmount: 0,
        paidExpenses: 0
      });

      return {
        ...summary,
        paymentRate: summary.totalExpenses > 0 
          ? (summary.paidExpenses / summary.totalExpenses) * 100 
          : 0
      };
    } catch (error) {
      throw new Error(`Failed to get purchase expenses: ${error.message}`);
    }
  }

  async exportToExcel(startDate?: Date, endDate?: Date) {
    try {
      const workbook = new ExcelJS.Workbook();
      
      // Sales Sheet
      const salesSheet = workbook.addWorksheet('Sales');
      salesSheet.columns = [
        { header: 'Date', key: 'date' },
        { header: 'Amount', key: 'amount' },
        { header: 'Payment Method', key: 'paymentMethod' },
        { header: 'Insurance', key: 'insurance' }
      ];

      const sales = await this.saleModel.find({
        date: {
          $gte: startDate ? new Date(startDate) : new Date(0),
          $lte: endDate ? new Date(endDate) : new Date()
        }
      }).exec();

      sales.forEach(sale => {
        salesSheet.addRow({
          date: sale.date,
          amount: sale.amount,
          paymentMethod: sale.paymentMethod,
          insurance: sale.insurance ? 'Yes' : 'No'
        });
      });

      // Expenses Sheet
      const expensesSheet = workbook.addWorksheet('Expenses');
      expensesSheet.columns = [
        { header: 'Date', key: 'date' },
        { header: 'Amount', key: 'amount' },
        { header: 'Description', key: 'description' },
        { header: 'Status', key: 'status' }
      ];

      const expenses = await this.expenseModel.find({
        date: {
          $gte: startDate ? new Date(startDate) : new Date(0),
          $lte: endDate ? new Date(endDate) : new Date()
        }
      }).exec();

      expenses.forEach(expense => {
        expensesSheet.addRow({
          date: expense.date,
          amount: expense.amount,
          description: expense.description,
          status: expense.status
        });
      });

      return workbook;
    } catch (error) {
      throw new Error(`Failed to export to Excel: ${error.message}`);
    }
  }

  async exportToPDF(startDate?: Date, endDate?: Date) {
    try {
      const doc = new PDFDocument();
      
      // Add title
      doc.fontSize(20).text('Pharmacy Management System Report', { align: 'center' });
      doc.moveDown();

      // Add date range
      doc.fontSize(12).text(`Report Period: ${startDate ? startDate.toLocaleDateString() : 'All Time'} to ${endDate ? endDate.toLocaleDateString() : 'Present'}`);
      doc.moveDown();

      // Get summary data
      const [netProfit, insuranceStatus, purchaseExpenses] = await Promise.all([
        this.getNetProfit(),
        this.getInsuranceStatus(startDate, endDate),
        this.getPurchaseExpenses(startDate, endDate)
      ]);

      // Add financial summary
      doc.fontSize(16).text('Financial Summary');
      doc.fontSize(12)
        .text(`Total Earnings: $${netProfit.earnings}`)
        .text(`Total Expenses: $${netProfit.expenses}`)
        .text(`Net Profit: $${netProfit.netProfit}`);
      doc.moveDown();

      // Add insurance summary
      doc.fontSize(16).text('Insurance Summary');
      doc.fontSize(12)
        .text(`Total Insurance Claims: ${insuranceStatus.totalInsuranceClaims}`)
        .text(`Pending Claims: ${insuranceStatus.pendingClaims}`)
        .text(`Paid Claims: ${insuranceStatus.paidClaims}`)
        .text(`Payment Rate: ${insuranceStatus.paymentRate.toFixed(2)}%`);
      doc.moveDown();

      // Add purchase expenses summary
      doc.fontSize(16).text('Purchase Expenses Summary');
      doc.fontSize(12)
        .text(`Total Expenses: ${purchaseExpenses.totalExpenses}`)
        .text(`Pending Expenses: ${purchaseExpenses.pendingExpenses}`)
        .text(`Paid Expenses: ${purchaseExpenses.paidExpenses}`)
        .text(`Payment Rate: ${purchaseExpenses.paymentRate.toFixed(2)}%`);

      return doc;
    } catch (error) {
      throw new Error(`Failed to export to PDF: ${error.message}`);
    }
  }
}
