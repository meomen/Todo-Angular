import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TodoModule {
  constructor(
    public id:number,
    public content:string,
    public isComplete:boolean = false
  ) {}



}
