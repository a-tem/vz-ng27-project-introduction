import {Injectable} from '@angular/core';

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
    // Тут есть какая-то немного путаница
    // storageItem имеет тип T, так как getItem возвращает тип T
    // затем вы пишите, что value тоже имеет тип T
    // и в итоге storageItem принимает в конце значение объекта, у которого значение ключа будет типа Т и сам объект типа Т
    // Мне кажется, что тут немного нестыковка.
    let storageItem = this.getItem<T>(storageKey);
    if (storageItem) {
      if (typeof storageItem === 'string') {
        throw new Error(`Property is string, can't update ${propertyKey} value`);
      } else {
        storageItem[propertyKey] = value;
      }
    } else {
      storageItem = {[propertyKey]: value} as unknown as T;
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
