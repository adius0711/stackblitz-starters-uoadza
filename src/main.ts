import { Component } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { HeaderComponent } from "./app/header/header.component";
import { UserComponent } from "./app/user/user.component";
import { TasksComponent } from "./app/tasks/tasks.component";
import { DUMMY_USERS } from "./dummy-users";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: "./app.component.html",
})
export class App {
  name = "Angular";
  users = DUMMY_USERS;
  selectedUserId = "u1";

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}

bootstrapApplication(App);
