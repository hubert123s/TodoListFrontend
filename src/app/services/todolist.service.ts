import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoList } from 'src/app/model/todolist.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  private apiUrl = 'http://localhost:8080/api/todo';

  constructor(private http: HttpClient) { }

  getAllTodoLists(): Observable<TodoList[]> {
    return this.http.get<TodoList[]>(this.apiUrl);
  }

  getTodoListById(id: number): Observable<TodoList> {
    return this.http.get<TodoList>(`${this.apiUrl}/${id}`);
  }

  createTodoList(todoList: TodoList): Observable<TodoList> {
    return this.http.post<TodoList>(this.apiUrl, todoList);
  }

  updateTodoList(id: number, updatedTodoList: TodoList): Observable<TodoList> {
    return this.http.put<TodoList>(`${this.apiUrl}/${id}`, updatedTodoList);
  }

  deleteTodoList(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  searchTodoLists(words: string): Observable<TodoList[]> {
    const params = new HttpParams().set('words', words);
    return this.http.get<TodoList[]>(`${this.apiUrl}/search`, { params });
  }
}
