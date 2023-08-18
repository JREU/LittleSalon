import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { customerListRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(customerListRoutes)],
  declarations: [ListComponent],
})
export class FeatureListModule {}
