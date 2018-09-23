import {ContactsService} from './../../services/contacts.service';
import {Grid, GridOptions} from 'ag-grid-community';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
/**
 * Import the Component styles
 */
import './contacts.container.scss';

class ContactsController {
    contacts: { id: number, firstName: string, lastName: string }[];
    grid: Grid;
    gridOptions: GridOptions = <GridOptions>{};
    eGridDiv: HTMLElement = <HTMLElement>document.querySelector('#contactsGrid');

    constructor(
        private contactsService: ContactsService
    ) {
        'ngInject';
        this.gridOptions = <GridOptions>{};
        this.gridOptions.columnDefs = [
            {
                headerName: 'FirstName',
                field: 'firstName',
                width: 100
            },
            {
                headerName: 'LastName',
                field: 'lastName',
                width: 100
            },
            {
                headerName: 'Marital Status',
                field: 'maritalStatus',
                width: 100
            }

        ];
        this.gridOptions.rowData = [
            {id: 0, firstName: 'John', lastName: 'Doe', maritalStatus: 'SINGLE'}
        ];
    }

    $onInit() {
        this.fetchData();
        this.grid = new Grid(this.eGridDiv, this.gridOptions);
    }

    remove(id: number) {
        this.contactsService.remove(id);
        this.fetchData();
    }

    private fetchData() {
        this.contactsService.getAll()
            .then(contacts => {
                this.contacts = contacts;
                this.gridOptions.api.setRowData(this.contacts);
                this.gridOptions.api.sizeColumnsToFit();
            });
    }
}

export class ContactsContainer implements angular.IComponentOptions {
    static selector = 'contacts';
    static controller = ContactsController;
    static template = require('./contact-table.component.html');
}
