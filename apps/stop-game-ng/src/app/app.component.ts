import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUIColor } from './models/ui.model';
import { UiThemeService } from './services/ui-theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = 'Hello'; //this.http.get<Message>('/api/hello');
  theme: BehaviorSubject<IUIColor>;

  title = 'stop-game-ng';

  constructor(private http: HttpClient, private uITheme: UiThemeService) {
    this.theme = uITheme.currentTheme;
  }
}
