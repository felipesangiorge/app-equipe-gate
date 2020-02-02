import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import { MembersComponent } from './components/members/members.component';
import { ContactsComponent } from './components/contacts/contacts.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'members', component: MembersComponent},
  {path: 'contacts', component: ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
