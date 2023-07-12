import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlPannelComponent } from './mainLayout/mainContent/control-pannel/control-pannel.component';
import { ProfileComponent } from './mainLayout/mainContent/profile/profile.component';
import { ConsultationsComponent } from './mainLayout/mainContent/consultations/consultations.component';
import { ReservationComponent } from './mainLayout/mainContent/reservation/reservation.component';
import { VideosComponent } from './mainLayout/mainContent/videos/videos.component';
import { NewsFeedComponent } from './mainLayout/mainContent/news-feed/news-feed.component';
import { DictionaryComponent } from './mainLayout/mainContent/dictionary/dictionary.component';
import { CommonQuestionsComponent } from './mainLayout/mainContent/common-questions/common-questions.component';
import { ForumComponent } from './mainLayout/mainContent/forum/forum.component';
import { SideBarComponent } from './mainLayout/side-bar/side-bar.component';
import { HeaderComponent } from './mainLayout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlPannelComponent,
    ProfileComponent,
    ConsultationsComponent,
    ReservationComponent,
    VideosComponent,
    NewsFeedComponent,
    DictionaryComponent,
    CommonQuestionsComponent,
    ForumComponent,
    SideBarComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
