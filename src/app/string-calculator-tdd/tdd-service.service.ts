"use strict";
import { Injectable } from '@angular/core';
import { NumberInput } from "./numberInput.model";

@Injectable({
  providedIn: 'root'
})
export class TddServiceService {

  add(numbers: number|any): number {
    let components = this.getComponents(numbers);
    let delimiter = components.delimiter;
    numbers = components.numbers;

    let values = numbers.split(delimiter);
    let sum = 0;
    let invalidValues = [];
    for (let value of values) {
        let numberValue = parseInt(value);
        if (numberValue < 0) {
            invalidValues.push(numberValue);
        } else {
            sum += numberValue > 1000 ? 0 : numberValue;
        }
    }

    if (invalidValues.length) {
        throw new Error('No negative values are allowed: ' + invalidValues.join(', '));
    }

    return sum || 0;
}


getComponents(input: number|any): NumberInput {
  let num=input;
  let delimiter = /,|\n/;
  let numbers = num;
  console.log(numbers)
  console.log(num);
  if (num.startsWith('//')) {
      delimiter = new RegExp(this.escapeRegExp(num.split('\n').shift().substr(2)));
      numbers = num.replace(/^\/\/.+\n/, '');
  }

  return new NumberInput(delimiter, numbers);
}


escapeRegExp(regExpString: string) {

    regExpString = regExpString.replace(/[\-\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
    return regExpString.replace('][', '|').replace(/\[|\]/g, '');
}
}



