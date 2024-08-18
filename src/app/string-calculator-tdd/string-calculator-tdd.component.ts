
import { Component, OnInit } from '@angular/core';
import { TddServiceService } from './tdd-service.service';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-string-calculator-tdd',
  templateUrl: './string-calculator-tdd.component.html',
  styleUrls: ['./string-calculator-tdd.component.css'],
  providers: [TddServiceService],
})
export class StringCalculatorTddComponent implements OnInit {
  // numbers: string;
  // result: number;

  
  numbers: string='';
  result: any;

  constructor(private TddServiceService: TddServiceService) {
  }
  ngOnInit() {
    
  }

  add(numbers: any) {
      console.log(this.TddServiceService.add(numbers))
    return this.TddServiceService.add(numbers);
  }

  submit() {
    this.result = this.add(this.numbers);
  }
  reset(){
    this.result = this.add(this.numbers);
  }
}
