import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './component/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './component/spinner/spinner.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports :[

    FooterComponent,
    NavbarComponent,
    SpinnerComponent

  ]
})
export class SharedModule { }
