const { getRandomUserData } = require('./apiModule');

// Use the module's function to get and display data
async function main() {
    try {
        const user = await getRandomUserData();
        console.log('Random User Data:');
        console.log(`Name: ${user.name}`);
        console.log(`Email: ${user.email}`);
        console.log(`Location: ${user.location}`);
    } catch (error) {
        console.error(error);
    }
}

main();