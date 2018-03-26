import {Component} from '@angular/core';

@Component({
  selector: 'app-exp',
  templateUrl: './var.component.html',
})
export class ExpComponent {
  _ref: any;
  lang: string;
  exp: number;

  constructor() {
  }

  removeObject() {
    this._ref.destroy();
  }

  save() {
    if (this.lang && this.exp)
      alert(`Language: ${this.lang} & Experience: ${this.exp}`);
    else
      alert('Please enter value to save');
  }
}
