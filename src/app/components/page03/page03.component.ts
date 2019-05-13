import {Component} from '@angular/core';

@Component({
  selector: 'app-page03',
  templateUrl: './page03.component.html',
  styleUrls: ['./page03.component.less']
})
export class Page03Component {
  public currentPage = 0;

  public changePage(delta: number): void {
    this.currentPage += delta;
  }
}
