import { Module } from '@nestjs/common';
import { TransactionsService } from './services/transactions.service';
import { TransactionsController } from './transactions.controller';
import { BankAccountsModule } from '../bank-accounts/bank-accounts.module';
import { ValidateCategoryOwnershipService } from '../categories/services/validate-category-ownership.service';
import { ValidateTransactionOwnershipService } from './services/validate-transaction-ownership.service';

@Module({
  imports: [BankAccountsModule, ValidateCategoryOwnershipService],
  controllers: [TransactionsController],
  providers: [TransactionsService, ValidateTransactionOwnershipService],
})
export class TransactionsModule {}
