import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StringCalculatorTddComponent } from './string-calculator-tdd/string-calculator-tdd.component';
import { FormsModule } from '@angular/forms';
import { TddServiceService } from './string-calculator-tdd/tdd-service.service';

@NgModule({
  declarations: [
    AppComponent,
    StringCalculatorTddComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TddServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
