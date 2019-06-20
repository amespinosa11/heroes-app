import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { MaterialModule } from '../../material.module';
import { SearchPipe } from './searchPipe/search.pipe';

@NgModule({
  declarations: [ToolbarComponent, SearchPipe],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  providers: [ MaterialModule ],
  exports: [
    ToolbarComponent, 
    SearchPipe
  ]
})
export class CoreModule { }
