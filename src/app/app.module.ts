import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { CardsComponent } from './cards/cards.component';
import { SearchFilterPipe } from './search-filter.pipe';
// import { MaterialsModule } from './material/material.module';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    CardsComponent,
    SearchFilterPipe
  ],
  bootstrap: [AppComponent],
  providers: [UserService]
})
export class AppModule {}
