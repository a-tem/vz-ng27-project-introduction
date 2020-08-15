import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor() { }

  generate(len: number) {
    const pattern = 'azAZ09';
    const charCodes = pattern
      .split('')
      .map((char, idx) => pattern.charCodeAt(idx))
      .sort((a, b) => a > b ? 1 : -1);

    let res = '';

    if (len && charCodes.length) {
      const min = charCodes[0];
      const max = charCodes[charCodes.length - 1];

      for (let i = 0; i < len; i++) {
        res += String.fromCharCode(Math.floor(Math.random() * (max - min + 1)) + min);
      }
    }
    return res;
  }
}
