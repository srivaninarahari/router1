
import {Routes,RouterModule} from '@angular/router';
import { RootComponent } from './app.component';

import { StudentComponent } from './student/student.component';
import { ListComponent } from './list/list.component';


const routes:Routes=[
    {path:'login',redirectTo:'/login', pathMatch:'full'},
{path:'login',component:StudentComponent},

{path:'list', component: ListComponent},

];
export const appRouting = RouterModule.forRoot(routes);