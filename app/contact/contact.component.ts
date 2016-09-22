import { Component } from 'angular2/core';

@Component({
    templateUrl: 'app/contact/contact.component.html'
})

export class ContactComponent {
    email: string = "kevint@magenic.com";
    phone: string = "(952) 942-9552";
    addressStreet: string = "10000 Buckingham Dr"
    addressCity: string = "Eden Prairie";
    addressState: string = "MN";
    addressZip: number = 55347;
    address: string = `10000 Buckingham Dr
    Eden Prairie, MN, 55347`;
}