import { NgModule } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatCardModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
      imports: [
        //BrowserAnimationsModule,
        //NoopAnimationsModule,
        MatButtonModule, 
        MatCheckboxModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule
      ],
      exports: [
        //BrowserAnimationsModule,
        //NoopAnimationsModule,
        MatButtonModule, 
        MatCheckboxModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule
      ],
      providers: [ ],
})
export class MaterialModule { }