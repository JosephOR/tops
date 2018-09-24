import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {
	gameSettings:any;
	currentScore:any;
	currentScoreUI:string;
  	constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this.gameSettings = navParams.get('data');
  		this.currentScore = 501;
  		this.currentScoreUI = '';
  		console.log(this.currentScoreUI);

  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad GamePage', this.gameSettings);
  	}

  	enterNumber(number) {
  		this.currentScoreUI += number;
  		console.log(this.currentScoreUI);
  	}
  	enterScore() {
  		console.log('enteredScore : ', this.currentScoreUI);
  		this.currentScoreUI = '';
  	}
}
