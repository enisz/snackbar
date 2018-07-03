import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { SnackbarConfig } from './snackbar-config.interface';

const defaultConfig: SnackbarConfig = {
	type : 'info',
	timeout : 5000,
	message : '',
  close : true,
  // buttons : [
  //   {
  //     label : 'ok',
  //     action : () => console.log ('ok')
  //   }
  // ]
};

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
    // Setting default values
    for(let x in defaultConfig)
      if(config[x] === undefined)
        config[x] = defaultConfig[x];

    this.addSubject.next(config);
  }

}
