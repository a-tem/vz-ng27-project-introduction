import { InjectionToken } from '@angular/core';
export const SettingsAPI = new InjectionToken<string>('settingsAPI', {
  providedIn: 'any',
  factory: () => 'http://localhost:3000/settings'
});
