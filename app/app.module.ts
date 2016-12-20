import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { SIDEDRAWER_DIRECTIVES } from "nativescript-telerik-ui-pro/sidedrawer/angular";
import { LISTVIEW_DIRECTIVES } from 'nativescript-telerik-ui-pro/listview/angular';
import { CALENDAR_DIRECTIVES } from 'nativescript-telerik-ui-pro/calendar/angular';
import { CHART_DIRECTIVES } from 'nativescript-telerik-ui-pro/chart/angular';
import { DATAFORM_DIRECTIVES } from 'nativescript-telerik-ui-pro/dataform/angular';

import { AppComponent } from "./app.component";
import { ItemDetailComponent } from './pages/item-detail.component';
import { ItemListComponent } from './pages/item-list.component';

import { routes } from './app-routing.module';

@NgModule({
    declarations: [
        LISTVIEW_DIRECTIVES,
        SIDEDRAWER_DIRECTIVES,
        CALENDAR_DIRECTIVES,
        CHART_DIRECTIVES,
        DATAFORM_DIRECTIVES,
        AppComponent,
        ItemDetailComponent,
        ItemListComponent
    ],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
