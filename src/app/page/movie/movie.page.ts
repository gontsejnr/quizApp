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
  alert;
  percentage;

  hasAnswered: boolean = false; 
  
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
  nextSlide(){
    this.slides.slideNext();
}

rightAnswer(){
  console.log(this.score += 1)
  if(this.hasAnswered = true){
    this.nextSlide();
  }
}
wrongAnswer(){
  console.log(this.score = this.score)
  if(this.hasAnswered ==true){
    this.nextSlide();
  }
}
wrongAnswer1(){
  console.log(this.score = this.score)
  if(this.hasAnswered ==true){
    this.nextSlide();
  }
}
wrongAnswer2(){
  console.log(this.score = this.score)
  if(this.hasAnswered ==true){
    this.nextSlide();
  }
}


toResults() {
  this.percentage = (this.score/10)*100;

  this.router.navigate(['tabs/results'], { queryParams:{score: this.score, alert: this.alert, percentage: this.percentage}});

  if(this.score >= 5){
    alert("passed: " + " " + (this.score/10*100) +"%"  );
  }
  else{
    alert("failed: "  + " " + (this.score/10*100) +"%" + " try again!")
  }
}
}