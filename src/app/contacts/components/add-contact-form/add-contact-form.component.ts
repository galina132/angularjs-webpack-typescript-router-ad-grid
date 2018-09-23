class AddContactFormController {
    lastName: string;
    firstName: string;
    maritalStatus: string;
    contactAdded: ($event: { $event: { contact: { lastName: string, firstName: string, maritalStatus: string } } }) => void;
    submit() {
        const lastName = this.lastName;
        const firstName = this.firstName;
        const maritalStatus = this.maritalStatus;
        this.contactAdded({
            $event: {
                contact: {lastName, firstName, maritalStatus}
            }
        });
        this.lastName = '';
        this.firstName = '';
        this.maritalStatus = 'SINGLE';

    }
}

export class AddContactForm implements angular.IComponentOptions {
    static selector = 'addContactForm';

    static template = require('./add-contact-form.component.html');
    static bindings = {
        contactAdded: '&'
    };
    static controller = AddContactFormController;
}
