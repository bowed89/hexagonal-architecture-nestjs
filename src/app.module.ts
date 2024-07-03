import { Module } from '@nestjs/common';
import { PaymentModule } from './contexts/payments/infrastructure/payment.module';


@Module({
  imports: [PaymentModule]
})
export class AppModule { }
