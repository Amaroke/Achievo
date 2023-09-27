import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainSectionComponent } from './main-section/main-section.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { SearchSectionComponent } from './search-section/search-section.component';
import { PostSectionComponent } from './post-section/post-section.component';

@NgModule({
  declarations: [AppComponent, MainSectionComponent, FooterComponent, NavigationBarComponent, ActivityListComponent, SearchSectionComponent, PostSectionComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
