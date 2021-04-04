import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UiThemeService } from '@stop-game-ng-services/ui-theme.service';
import { IWelcomeItem } from '../../models/welcome.model';
import { IUIColor } from '../../../../models/ui.model';

const items = [
  { text: 'New game', path: 'new-game', icon: 'fas fa-play-circle' },
  { text: 'Join game', path: 'join-game', icon: 'fas fa-hand-point-up ' },
  { text: 'Hall of fame', path: 'hall-of-fame', icon: 'fas fa-star-half-alt' },
];
@Component({
  selector: 'stop-game-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  items = new BehaviorSubject<IWelcomeItem[]>(items);

  theme: BehaviorSubject<IUIColor> = this.uITheme.currentTheme;

  constructor(private router: Router, private uITheme: UiThemeService) {}

  ngOnInit(): void {}

  openMenu(path: string) {
    this.router.navigate([path]);
  }
}
