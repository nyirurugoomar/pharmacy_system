import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { Purchase } from './schemas/purchase.schema';

@Injectable()
export class StockKeeperService {
  constructor(
    @InjectModel(Purchase.name) private purchaseModel: Model<Purchase>
  ) {}

  async createPurchase(createPurchaseDto: CreatePurchaseDto) {
    const newPurchase = new this.purchaseModel(createPurchaseDto);
    const savedPurchase = await newPurchase.save();
    return { message: 'Purchase recorded successfully', data: savedPurchase };
  }

  async getAllPurchases() {
    const purchases = await this.purchaseModel.find().sort({ purchaseDate: -1 });
    return purchases;
  }

  async getPurchaseById(id: string) {
    const purchase = await this.purchaseModel.findById(id);
    return purchase;
  }

  async updatePurchase(id: string, updatePurchaseDto: any) {
    const updatedPurchase = await this.purchaseModel.findByIdAndUpdate(
      id,
      updatePurchaseDto,
      { new: true }
    );
    return updatedPurchase;
  }

  async deletePurchase(id: string) {
    await this.purchaseModel.findByIdAndDelete(id);
    return { message: 'Purchase deleted successfully' };
  }

  async getTotalPurchases() {
    const result = await this.purchaseModel.aggregate([
      {
        $group: {
          _id: null,
          totalAmount: { $sum: '$totalAmount' },
          totalPurchases: { $sum: 1 },
          totalQuantity: { $sum: '$quantity' }
        }
      }
    ]);

    return result[0] || { totalAmount: 0, totalPurchases: 0, totalQuantity: 0 };
  }

  async getOutstandingCredits() {
    const result = await this.purchaseModel.aggregate([
      {
        $match: {
          status: 'pending'
        }
      },
      {
        $group: {
          _id: null,
          totalOutstanding: { $sum: '$totalAmount' },
          numberOfOutstanding: { $sum: 1 }
        }
      }
    ]);

    return result[0] || { totalOutstanding: 0, numberOfOutstanding: 0 };
  }

  async getPurchaseSummary() {
    const [totalPurchases, outstandingCredits] = await Promise.all([
      this.getTotalPurchases(),
      this.getOutstandingCredits()
    ]);

    return {
      totalPurchases,
      outstandingCredits,
      summary: {
        totalAmount: totalPurchases.totalAmount,
        totalPurchases: totalPurchases.totalPurchases,
        totalQuantity: totalPurchases.totalQuantity,
        totalOutstanding: outstandingCredits.totalOutstanding,
        numberOfOutstanding: outstandingCredits.numberOfOutstanding
      }
    };
  }
} 