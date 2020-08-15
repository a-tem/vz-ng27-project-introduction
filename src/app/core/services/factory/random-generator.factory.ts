import {InjectionToken} from '@angular/core';
import {GeneratorService} from '@core/services/generator.service';

export const GenerateRandomString = new InjectionToken<string>('GenerateRandomString');

export function GenerateRandomNFactory(n: number) {
  return (data: GeneratorService) => data.generate(n);
}
