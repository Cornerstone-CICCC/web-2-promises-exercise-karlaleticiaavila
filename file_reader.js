const fs = require("fs").promises;

// THEN-CATCH
fs.readFile("./firstname.txt", "utf-8") 
.then(firstname => {
    return fs.readFile("./lastname.txt", "utf-8")
    .then(lastname => {
        return fs.readFile("./age.txt", "utf-8")
        .then(age => {
            return fs.readFile("./hobbies.txt", "utf-8")
            .then(hobbies => {
                const hobbiesArr = hobbies.split(","); 
                console.log(`Then-Catch: ${firstname} ${lastname} is ${age} years old and his hobbies are ${hobbiesArr[0]} and ${hobbiesArr[1]}`);
            });
        });
    });
})
.catch(err => {
    console.error("Error:", err);
});


// ASYNC/AWAIT
async function readFiles() {
    try {
        const firstname = await fs.readFile("./firstname.txt", "utf-8");
        const lastname = await fs.readFile("./lastname.txt", "utf-8");
        const age = await fs.readFile("./age.txt", "utf-8");
        const hobbies = await fs.readFile("./hobbies.txt", "utf-8");
        const hobbiesArr = hobbies.split(",");

        console.log(`Async/Await: ${firstname} ${lastname} is ${age} years old and his hobbies are ${hobbiesArr[0]} and ${hobbiesArr[1]}`);
    } catch (err) {
        console.error("Error:", err);
    }
}

readFiles();

