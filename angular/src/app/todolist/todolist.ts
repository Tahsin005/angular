import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  imports: [FormsModule],
  templateUrl: './todolist.html',
  styleUrl: './todolist.css',
})
export class Todolist {
  task = "";
  taskList:{id:number, task:string}[] = [];

  addTask() {
    this.taskList.push({id: this.taskList.length + 1, task: this.task});
    this.task = "";
  }

  deleteTask(id:number) {
    this.taskList = this.taskList.filter((item) => item.id !== id);
  }
}
