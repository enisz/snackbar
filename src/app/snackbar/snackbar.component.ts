import { Component, OnInit } from '@angular/core';
import { snackbarAnimation } from './snackbar.animation';
import { SnackbarService } from './snackbar.service';

@Component({
  selector: 'snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  animations : [ snackbarAnimation ]
})
export class SnackbarComponent implements OnInit {

  constructor(
    public snackbarService: SnackbarService
  ) { }

  public snackbars = [];

  public removeMe(index: number)
  {
    clearTimeout(this.snackbars[index].id);
    this.snackbars.splice(index, 1);
  }

  ngOnInit() {
    this.snackbarService.getObservable().subscribe(
      snackbarConfig => {

        console.log(snackbarConfig);
        
        const index = setTimeout( () => {
          for(let x in this.snackbars)
            if(this.snackbars[x].id == index)
            {
              this.snackbars.splice(parseInt(x), 1);
              break;
            }
        }, snackbarConfig.timeout);

        this.snackbars.push({ id : index, config : snackbarConfig })
      }
    );
  }

}
