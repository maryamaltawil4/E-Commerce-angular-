import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './component/footer/footer.component';
import { SelectComponent } from './component/select/select.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './component/spinner/spinner.component';



@NgModule({
  declarations: [
    FooterComponent,
    SelectComponent,
    NavbarComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports :[

    FooterComponent,
    NavbarComponent,
    SpinnerComponent

  ]
})
export class SharedModule { }
