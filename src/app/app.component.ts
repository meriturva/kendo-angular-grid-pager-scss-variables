import { Component } from '@angular/core';
import { PageChangeEvent } from '@progress/kendo-angular-pager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testKendoPagerScss';

  public pageSize = 8;
  public skip = 0;
  public total = 123;
  public contentId = "content-1";

  public onPageChange(e: PageChangeEvent): void {
    this.skip = e.skip;
    this.pageSize = e.take;
    console.log("change");
  }

}
