import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DataService } from './data.service';

import { SheetComponent } from './sheet/sheet.component';
import { HeaderComponent } from './sheet/header/header.component';
import { FormsModule } from '@angular/forms';

export function initCharacterSheet(dataService: DataService) {
    return () => dataService.loadCharacterSheet();
}

@NgModule({
    declarations: [AppComponent, SheetComponent, HeaderComponent],
    imports: [AppRoutingModule, BrowserModule, FormsModule],
    providers: [
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },
        {
            provide: APP_INITIALIZER,
            useFactory: initCharacterSheet,
            multi: true,
            deps: [DataService]
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
