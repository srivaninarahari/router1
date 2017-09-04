import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { appRouting } from "./app.Routing";
import { RootComponent } from './app.component';
import { DropDownService } from "app/service/drop-down.service";
import { CapitalizePipe } from './capitalize.pipe';
import { SearchByPipe } from './search-by.pipe';
import { ListComponent } from './list/list.component';
import { StudentComponent } from './student/student.component';
import {   StudentModule  } from './student/student.module'; 
import {   ListModule} from './list/list.module'; 
import {ListService } from "app/service/list.service";
@NgModule({
  declarations: [
    RootComponent,
    CapitalizePipe,
    SearchByPipe,
    ListComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouting,
    StudentModule 
  ],
  providers: [DropDownService, ListService],
  bootstrap: [RootComponent]
})
export class AppModule { }
