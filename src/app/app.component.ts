import { Component, OnInit } from '@angular/core';
import { SnackbarService } from './snackbar/snackbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(
    public snackbarService: SnackbarService
  ){}

  ngOnInit(){
    this.snackbarService.getObservable().subscribe(
      response =>
      {
        console.log(response);
      }
    )
  }

  public addSnackbar()
  {
    const types = ['primary', 'secondary', 'light', 'dark', 'success', 'danger', 'warning', 'info'];

    const index = Math.round(Math.random() * ((types.length - 1) - 0) + 0);
    console.log(index);

    this.snackbarService.addSnackbar({ type : types[index], message : `Generated ${types[index]} snackbar!` });
  }
}
