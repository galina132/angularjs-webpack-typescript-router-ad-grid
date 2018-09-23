import { ContactsService } from './../../services/contacts.service';

class AddContactController {

  constructor(
      private contactsService: ContactsService,
      private $state: angular.ui.IStateService
  ) {
    'ngInject';
  }

  add(contact: { lastName: string, firstName: string, maritalStatus: string})  {
    this.contactsService.add(contact);
    this.$state.go('contacts');
  }
}

export class AddContactContainer implements angular.IComponentOptions {
  static selector = 'addContact';
  static controller = AddContactController;
  static template = require('./add-contact.container.html');
}
