import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
  public appUrl = "https://reqres.in/api/users";
  constructor(private http: HttpClient) {}
  public getUsersData(pageNumber) {
    return this.http.get(`${this.appUrl}?page=${pageNumber}`);
  }
}
