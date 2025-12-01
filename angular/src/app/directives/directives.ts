import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  show = false;

  toggleShow() {
    this.show = !this.show;
  }

  color = "redd";

  students = ['tahsin', 'rean', 'mahin', 'niloy', 'aziz']
  studentsData = [
    {
      name: 'tahsin',
      age: 24,
      email: 'tahsin@gmail.com'
    },
    {
      name: 'rean',
      age: 25,
      email: 'rean@gmail.com'
    },
    {
      name: 'mahin',
      age: 26,
      email: 'mahin@gmail.com'
    },
    {
      name: 'niloy',
      age: 27,
      email: 'niloy@gmail.com'
    },
    {
      name: 'aziz',
      age: 28,
      email: 'aziz@gmail.com'
    }
  ];

  nestedArray = [
    ['tahsin', 'rean', 'mahin', 'niloy', 'aziz'],
    ['tahsin', 'rean', 'mahin', 'niloy', 'aziz'],
    ['tahsin', 'rean', 'mahin', 'niloy', 'aziz'],
    ['tahsin', 'rean', 'mahin', 'niloy', 'aziz'],
    ['tahsin', 'rean', 'mahin', 'niloy', 'aziz'],
  ]
}
