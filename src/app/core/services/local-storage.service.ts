import {Injectable} from '@angular/core';
import {TStorageData} from '@shared/models/storage.model';

@Injectable()
export class LocalStorageService {

  constructor(private storage: Storage) { }

  setItem(key: string, value: TStorageData) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): TStorageData {
    return JSON.parse(this.storage.getItem(key));
  }

  removeItem(key: string) {
    this.storage.removeItem(key);
  }

}
