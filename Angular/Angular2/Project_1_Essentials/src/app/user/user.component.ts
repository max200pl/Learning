import {
  Component,
  computed,
  signal,
  Signal,
  Input,
  input,
  Output,
  EventEmitter,
  output,
} from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  /* Signals and Computed Properties */
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser().avatar;
  // }
  // onSelectUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }
  /* NEW APPROACH */
  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output<string>();
  // imagePath = computed(() => 'assets/users/' + this.avatar);
  // onSelectUser() {
  //   this.select.emit(this.id());
  // }
  // /* OLD APPROACH 1*/
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // @Output() select = new EventEmitter<string>();
  // get imagePath() {
  //   return 'assets/users/' + this.avatar;
  // }
  // onSelectUser() {
  //   this.select.emit(this.id);
  // }

  /* OLD APPROACH 2*/
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
