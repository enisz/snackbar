import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SnackbarComponent } from './snackbar.component';
import { SnackbarService } from './snackbar.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports : [
    SnackbarComponent
  ],
  declarations: [SnackbarComponent],
  providers : [ SnackbarService ]
})
export class SnackbarModule { }
