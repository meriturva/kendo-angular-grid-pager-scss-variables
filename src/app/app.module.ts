import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PagerModule } from '@progress/kendo-angular-pager';
import { GridModule} from "@progress/kendo-angular-grid";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagerModule,
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
