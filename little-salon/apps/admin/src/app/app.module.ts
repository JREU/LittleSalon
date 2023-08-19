import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AdminShellModule } from '@admin/shell';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AdminShellModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
