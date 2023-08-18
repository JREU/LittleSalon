import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterModule, Route } from '@angular/router';
import { shellRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(shellRoutes), RouterModule],
})
export class ShellModule {}
