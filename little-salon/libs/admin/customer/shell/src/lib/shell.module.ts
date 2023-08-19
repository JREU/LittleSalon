import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { shellRoutes } from './lib.routes';
import { DataAccessModule } from '@admin/customer/data-access';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(shellRoutes), RouterModule, DataAccessModule],
  exports: [RouterModule]  
})
export class ShellModule {}
