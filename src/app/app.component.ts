import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <h1>Local Storage</h1> `,
})
export class AppComponent {
  title = 'local-storage';
  constructor() {
    localStorage.setItem('token', 'tokendegeri'); //set
    localStorage.getItem('token'); //get
    localStorage.removeItem('token'); //clear
    localStorage.clear(); //clear all
  }
}
