import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from 'src/app/models/heroe';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() heroe: Heroe;

  constructor() { }

  ngOnInit() {
  }

}
