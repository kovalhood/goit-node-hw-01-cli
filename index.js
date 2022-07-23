const contacts = require('./db/contacts');

const { Command } = require('commander')
const program = new Command()
program
    .option('-a, --action <type>', 'choose action')
    .option('-i, --id <type>', 'user id')
    .option('-n, --name <type>', 'user name')
    .option('-e, --email <type>', 'user email')
    .option('-p, --phone <type>', 'user phone')

program.parse(process.argv)

const argv = program.opts()

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case 'list':
            const listContacts = await contacts.listContacts();
            console.table(listContacts);
            break;

        case 'get':
            const contactById = await contacts.getContactById(id);
            console.log(contactById);
            break;

        case 'add':
            const newContact = await contacts.addContact(name, email, phone);
            console.log(newContact);
            break;
        
        case 'update':
            const updateContact = await contacts.updateContactById(id, name, email, phone);
            console.log(updateContact);
            break;

        case 'remove':
            const removeContact = await contacts.removeContact(id);
            console.log(removeContact);
            break;

        default:
            console.warn('\x1B[31m Unknown action type!');
    }
}

const start = async (argv) => {
    try {
        await invokeAction(argv);
    } catch (error) {
        console.log(error);
    }
};

start(argv);

// (async()=>{
//     await invokeAction(argv)
// })()