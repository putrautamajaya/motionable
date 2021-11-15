import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  setLocalStorage(value: Object) {
    localStorage.setItem('motionable', JSON.stringify(value))
  }

  getLocalStorage() {
    return JSON.parse(localStorage.getItem('motionable'))
  }
}
