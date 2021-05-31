import { Injectable, Optional } from '@angular/core';

import { ConfigOptions } from '../models/config-options.model';
@Injectable({ providedIn: 'root' })
export class ConfigOptionsService {
  configs = new ConfigOptions(1, 'John', 'John@mail.ru');

  constructor() {}

  getSettings() {
    return this.configs;
  }

  setSettings1(update) {
    Object.assign(this.configs, update);
  }
}
