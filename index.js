const contacts = require("./db/contacts");
const { program } = require('commander');

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "list":
            const allContacts = await contacts.listContacts();
            return console.log(allContacts);
        case "getById":
            const contact = await contacts.getContactById(id);
            return console.log(contact);
        case "addContact":
            const newContact = await contacts.addContact({ name, email, phone });
            return console.log(newContact);
        case "deleteContact":
            const deleteContact = await contacts.removeContact(id);
            return console.log(deleteContact);
        default:
            return console.log("Unknown action")
    }
}

program
    .option('-a, --action <type>', 'choose action')
    .option('-i, --id <type>', 'user id')
    .option('-n, --name <type>', 'user name')
    .option('-e, --email <type>', 'user email')
    .option('-p, --phone <type>', 'user phone');

program.parse();

const option = program.opts();
console.log(option);
invokeAction(option);
