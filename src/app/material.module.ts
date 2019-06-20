import { NgModule } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatCardModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';

@NgModule({
      imports: [
        //BrowserAnimationsModule,
        //NoopAnimationsModule,
        MatButtonModule, 
        MatCheckboxModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatInputModule
      ],
      exports: [
        //BrowserAnimationsModule,
        //NoopAnimationsModule,
        MatButtonModule, 
        MatCheckboxModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatInputModule
      ],
      providers: [ ],
})
export class MaterialModule { }