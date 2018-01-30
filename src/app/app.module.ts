import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

// const appRoutes: Routes = [
//   { path: 'home', component: HomeComponent },
//   { path: 'about',      component: AboutComponent },
//   {
//     path: 'about',
//     component: AboutComponent,
//     data: { title: 'About Component' }
//   },
//   { path: '',
//     redirectTo: '/ome',
//     pathMatch: 'full'
//   },
//   { path: '**', component: HomeComponent }
// ];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
