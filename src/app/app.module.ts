import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
// Import HttpClient and withFetch
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // For ngModel
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, // Add FormsModule here // Include FormsModule for two-way data binding
    MatInputModule,
    MatListModule,
    MatFormFieldModule
  ],
  providers: [
    provideHttpClient(withFetch()),
    provideAnimationsAsync() //enables fetch api here
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
