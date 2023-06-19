export class TodoList {
  id: number;
  description: string;

  // @ts-ignore
  constructor() 
  constructor(id: number, description: string) {
    this.id = id;
    this.description = description;
  }
}
