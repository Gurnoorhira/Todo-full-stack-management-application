import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos : Todo[]
  message : string
  // todos = [
  //    new Todo(1,'submit appications',false, new Date()),
  //    new Todo(2,'go to the gym',false, new Date()),
  //    new Todo(3,'do homework',false, new Date())

  // ]
  constructor(
    private todoService:TodoDataService,
    private router : Router
  ) { }

  ngOnInit() {
    this.refreshTodos();

  }
  refreshTodos(){
    this.todoService.retrieveAllTodos('gurnoorhira').subscribe(
      response =>{
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id){
    console.log(`delete todo ${id}`);
    this.todoService.deleteTodo('gurnoorhira',id).subscribe(
      response =>{
        console.log(response);
        this.message = `Delete of Todo ${id} Successful!`
        this.refreshTodos();

      }
    )
  }

  updateTodo(id){
    console.log(`update todo ${id}`);
    this.router.navigate(['todos',id])
  }

  addTodo(){
    this.router.navigate(['todos',-1])
  }

}
