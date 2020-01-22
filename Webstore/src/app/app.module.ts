import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/pages/header/header.component';
import { MainComponent } from './views/pages/main/main.component';
import { FooterComponent } from './views/pages/footer/footer.component';
import { HomeComponent } from './views/pages/home/home.component';
import { AboutusComponent } from './views/pages/aboutus/aboutus.component';
import { FaqsComponent } from './views/pages/faqs/faqs.component';
import { PageNotFoundComponent } from './views/pages/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aboutus',      component: AboutusComponent },
  {
    path: 'faqs',
    component: FaqsComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    FaqsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
