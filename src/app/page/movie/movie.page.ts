import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {
  @ViewChild('slides') slides: any;

  //array for questions and answers 
  movieQuestions : any [] = ['Who voiced the character Draco in the 1996 movie DragonHeart?', 'Which of the following James Bond villains is not affiliated with the SPECTRE organization?', 
  'What is the name of the assassin in the first &quot;Hellboy&quot; movie?', 'Which movie includes a giant bunny-like spirit who has magic powers including growing trees?', 
  'Which actor plays Obi-Wan Kenobi in Star Wars Episodes I-lll?', 'Darth Vaders famous reveal to Luke is iconic. But which of these is the right one?', 'When does Rogue One: A Star Wars Story take place chronologically in the series?',
  'In which movie does Robin Williams character have to disguise themselves into a woman?', 'What was Bruce Campbells iconic one-liner after getting a chainsaw hand in Evil Dead 2?',
  'Which of the following films was directed by Ivan Reitman, written by Gary Ross, featured Kevin Kline, and was released in 1993?']
  movieAnswers : any [] = ['Sean Connery', 'Auric Goldfinger', 'Karl Ruprecht Kroenen', 'My Neighbor Totoro', 'Ewan McGregor', 'No. I am your father', 'Between Episode 3 and 4', 'Mrs. Doubtfire', 'Groovy', 'Dave']

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
  if (this.movieAnswers[0] == this.radioBtn0){
    this.score = this.score +=1;
  }
  if (this.movieAnswers[1] == this.radioBtn1){
    this.score = this.score +=1;
  }
  if (this.movieAnswers[2] == this.radioBtn2){
    this.score = this.score +=1;
  }
  if (this.movieAnswers[3] == this.radioBtn3){
    this.score = this.score +=1;
  }
  if (this.movieAnswers[4] == this.radioBtn4){
    this.score = this.score +=1;
  }
  if (this.movieAnswers[5] == this.radioBtn5){
    this.score = this.score +=1;
  }
  if (this.movieAnswers[6] == this.radioBtn6){
    this.score = this.score +=1;
  }
  if (this.movieAnswers[7] == this.radioBtn7){
    this.score = this.score +=1;
  }
  if (this.movieAnswers[8] == this.radioBtn8){
    this.score = this.score +=1;
  }
  if (this.movieAnswers[9] == this.radioBtn9){
    this.score = this.score +=1;
  }
  return this.score;
}

}