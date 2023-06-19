import { Component, OnInit } from '@angular/core';
import { TodoList } from 'src/app/model/todolist.model';
import { TodoListService } from 'src/app/services/todolist.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodoListComponent implements OnInit {
  todoLists: TodoList[] = [];
  searchWords!: string;
  newDescription!: string;
  todoList: TodoList = new TodoList();
  sortDirection: 'asc' | 'desc' = 'asc';
  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
    this.loadTodoLists();
  }

  loadTodoLists(): void {
    this.todoListService.getAllTodoLists().subscribe(
      todoLists => {
        this.todoLists = todoLists;
      },
      error => {
        console.log('An error occurred while retrieving todo lists:', error);
      }
    );
  }
  sortBy(key: string) {
    this.todoLists = this.todoLists.slice().sort((a, b) => {
      const idA = Number(a.id);
      const idB = Number(b.id);

      let comparison = 0;
      if (idA < idB) {
        comparison = -1;
      } else if (idA > idB) {
        comparison = 1;
      }
      return this.sortDirection === 'asc' ? comparison : -comparison;
    });
  }

  toggleSortDirection() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.sortBy('id');
  }

  createTodoList(todoList: TodoList): void {
    this.todoListService.createTodoList(todoList).subscribe(
      (createdTodoList) => {
          this.todoLists.push(createdTodoList)
      },
      (error) => {
        console.log('An error occurred while creating a todo list:', error);

      }
    );
  }

  updateTodoList(todoList: TodoList): void {
    this.todoListService.updateTodoList(todoList.id, todoList).subscribe(
      updatedTodoList => {
        const index = this.todoLists.findIndex(t => t.id === updatedTodoList.id);
        if (index !== -1) {
          this.todoLists[index] = updatedTodoList;
        }
      },
      error => {
        console.log('An error occurred while updating a todo list:', error);
      }
    );
  }

  deleteTodoList(id: number): void {
    this.todoListService.deleteTodoList(id).subscribe(
      () => {
        this.todoLists = this.todoLists.filter(t => t.id !== id);
      },
      error => {
        console.log('An error occurred while deleting a todo list:', error);
      }
    );
  }
  searchTodoLists(): void {
    if (!this.searchWords) {
      this.loadTodoLists();
      return;
    }
    this.todoListService.searchTodoLists(this.searchWords).subscribe(
      searchedLists => {
        this.todoLists = searchedLists;
      },
      error => {
        console.log('An error occurred while searching todo lists:', error);
      }
    );
  }
}
