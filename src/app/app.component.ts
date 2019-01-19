import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title:string = 'testApp';
  name:string = 'hello';
  sayHello():any {
    this.name = 'world';
  }
}
