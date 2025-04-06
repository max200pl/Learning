import { Injectable } from '@angular/core';
import { dummyTasks } from '../dummy-tasks';
import { NewTaskData } from './new-task/new-task.mode';
import { Task } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks: Task[] = dummyTasks;

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
  }

  removeTask(id: string) {
    console.log('Task Completed:', id);

    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
