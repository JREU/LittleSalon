import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { customerDetailsRoutes } from './lib.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(customerDetailsRoutes)],
  declarations: [DetailsComponent],
})
export class FeatureDetailsModule {}