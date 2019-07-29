import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  @Input() score: number;
  @Input() alert;
  @Input() percentage;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {

    this.router.queryParams.subscribe(params => {console.log(params);

      this.score = params.score,
      this.alert = params.alert,
      this.percentage = params.percentage,
      console.log(this.score, this.alert, this.percentage)
      });
     
  // if(this.percentage >= 50){
  //   console.log('Passed');
  //   this.passed = "Passed";
  // }else if(this.percentage <= 40){
  //   console.log('Failed');
  //   this.passed = "Failed";
  }
  
  }
