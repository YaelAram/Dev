export interface ToDo {
  id: string;
  desc: string;
  completed: boolean;
};

export interface ToDoState {
  toDoCount: number;
  toDos: ToDo[];
  completed: number;
  pending: number;
};
