import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './new-task/new-task.mode';
import { TaskService } from './tasks.service';

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

  constructor(private taskServices: TaskService) {}

  get selectedUserTasks() {
    return this.taskServices.getUserTasks(this.userId);
  }

  onCompleteTasks(id: string) {}

  onStartAddTask() {
    console.log('Add Task Clicked');
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    console.log('Cancel Add Task Clicked');
    this.isAddingTask = false;
  }
}
