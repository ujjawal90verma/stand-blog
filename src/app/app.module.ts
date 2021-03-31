import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/core/header/header.component';
import { FooterComponent } from './modules/core/footer/footer.component';
import { CarouselComponent } from './modules/home/carousel/carousel.component';
import { CarouselItemComponent } from './modules/home/carousel-item/carousel-item.component';
import { TemplateBannerComponent } from './modules/shared/template-banner/template-banner.component';
import { PostComponent } from './modules/shared/post/post.component';
import { RecentPostsComponent } from './modules/shared/recent-posts/recent-posts.component';
import { CategoriesComponent } from './modules/shared/categories/categories.component';
import { TagCloudsComponent } from './modules/shared/tag-clouds/tag-clouds.component';
import { PostSearchComponent } from './modules/shared/post-search/post-search.component';
import { ModuleBannerComponent } from './modules/shared/module-banner/module-banner.component';
import { AboutUsDetailComponent } from './modules/about-us/components/about-us-detail/about-us-detail.component';
import { BriefDescriptionComponent } from './modules/about-us/components/brief-description/brief-description.component';
import { YourCommentsComponent } from './modules/post-details/components/your-comments/your-comments.component';
import { CommentComponent } from './modules/post-details/components/comment/comment.component';
import { SendUsMessageComponent } from './modules/contact-us/components/send-us-message/send-us-message.component';
import { ContactInformationComponent } from './modules/contact-us/components/contact-information/contact-information.component';
import { AddressGeoMapComponent } from './modules/contact-us/components/address-geo-map/address-geo-map.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    CarouselItemComponent,
    TemplateBannerComponent,
    PostComponent,
    RecentPostsComponent,
    CategoriesComponent,
    TagCloudsComponent,
    PostSearchComponent,
    ModuleBannerComponent,
    AboutUsDetailComponent,
    BriefDescriptionComponent,
    YourCommentsComponent,
    CommentComponent,
    SendUsMessageComponent,
    ContactInformationComponent,
    AddressGeoMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
