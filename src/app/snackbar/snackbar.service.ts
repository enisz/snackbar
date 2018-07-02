import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { SnackbarConfig } from './snackbar-config.interface';

@Injectable()
export class SnackbarService {

  private addSubject: Subject<any> = new Subject();

  constructor() { }

  public getObservable()
  {
    return this.addSubject.asObservable();
  }

  public addSnackbar(config: SnackbarConfig)
  {
    if(!config.timeout)
      config.timeout = 10000;
    
    if(!config.icon)
    switch(config.type)
    {
      /**
       * primary
       * secondary
       * success
       * danger
       * warning
       * info
       * light
       * dark
       */
      // case 'primary':
      // break;

      // case 'secondary':
      // break;

      case 'success':
        config.icon = 'check-circle';
      break;

      case 'danger':
        config.icon = 'exclamation-circle';
      break;

      case 'warning':
        config.icon = 'exclamation-triangle';
      break;

      // case 'info':
      // 	config.icon = 'info-circle';
      // break;

      // case 'light':
      // break;

      // case 'dark':
      // break;

      default:
        config.icon = 'info-circle';
      break;
    }


    this.addSubject.next(config);
  }

}
