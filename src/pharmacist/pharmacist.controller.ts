import { Controller, Post, Get, Body, Param, Put, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { PharmacistService } from './pharmacist.service';
import { CreateMedicineDto } from './dto/create-medicine';
import { CreatePharmacistDto } from './dto/create-pharmacist';
import { CreateInsuranceRecordDto } from './dto/create-insurance-record.dto';
import { CreateInsurancePaymentDto } from './dto/create-insurance-payment.dto';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../auth/roles.decorator';

@ApiTags('Pharmacist')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('JWT-auth')
@Controller('pharmacist')
export class PharmacistController {
  constructor(private readonly pharmacistService: PharmacistService) {}

  @Roles('admin', 'pharmacist')
  @Post('create-medicine')
  async createMedicine(@Body() createMedicineDto: CreateMedicineDto) {
    return this.pharmacistService.createMedicine(createMedicineDto);
  }

  @Roles('admin', 'pharmacist')
  @Get('all-medicine')
  async getAllMedicines() {
    return this.pharmacistService.getAllMedicines();
  }

  @Roles('admin', 'pharmacist')
  @Put('update-stock/:medicineName')
  async updateStock(
    @Param('medicineName') medicineName: string,
    @Body('quantity') quantity: number,
  ) {
    return this.pharmacistService.updateStock(medicineName, quantity);
  }

  @Roles('admin')
  @Post('pharmacist-register')
  createPharmacist(@Body() createPharmacistDto: CreatePharmacistDto) {
    return this.pharmacistService.createPharmacist(createPharmacistDto);
  }

  @Roles('admin', 'pharmacist')
  @Post('insurance-record')
  createInsuranceRecord(@Body() dto: CreateInsuranceRecordDto) {
    return this.pharmacistService.createInsuranceRecord(dto);
  }

  @Roles('admin', 'pharmacist')
  @Get('insurance-records')
  getInsuranceRecords(@Query('date') date?: string) {
    return this.pharmacistService.getInsuranceRecords(date ? new Date(date) : undefined);
  }

  @Roles('admin', 'pharmacist')
  @Post('insurance-payment')
  createInsurancePayment(@Body() dto: CreateInsurancePaymentDto) {
    return this.pharmacistService.createInsurancePayment(dto);
  }

  @Roles('admin', 'pharmacist')
  @Get('insurance-payments')
  getInsurancePayments(@Query('date') date?: string) {
    return this.pharmacistService.getInsurancePayments(date ? new Date(date) : undefined);
  }
}
