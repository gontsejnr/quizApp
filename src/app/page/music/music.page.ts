import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
})
export class MusicPage implements OnInit {
  @ViewChild('slides') slides: any;

  //array for questions and answers 
  musicQuestions : any [] = ['What is not a wind instrument?','What was the last Aphex Twin album released before his decade-long hiatus?','What is the best selling album of all time from 1976 to 2018?',
  'Who was the original drummer for The Beatles?','Who is the primary lyricist for Canadian progressive rock band Rush?','Which of these is NOT a song on The Beatles 1968 self titled album, also known as the White album?',
  'The song "Feel Good Inc." by British band Gorillaz features which hip hop group?','Who was featured in the song "Words" by Feint?','What was the name of Pink Floyds first studio album?',
  'Bjoumlrks "Unison" contains a sample of which Oval song?']
  musicAnswers : any [] = ['Viola','Drukqs','Thriller','Tommy Moore','Neil Peart','Being For The Benefit Of Mr. Kite!','De La Soul','Laura Brehm','The Piper at the Gates of Dawn','Aero Deck']

  //score results to be calculated
  score : number = 0;

  radioBtn0;
  radioBtn1;
  radioBtn2;
  radioBtn3;
  radioBtn4;
  radioBtn5;
  radioBtn6;
  radioBtn7;
  radioBtn8;
  radioBtn9;

  constructor(private router: Router) { }

  ngOnInit() {
  }
 changeSlide(){
    this.slides.slideNext();
    
}

toResults(){

  this.router.navigateByUrl('tabs/results');
  // this.score = 0;
  // this.router.navigateByUrl('tabs/results');
}
checkScore(){
  if (this.musicAnswers[0] == this.radioBtn0){
    this.score = this.score +=1;
  }
  if (this.musicAnswers[1] == this.radioBtn1){
    this.score = this.score +=1;
  }
  if (this.musicAnswers[2] == this.radioBtn2){
    this.score = this.score +=1;
  }
  if (this.musicAnswers[3] == this.radioBtn3){
    this.score = this.score +=1;
  }
  if (this.musicAnswers[4] == this.radioBtn4){
    this.score = this.score +=1;
  }
  if (this.musicAnswers[5] == this.radioBtn5){
    this.score = this.score +=1;
  }
  if (this.musicAnswers[6] == this.radioBtn6){
    this.score = this.score +=1;
  }
  if (this.musicAnswers[7] == this.radioBtn7){
    this.score = this.score +=1;
  }
  if (this.musicAnswers[8] == this.radioBtn8){
    this.score = this.score +=1;
  }
  if (this.musicAnswers[9] == this.radioBtn9){
    this.score = this.score +=1;
  }
  return this.score;
}

}
