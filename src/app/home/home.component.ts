import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  itemCount :number;
  btnText: string = 'Add an item';
  goalText: string = "My first life priority";
  goals = [];

  constructor() { }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }
  addItem() {
    if (this.goalText !== '') {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
    }
    else{
      alert("Please fill the input field")
    }
  }

}
