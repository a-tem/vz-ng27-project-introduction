import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LocalStorageService} from '@core/services/local-storage.service';
import {APP_SETTINGS} from '@shared/const/storage.const';
import SettingsJson from '@assets/app-settings.json';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  private privateSettings;

  set settings(val) {
    this.privateSettings = val;
  }

  get settings() {
    return this.privateSettings;
  }

  constructor(private http: HttpClient,
              private localStorageService: LocalStorageService) {
    this.loadSettings();
  }

  loadSettings() {
    const settings = this.localStorageService.getItem<{[key: string]: string}>(APP_SETTINGS);
    if (!settings) {
      this.settings = SettingsJson;
      this.localStorageService.setItem(APP_SETTINGS, this.settings);
    } else {
      this.settings = settings;
    }
  }
}
