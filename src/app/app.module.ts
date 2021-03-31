import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/core/header/header.component';
import { FooterComponent } from './modules/core/footer/footer.component';
import { CarouselComponent } from './modules/home/components/carousel/carousel.component';
import { CarouselItemComponent } from './modules/home/components/carousel-item/carousel-item.component';
import { HomeComponent } from './modules/home/home/home.component';
import { AboutUsComponent } from './modules/about-us/about-us/about-us.component';
import { BlogEntriesComponent } from './modules/blog-entries/blog-entries/blog-entries.component';
import { ContactUsComponent } from './modules/contact-us/contact-us/contact-us.component';
import { CoreComponent } from './modules/core/core/core.component';
import { PostDetailsComponent } from './modules/post-details/post-details/post-details.component';
import { SharedComponent } from './modules/shared/shared/shared.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    CarouselItemComponent,
    HomeComponent,
    AboutUsComponent,
    BlogEntriesComponent,
    ContactUsComponent,
    CoreComponent,
    PostDetailsComponent,
    SharedComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
