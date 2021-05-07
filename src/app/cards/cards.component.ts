import { Component, OnInit } from '@angular/core';
import { SearchFilterPipe } from '../search-filter.pipe';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  providers: [SearchFilterPipe]
})
export class CardsComponent implements OnInit {
  public userData;
  public per_page;
  public totalPages;
  public pageNo: number = 1;
  public userSerachTerm: string = '';

  constructor(
    public userService: UserService,
    public searchFilter: SearchFilterPipe
  ) {}

  ngOnInit() {
    this.getUserData(1);
  }
  getUserData(page) {
    this.userService.getUsersData(page).subscribe((data: any) => {
      this.userData = data.data;
      this.pageNo = data.page;
      this.totalPages = data.total_pages;
    });
  }
  previousButtonClicked($event) {
    if (this.pageNo === 1) {
      return;
    } else {
      this.getUserData(--this.pageNo);
    }
  }
  nextButtonClicked($event) {
    if (this.pageNo === this.totalPages) {
      return;
    } else {
      this.getUserData(++this.pageNo);
    }
  }
}
