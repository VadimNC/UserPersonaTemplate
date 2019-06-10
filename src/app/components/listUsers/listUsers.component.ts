import {Component} from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './listUsers.component.html',
  styleUrls: ['./listUsers.component.less']
})
export class ListUsersComponent {
  public currentPage = 0;

  public changePage(delta: number): void {
    this.currentPage += delta;
  }
}
