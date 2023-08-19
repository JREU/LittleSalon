import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterModule } from '@angular/router';
import { adminShellRoutes } from './admin-shell.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(adminShellRoutes),
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ name: "Admin", maxAge: 25 })
  ],
  exports: [
    RouterModule
  ]
})
export class AdminShellModule {}