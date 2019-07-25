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

  if (this.historyAnswers[0] == this.radioBtn0){
    this.score = this.score +=1;
  }
  if (this.historyAnswers[1] == this.radioBtn1){
    this.score = this.score +=1;
  }
  if (this.historyAnswers[2] == this.radioBtn2){
    this.score = this.score +=1;
  }
  if (this.historyAnswers[3] == this.radioBtn3){
    this.score = this.score +=1;
  }
  if (this.historyAnswers[4] == this.radioBtn4){
    this.score = this.score +=1;
  }
  if (this.historyAnswers[5] == this.radioBtn5){
    this.score = this.score +=1;
  }
  if (this.historyAnswers[6] == this.radioBtn6){
    this.score = this.score +=1;
  }
  if (this.historyAnswers[7] == this.radioBtn7){
    this.score = this.score +=1;
  }
  if (this.historyAnswers[8] == this.radioBtn8){
    this.score = this.score +=1;
  }
  if (this.historyAnswers[9] == this.radioBtn9){
    this.score = this.score +=1;
  }
  return this.score;
}

}
