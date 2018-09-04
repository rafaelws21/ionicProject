import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MenuCliqueComponent } from './menu-clique/menu-clique';


@NgModule({
	declarations: [MenuCliqueComponent],
	imports: [IonicModule],
	exports: [MenuCliqueComponent],
	schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
