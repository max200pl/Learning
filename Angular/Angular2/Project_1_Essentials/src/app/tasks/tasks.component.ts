import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './new-task/new-task.mode';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;

  tasks = dummyTasks;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTasks(id: string) {
    console.log('Task Completed:', id);

    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask() {
    console.log('Add Task Clicked');
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    console.log('Cancel Add Task Clicked');
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    console.log(
      'Task Created:',
      taskData.title,
      taskData.summary,
      taskData.date
    );

    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.isAddingTask = false;
  }
}
