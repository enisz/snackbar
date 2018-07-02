import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SnackbarModule } from './snackbar/snackbar.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SnackbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
