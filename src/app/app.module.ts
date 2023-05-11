import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { PageHeadingComponent } from './components/page-heading/page-heading.component';
import { TweetItemComponent } from './components/tweet-item/tweet-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { AppRoutingModule } from './app-routing.module';
import { TweetInputComponent } from './components/tweet-input/tweet-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SidenavComponent,
    PageHeadingComponent,
    TweetItemComponent,
    ProfilePageComponent,
    TweetInputComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
