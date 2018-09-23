export class ContactsService {
  static selector = 'contactsService';
  contacts: { id: number, lastName: string, firstName: string, maritalStatus: string }[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', maritalStatus: 'SINGLE' }
  ];

  constructor(
      private $q: angular.IQService
  ) {
    'ngInject';
  }

  getAll() {
    return this.$q.resolve(this.contacts);
  }

  add(contact: { lastName: string, firstName: string, maritalStatus: string }) {
    console.log('add', this.contacts);
    const highestId = this.contacts
      .map(c => c.id)
      .reduce((a, b) => Math.max(a, b), 1);

    this.contacts.push({
      id: highestId + 1,
      firstName: contact.firstName,
      lastName: contact.lastName,
      maritalStatus: contact.maritalStatus
    });
  }

  remove(id: number) {
    this.contacts = this.contacts.filter(contact => contact.id !== id);
  }
}
