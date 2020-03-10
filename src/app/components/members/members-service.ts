import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { GATE_API } from '../../app-api';
import {ErrorHandler} from '../../app-error-handler';
import { User } from 'src/app/model/user-model';

import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable ()
export class MembersService {

  constructor(private http: HttpClient){}


users(): Observable<User> {
  return this.http.get(`${GATE_API}/users`)
  .pipe(catchError(ErrorHandler.handleError));
}


}

