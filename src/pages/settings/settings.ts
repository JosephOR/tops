import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-settings',
	templateUrl: 'settings.html'
})
export class SettingsPage {
sets:any[] = [];
  	constructor(public navCtrl: NavController) {
  		this.sets = ['one', 'two', 'three']
  	}
  	isActive(item) {
  		console.log(item);
  		return 'page-settings__active-set'
  	}
}