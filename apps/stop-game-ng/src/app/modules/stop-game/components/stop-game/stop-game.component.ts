import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  getEmptyMove,
  IMove,
  IMovement,
  IPlayer,
  IStopGame,
} from '@stop-game/data';
import { StopGameService } from '@stop-game-ng-services/stop-game.service';
import { BehaviorSubject } from 'rxjs';
import { StopGameSocketService } from '../../services/stop-game-socket.service';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { startByValidator, isNotWordInGame } from '../../util/word-validators';

@Component({
  selector: 'stop-game-stop-game',
  templateUrl: './stop-game.component.html',
  styleUrls: ['./stop-game.component.scss'],
})
export class StopGameComponent implements OnInit {
  currentRound = 'A';
  formNickName = this.fb.group({ nickName: [, Validators.required] });

  game = new BehaviorSubject<IStopGame>(null);
  gameId = new BehaviorSubject<string>(null);
  nickName = new BehaviorSubject<string>(null);

  formPlaying = new FormGroup({
    animal: new FormControl('', [startByValidator(this.currentRound)]),
    cityCountry: new FormControl('', [startByValidator(this.currentRound)]),
    food: new FormControl('', [startByValidator(this.currentRound)]),
    lastName: new FormControl('', [startByValidator(this.currentRound)]),
    name: new FormControl('', [startByValidator(this.currentRound)]),
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private stopGameService: StopGameService,
    private stopGameSocketService: StopGameSocketService
  ) {
    this.activatedRoute.params.subscribe(this.onActivatedRoute.bind(this));
  }

  ngOnInit(): void {}

  private onActivatedRoute(params): void {
    const gameId = params.id;
    this.gameId.next(gameId);
    if (this.nickName.value) {
      this.loadGame(gameId);
    }
  }

  private loadGame(gameId: string): void {
    if (gameId) {
      this.stopGameService
        .loadGame(gameId)
        .subscribe((game) => this.onGameLoaded(game));
    }
  }

  private onGameLoaded(game: IStopGame): void {
    this.game.next(game);
    this.joinGame(game);
  }

  private joinGame(game: IStopGame): void {
    const { id } = game;
    this.stopGameSocketService.connectGame(id);
    this.stopGameSocketService.moveReporter.subscribe(
      this.handleMovement.bind(this)
    );
    this.stopGameSocketService.playerReporter.subscribe(
      this.handleNewPlayer.bind(this)
    );
  }

  // Nickname input
  private findPlayer(nickname: string): void {
    const gameId = this.gameId.value;
    this.stopGameService
      .findPlayer(gameId, nickname)
      .subscribe(this.onPlayerLoaded.bind(this));
  }

  private onPlayerLoaded(player: IPlayer) {
    const { gameId } = this;
    const { nickName } = player;
    this.nickName.next(nickName);
    this.loadGame(gameId.value);
  }

  public onSubmitNickname(): void {
    const { formNickName } = this;
    const nickName = formNickName.get('nickName').value;
    console.log('onSubmitNickname', nickName);
    this.findPlayer(nickName);
  }
  // Nickname input end

  public sendMovement(currentPlayer: IPlayer) {
    const { nickName, currentRound: round } = this;
    const { moves } = currentPlayer;
    const move = moves.get(round);
    const myMove: IMovement = { nickName: nickName.value, round, move };
    this.stopGameSocketService.sendMyMove(myMove);
  }

  public getCurrentPlayer(
    nickName: string,
    game: BehaviorSubject<IStopGame>
  ): IPlayer {
    const currentGame: IStopGame = game.value;
    const { players } = currentGame;
    const currentPlayer: IPlayer = players.find(
      (player) => player.nickName === nickName
    );
    return currentPlayer;
  }

  public handleMovement(movement: IMovement): void {
    if (movement) {
      const { game } = this;
      const currentPlayer = this.getCurrentPlayer(movement.nickName, game);
      console.log(currentPlayer);
      if (!currentPlayer.moves) {
        currentPlayer.moves = new Map<string, IMove>();
      }
      currentPlayer.moves.set(movement.round, movement.move);
      this.game.next(game.value);
    }
  }

  private handleNewPlayer(player: IPlayer): void {
    if (player) {
      const currentGame = this.game.value;
      const { players } = currentGame;
      const foundedPlayer = players.find((p) => p.nickName === player.nickName);
      if (!foundedPlayer) {
        players.push(player);
      }
    }
  }

  public addWord(element: string): void {
    const { game, nickName, currentRound } = this;
    const currentPlayer = this.getCurrentPlayer(nickName.value, game);
    if (!currentPlayer.moves) {
      currentPlayer.moves = new Map<string, IMove>();
      const emptyMove: IMove = getEmptyMove();
      currentPlayer.moves.set(currentRound, emptyMove);
    }
    const currentMoves: IMove = currentPlayer.moves.get(currentRound);
    const inputElement: AbstractControl = this.formPlaying.get(element);
    const wordToAdd = inputElement.value;
    if (
      inputElement.valid &&
      isNotWordInGame(game, wordToAdd, element, currentRound)
    ) {
      inputElement.reset();
      if (this.isValidWord(wordToAdd)) {
        const categoryMoves = [...currentMoves[element], { word: wordToAdd }];
        currentMoves[element] = categoryMoves;
        this.sendMovement(currentPlayer);
      }
    }
  }

  private isValidWord(word: string): boolean {
    return !!word && !!word.trim();
  }
}
