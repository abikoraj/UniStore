import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'


import { AppComponent } from './app.component';
import { HomeComponent } from './components/page/home/home.component';
import { MainComponent } from './components/main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/partial/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeadercartComponent } from './components/partial/headercart/headercart.component';
import { MobheaderComponent } from './components/partial/mobheader/mobheader.component';

const routes: Routes = [
  {
    path:"",
    component:MainComponent,
    children:[
      {path:"home", component:window.innerWidth>768?HomeComponent:MainComponent}
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    HeaderComponent,
    HeadercartComponent,
    MobheaderComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
