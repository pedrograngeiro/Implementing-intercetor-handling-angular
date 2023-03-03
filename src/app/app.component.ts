import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private _http: HttpClient) {}

  getStarWarsApi() {
    return this._http.get('https://swapi.dev/api/v').subscribe((data) => {
      console.log(data);
    });
  }
}
