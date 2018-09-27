import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FiltersComponent } from './feature/filters/filters.component';
import { SelectedFiltersComponent } from './feature/selected-filters/selected-filters.component';
import { ProductsComponent } from './feature/products/products.component';
import { FilteringService } from './feature/shared/services/filtering.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDividerModule, MatListModule,MatExpansionModule, MatTabsModule, MatRadioModule, MatButtonModule, MatCheckboxModule, MatCardModule} from '@angular/material';
import { CartComponent } from './feature/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,

    SelectedFiltersComponent,
    ProductsComponent,
    CartComponent
  ],
  imports: [
     MatButtonModule,
     MatCheckboxModule,
     MatListModule,
     MatCardModule,
     MatDividerModule,
     MatRadioModule,
     MatTabsModule,
     MatExpansionModule,
     BrowserModule,
     BrowserAnimationsModule
  ],
  exports: [MatButtonModule, MatCheckboxModule],
  providers: [FilteringService],
  bootstrap: [AppComponent]
})
export class AppModule { }
