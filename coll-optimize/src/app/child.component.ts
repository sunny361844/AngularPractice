import {
  Component,
  OnInit,
  ViewChild,
  ComponentFactoryResolver,
  ViewContainerRef
} from '@angular/core';
import {ExpComponent} from './var.component';

@Component({
  selector: 'my-app',
  template: ` <h4>Add/Remove experience</h4>
  <div #parent></div>
  <div>
    <button type="button"
            (click)="addComponent()"
            class="btn btn-default">Add Experience
    </button>
  </div>`
})
export class ChildComponent implements OnInit {

  @ViewChild('parent', {read: ViewContainerRef}) container: ViewContainerRef;

  constructor(private _cfr: ComponentFactoryResolver) {
  }

  ngOnInit() {

    this.addComponent();
  }

  addComponent() {

    var comp = this._cfr.resolveComponentFactory(ExpComponent);
    var expComponent = this.container.createComponent(comp);
    expComponent.instance._ref = expComponent;
  }
}
