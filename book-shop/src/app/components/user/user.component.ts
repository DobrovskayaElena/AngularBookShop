import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { fromRoot } from '../../store/index';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [],
})
export class UserComponent implements OnInit {
  user$: Observable< { userList: User[] } >;

  constructor(
    private httpService: HttpClientService,
    private store: Store
  ) {}

  ngOnInit() {
    this.user$ = this.store.select(fromRoot.getStateSelectedData);
    this.getApiData();
  }

  getApiData() {
    this.store.dispatch(fromRoot.GetUserData());
  }

  getError() {
    this.store.dispatch(fromRoot.UserDataWithError());
  }
}
