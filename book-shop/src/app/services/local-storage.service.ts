import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(private localStorage: Storage) {}

  setItem(key: string, value: string | { [key: string]: any }) {
    if (typeof value === 'string') {
    this.localStorage.setItem(key, value);
    } else {
      this.localStorage.setItem(key, JSON.stringify(value));
    }
  }

  getItem(key: string) {
    const storedValue = this.localStorage.getItem(key);
    try {
      let dataStored = JSON.parse(storedValue);
      return dataStored;
    } catch (e) {
      return storedValue;
    }
  }

  removeItem(key: string) {
    this.localStorage.removeItem(key);
  }
}
