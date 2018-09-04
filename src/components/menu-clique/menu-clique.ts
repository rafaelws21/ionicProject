import { Component } from '@angular/core';

/**
 * Generated class for the MenuCliqueComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'menu-clique',
  templateUrl: 'menu-clique.html'
})
export class MenuCliqueComponent {

  text: string;

  constructor() {
    console.log('Hello MenuCliqueComponent Component');
    this.text = 'Hello World';
  }

}
