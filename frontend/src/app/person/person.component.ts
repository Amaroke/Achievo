import { Component, OnInit } from '@angular/core';
import { Characters } from '../_static/characters';

@Component({
  selector: 'nwt-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  readonly characters: any;

  constructor() {
    this.characters = Characters;
  }

  get person(): any {
    return this.characters;
  }

  ngOnInit(): void {
  }
}
