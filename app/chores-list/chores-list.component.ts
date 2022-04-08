import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chores-list',
  templateUrl: './chores-list.component.html',
  styleUrls: ['./chores-list.component.css']
})
export class ChoresListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  filterTerm!: string;

  TodaysList = [
  { id: '1', mytask: 'complete workshop' },
  { id: '2', mytask: 'buy the pen' },
  { id: '3', mytask: 'my task 3' }
 
];

// YesterdaysList = [
//   { id: '1', mytask: 'complete workshop' }
 
 
// ];

// TomorrowsList = [
//   { id: '1', mytask: 'complete workshop' }
 
// ];

mypath: string='../../assets/target.png'
}

