import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GamePage } from '../game/game';

@Component({
	selector: 'page-settings',
	templateUrl: 'settings.html'
})
export class SettingsPage {
	games:any[] = [];
	sets:any[] = [];
	legs:any[] = [];
	selectedGame:any;
	selectedSet:any;
	selectedLeg:any;
  	constructor(public navCtrl: NavController) {
  		this.games = [ { name: '301' }, { name: '501' }];
  		this.selectedGame = this.games[0];
  		this.sets = [ { name: '1' }, { name: '2' }, { name: '3' }];
  		this.selectedSet = this.sets[0];
  		this.legs = [ { name: '1' }, { name: '2' }, { name: '3' }];
  		this.selectedLeg = this.legs[0];
  	}
  	isActiveSet(set) {
  		return set.name === this.selectedSet.name ? 'page-settings__active-option' : 'page-settings__not-active-option';
  	}
  	setActiveSet(set) {
  		this.selectedSet = set;
  	}
  	isActiveLeg(leg) {
  		return leg.name === this.selectedLeg.name ? 'page-settings__active-option' : 'page-settings__not-active-option';
  	}
  	setActiveLeg(leg) {
  		this.selectedLeg = leg;
  	}
  	isActiveGame(game) {
  		return game.name === this.selectedGame.name ? 'page-settings__active-option' : 'page-settings__not-active-option';
  	}
  	setActiveGame(game) {
  		this.selectedGame = game;
  	}
    proceed() {
      let gameDetails = {
        gameType: this.selectedGame,
        sets: this.selectedSet,
        legs: this.selectedLeg
      }
      this.navCtrl.push(GamePage, {
        data: gameDetails
      });
    }
}