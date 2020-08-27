import {Injectable} from '@angular/core';
import {TStorageData} from '@shared/models/storage.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storage: Storage = localStorage;

  constructor() { }

  setItem<T>(key: string, value: T) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  addNestedItem<T>(storageKey: string, propertyKey: string, value: T) {
    let storageItem = this.getItem<T>(storageKey);
    if (storageItem) {
      if (typeof storageItem === 'string') {
        throw new Error(`Property is string, can't update ${propertyKey} value`);
      } else {
        storageItem[propertyKey] = value;
      }
    } else {
      (storageItem as any) = {[propertyKey]: value};
    }
    this.setItem<T>(storageKey, storageItem);
  }

  getItem<T>(key: string): T {
    return JSON.parse(this.storage.getItem(key));
  }

  removeItem(key: string) {
    this.storage.removeItem(key);
  }

}
