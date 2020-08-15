import { Injectable } from '@angular/core';
import {IConfig} from '@shared/models/config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  private configObject: IConfig = {};

  constructor() { }

  setConfigValues(props: IConfig) {
    this.configObject = {...this.configObject, ...props};
  }

  getConfigObject() {
    return {...this.configObject};
  }
}
