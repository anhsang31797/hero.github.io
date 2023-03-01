import { GetDataComponent } from './get-data/get-data.component';
import { FormComponent } from './form/form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { ChaComponent } from './cha/cha.component';
import { RXJSComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'about', component: AboutComponent },
  {path: 'form', component: FormComponent },
  {path: 'profile-editor', component: ProfileEditorComponent },
  {path: 'get-data', component: GetDataComponent },
  {path: 'cha', component: ChaComponent },
  {path: 'RSJX', component: RXJSComponent },
  {path: '**', component: PageNotFoundComponent }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

