import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements';
import { InputAutocompleteComponent } from './input-autocomplete/input-autocomplete.component';
import { CountryApiService } from './country-api-service/country-api.service';

@NgModule({
  declarations: [InputAutocompleteComponent],
  imports: [BrowserModule, CommonModule, FormsModule, HttpClientModule],
  providers: [CountryApiService],
  entryComponents: [InputAutocompleteComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(InputAutocompleteComponent, { injector: this.injector });
    customElements.define('input-autocomplete', el);
  }
}
