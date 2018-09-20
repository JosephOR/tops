import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
@Component({
	selector: 'page-details',
	templateUrl: 'details.html'
})
export class DetailsPage {

  	constructor(public navCtrl: NavController) {

  	}
  	
  	proceed() {
  		this.navCtrl.push(SettingsPage);
  	}
}