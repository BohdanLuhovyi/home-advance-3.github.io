import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson3',
  templateUrl: './lesson3.component.html',
  styleUrls: ['./lesson3.component.scss']
})
export class Lesson3Component implements OnInit {
  public taskInput!: string;
  public pTaskArr: any[] = [];

  addTask(): void{
    let newTask = {
      newTask: this.taskInput, 
      doneCheck: false, 
    }
    this.pTaskArr.push(newTask);
    this.taskInput = ''
  }

  // getEdit(data: string): void{
  //   this.saveInput = data
  // }


  constructor() { }

  ngOnInit(): void {
  }

}
