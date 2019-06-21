import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

import { MaterialModule } from '../../material.module';
import { CoreModule } from '../core/core.module';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { HeroeDetailComponent } from './heroe-detail/heroe-detail.component';

@NgModule({
  declarations: [HomeComponent, CardComponent, HeroeDetailComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    CoreModule,
    FormsModule
  ],
  providers: [ MaterialModule ],
})
export class HomeModule { }
