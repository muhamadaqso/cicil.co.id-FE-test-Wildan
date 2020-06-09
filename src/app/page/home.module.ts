import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { homeComponent } from './home/home.component'
import { resultComponent } from './result/result.component'

@NgModule({
    declarations: [homeComponent, resultComponent],
    imports: [
        BrowserModule,
      CommonModule,
      FormsModule,
      RouterModule,
    ],
    exports: [homeComponent]
  })
  export class homeModule { }