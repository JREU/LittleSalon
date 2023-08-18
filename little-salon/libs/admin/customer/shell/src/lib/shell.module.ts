import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { shellRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(shellRoutes), RouterModule],
  exports: [RouterModule]  
})
export class ShellModule {}
