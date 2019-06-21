import { Component, OnInit } from '@angular/core';
import { HeroeService } from 'src/app/services/heroe/heroe.service';
import { Heroe } from 'src/app/models/heroe';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html',
  styleUrls: ['./heroe-detail.component.css']
})
export class HeroeDetailComponent implements OnInit {

  heroe: Heroe;

  constructor( private heroeService: HeroeService, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe( params  => {
        this.getHeroe( params['id'] );
      });
  }

  getHeroe( id: number ) {
    this.heroeService.getHeroe(id)
      .subscribe( heroe => {
        this.heroe = heroe;
      });
  }

}
