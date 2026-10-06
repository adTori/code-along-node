// Sätta upp server

const express = require("express")
const app = express()

app.use(express.json())




// Datan vi arbetar med idag
let users = [
    { username: "Molly", age: 25 },
    { username: "David", age: 38 },
    { username: "Anna", age: 20 },
];

// Routes:

// start route "/", skicka Hello World
app.get("/", (req, res) => {
    res.send("Hello World");
});

// Hämta och visa alla användare

app.get("/users", (req, res)=> {

    res.send(`Här är alla användare ${users.map(row => row.username)}`)
})

// Skicka och visa en användare

app.post("/user", (req,res)=> {
    const {username} = req.body

    res.send(`Denna användare tog vi emot från Postman förfrågan ${username}`);
    
});


// Skapa en ny användare

app.post("/create", (req, res)=> {

    const {username, age} = req.body

    users.push({username, age})

    res.send(`Vi har lagt till användaren ${username} i listan: ${users.map((row) => row.username)}`
    );

});


// Updatera en befintlig användare

app.put("/update", (req, res) => {

    const {username, new_username} = req.body;

    const this_user = users.find(row => row.username === username)

    this_user.username = new_username

    res.send(`Användaren ${username} bytte namn till ${new_username}. Uppdaterad lista ${users.map(row => row.username)}`)

});


// Ta bort en användare

app.delete("/delete", (req, res) => {

    const {username} = req.body

    users = users.filter(row => row.username !== username)

    res.send(`Användaren ${username}, tog bort sitt konto. Uppdaterad lista ${users.map(row => row.username)}`)

});



// Starta server - console.log("port:  http://localhost:3000 ");

app.listen(3000, (res,req)=>{

    console.log("port:  http://localhost:3000 ");
})
    
