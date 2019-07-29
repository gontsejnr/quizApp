import { Component, OnInit } from '@angular/core';
import { ViewChild  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  @ViewChild('slides') slides: any;

  //array for questions and answers 
  historyQuestions : any [] = ['Pianist Fredric Chopin was a composer of which musical era?', 'Which infamous European traitor was known as the last person to enter Parliament with honest intentions?',
                    'On which day did the attempted coup of 1991 in the Soviet Union begin?', 'When did Canada leave the confederation to become their own nation?', 'What year were the Marian Reforms instituted in the Roman Republic?'
                    ,'When was Google founded?', 'What was the unofficial name for Germany between 1919 and 1933?', 'In which year was Constantinople conquered by the Turks?', 
                    'To what political party did Abraham Lincoln belong when elected POTUS?', 'In 1961, an American B-52 aircraft crashed and nearly detonated two 4mt nuclear bombs over which US city?']
  historyAnswers : any [] = ['Romantic', 'Guy Fawkes', 'August 19', 'July 1st, 1867', '107 BCE', 'September 4, 1998', 'Weimar Republic', '1453', 'Republican', 'Goldsboro']

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

restart() {
  this.score = 0;
  this.slides.lockSwipes(false);
  this.slides.slideTo(0, 1000);
  this.slides.lockSwipes(false);
}

reset() {
  this.score = 0;
  this.router.navigateByUrl('home');
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
