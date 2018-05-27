import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) { }
  getHeros(): Observable<Hero[]> {
    // TODO: send a message _after_ fetching the heroes
    this.messageService.add('HeroServices: fetched heroes');
    return of(HEROES);
  }
}
