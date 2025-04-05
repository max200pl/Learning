import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from './new-task.mode';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancel() {
    console.log('Cancel Add Task Clicked');
    this.cancel.emit();
  }

  onSubmit() {
    console.log(
      'Task Created:',
      this.enteredTitle,
      this.enteredSummary,
      this.enteredDate
    );
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    });
  }
}
