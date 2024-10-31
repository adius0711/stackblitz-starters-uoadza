import {
  Component,
  computed,
  signal,
  Input,
  input,
  Output,
  EventEmitter,
  output,
} from "@angular/core";
// import { DUMMY_USERS } from '../../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

type User = {
  id: string;
  avatar: string;
  name: string;
};

@Component({
  selector: "app-user",
  standalone: true,
  imports: [],
  templateUrl: "./user.component.html",
  styleUrl: "./user.component.css",
})
export class UserComponent {
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  @Input({ required: true }) user!: User;

  // avatar = input.required<string>();
  // name = input.required<string>();

  // @Output() select = new EventEmitter<string>();

  select = output<string>();

  get imagePath() {
    return "assets/" + this.user.avatar;
  }
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/' + this.avatar())

  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser().avatar
  // }

  onSelectUser() {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    // this.selectedUser = DUMMY_USERS[randomIndex]
    this.select.emit(this.user.id);
  }
}
