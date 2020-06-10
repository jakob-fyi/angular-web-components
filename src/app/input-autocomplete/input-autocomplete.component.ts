import { Component, OnInit, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import { CountryApiService } from '../country-api-service/country-api.service';

@Component({
  selector: 'app-input-autocomplete',
  templateUrl: './input-autocomplete.component.html',
  styleUrls: ['./input-autocomplete.component.scss', '../../assets/bootstrap/css/bootstrap.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class InputAutocompleteComponent implements OnInit {

  public options: Array<string> = [];
  public inputValue = '';
  public message = '';
  public hideOptions = false;
  @ViewChild('land', { static: true }) landInput: ElementRef;

  public constructor(private countries: CountryApiService) { }
  public ngOnInit() { }

  public inputChanged() {
    this.countries.getCountriesByName(this.inputValue).subscribe(
      countries => {
        this.message = 'Gefunden:';
        this.options = countries;
      }, error => {
        this.message = '';

        if (error.status === 404){
          this.message = 'Nichts gefunden!';
          this.options = [];
        } else {
          console.error(`Error Code: ${error.status}\nMessage: ${error.message}`);
        }
      }
    );
  }

  public insertOption(option: any) {
    this.inputValue = option.name;
    this.inputChanged();
  }

  public focusIn() {
    this.hideOptions = false;
  }

  public focusOut() {
    setTimeout(_ => this.hideOptions = true, 500);
  }

}
