import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chores-list',
  templateUrl: './chores-list.component.html',
  styleUrls: ['./chores-list.component.scss']
})
export class ChoresListComponent implements OnInit {
yesterday_chores:string[]=["empty Dishwasher"]

todays_chores:string[]=[]

tommorrows_chores:string[]=["empty Dishwasher","complete lunch code prep","buy groceries","empty Dishwasher","complete lunch code prep"]
  constructor() { }

  ngOnInit(): void {
  }

  checkForHarder():boolean{
    if(this.todays_chores.length < this.tommorrows_chores.length && this.todays_chores.length < this.yesterday_chores.length){
      return true;
    }
    return false;
  }
  checkForDone():boolean{
    if(this.todays_chores.length == 0 && this.tommorrows_chores.length > 4 ){
      return true;
    }
    return false;
  }

}
