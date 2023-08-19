import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { customerRoutes } from './customer.routes';
import { DataAccessModule } from '@admin/customer/data-access';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(customerRoutes), RouterModule, DataAccessModule],
  exports: [RouterModule]  
})
export class CustomerShellModule {}
