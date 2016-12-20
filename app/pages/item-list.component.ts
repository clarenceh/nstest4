import { Component, OnInit, ChangeDetectorRef } from "@angular/core";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Page } from 'ui/page';
import { ObservableArray } from "data/observable-array";
import { ListViewLinearLayout, ListViewEventData, RadListView, ListViewLoadOnDemandMode } from "nativescript-telerik-ui-pro/listview";
import { RouterExtensions } from 'nativescript-angular/router';

class Contact {
    name: string

    constructor(name: string) {
        this.name = name;
    }
}

@Component({
    templateUrl: "pages/item-list.component.html",
})
export class ItemListComponent implements OnInit {

    itemList: RadListView;

/*    contacts: ObservableArray<Contact>;

    ngOnInit() {

        this.contacts = new ObservableArray<Contact>();

        this.contacts.push(new Contact('Contact 1'));
        this.contacts.push(new Contact('Contact 2'));
        this.contacts.push(new Contact('Contact 3'));

    }*/

    contacts: Observable<Contact[]>;
    _contacts: Contact[] = [];

    private _layout: ListViewLinearLayout;

    constructor(private changeDetectorRef: ChangeDetectorRef,
        private router: RouterExtensions,
        private page: Page) {}

    ngOnInit() {

        this.itemList = <RadListView>this.page.getViewById('testList');

        this.layout = new ListViewLinearLayout();
        this.layout.scrollDirection = "Vertical";
        this.layout.itemHeight = 80;

        this._contacts.push(new Contact('Contact 1'));
        this._contacts.push(new Contact('Contact 2'));
        this._contacts.push(new Contact('Contact 3'));
        this._contacts.push(new Contact('Contact 4'));
        this._contacts.push(new Contact('Contact 5'));
        this._contacts.push(new Contact('Contact 6'));
        this._contacts.push(new Contact('Contact 7'));
        this._contacts.push(new Contact('Contact 8'));
        this._contacts.push(new Contact('Contact 9'));
        this._contacts.push(new Contact('Contact 10'));
        this._contacts.push(new Contact('Contact 11'));
        this._contacts.push(new Contact('Contact 12'));
        this._contacts.push(new Contact('Contact 13'));
        this._contacts.push(new Contact('Contact 14'));
        this._contacts.push(new Contact('Contact 15'));

        this.contacts = Observable.of(this._contacts);

        this.changeDetectorRef.detectChanges();

    }

    public onLoadMoreItemsRequested(args: ListViewEventData) {
        console.log(`Load more items tapped`);

        let listView: RadListView = args.object;

        this._contacts.push(new Contact('Another contact'));

        this.contacts = Observable.of(this._contacts);

        listView.notifyLoadOnDemandFinished();
    }

    public get layout(): ListViewLinearLayout {
        return this._layout;
    }

    public set layout(value: ListViewLinearLayout) {
        this._layout = value;
    }

    toDetail() {
        this.router.navigate(['/detail']);
    }

    onScroll() {
        this.itemList.scrollToIndex(10);
    }

}