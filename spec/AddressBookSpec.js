describe('Address Book', () => {
    var addressBook = new AddressBook();
    var thisContact = new Contact();

    beforeEach(() => {
        addressBook = new AddressBook();
        thisContact = new Contact();
    });

    it('should be able to add a contact', () => {
        addressBook.addContact(thisContact)

        expect(addressBook.getContact(0)).toBe(thisContact)
    });

    it('should be able to delete a contact', () => {
        addressBook.addContact(thisContact)
        addressBook.deleteContact(0)

        expect(addressBook.getContact(0)).not.toBeDefined();
    });
});