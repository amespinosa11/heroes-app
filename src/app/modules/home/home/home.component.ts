import { Component, OnInit } from '@angular/core';
import { HeroeService } from 'src/app/services/heroe/heroe.service';
import { Heroe } from 'src/app/models/heroe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private heroeService: HeroeService ) { }

  heroes: Heroe[];

  heroeName = '';

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroeService.getHeroes()
    .subscribe( heroes => {
      this.heroes = heroes;
    });
  }

}
