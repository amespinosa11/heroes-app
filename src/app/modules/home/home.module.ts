import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

import { MaterialModule } from '../../material.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    CoreModule
  ],
  providers: [ MaterialModule ],
})
export class HomeModule { }
