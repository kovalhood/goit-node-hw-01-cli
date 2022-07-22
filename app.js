// Main way
const fs = require('fs/promises');

const fileOperation = async ({ filePath, action, data }) => {
    switch (action) {
        case 'read':
            const material = await fs.readFile(filePath);
            const text = material.toString();
            console.log(text);
            break;
        case 'add':
            await fs.appendFile(filePath, data);
            break;
        case 'replace':
            await fs.writeFile(filePath, data);
            break;
    }
}

// fileOperation({ filePath: './files/test.txt', action: 'read' });
// fileOperation({ filePath: './files/test.txt', action: 'add', data: '\nStar Wars!' });
// fileOperation({ filePath: './files/test.txt', action: 'replace', data: 'Star Wars!' });
// fileOperation({ filePath: './files/test1.txt', action: 'add', data: 'Star Wars!' });
fileOperation({ filePath: './files/test2.txt', action: 'replace', data: 'Nothing but Star Wars!' });





// Second way
// const fs = require('fs/promises');

// fs.readFile('./files/test.txt')
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

// First way
// const fs = require('fs');

// fs.readFile('./files/test.txt', (error, data) => {
//     console.log(error);
//     console.log(data);
// })