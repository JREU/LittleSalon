import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { customerFeature } from './infrastructure/store/customer.feature';
import { CustomerEffects } from './infrastructure/store/customer.effects';
import { CustomerService } from './infrastructure/customer.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(customerFeature),
    EffectsModule.forFeature([CustomerEffects]),
    HttpClientModule
  ],
  providers: [
    CustomerService
  ]
})
export class DataAccessModule {}
