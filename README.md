# BANK APP (Edit Me to see full code)


# AFTER DOWNLOADING THE PROJECT FROM
https://github.com/alfredo-fredo/ITHS-WEBB-BANK-APP.git

INSTALL THIS PACKAGES IN THE TERMINAL:
# cd ITHS-WEBB-BANK-APP-master/frontend
npm install
npm install -g @vue/cli
npm i cors

# cd ITHS-WEBB-BANK-APP-master/frontend
npm i cors
npm i sqlite sqlite3
npm i express

# TO RUN THE PROJECT :
cd ITHS-WEBB-BANK-APP-master/frontend
paste this link in your browser :
http://localhost:8082

cd ITHS-WEBB-BANK-APP-master/backend
paste this link in your browser :
http://localhost:3000/



# Database Name
BANKDB
# backend/db/BANKDB.sqlite

# USERS TABLE
UserID PK INT
FName TEXT
LName TEXT
PassportNo TEXT
AccountNo NUMERIC
Balance REAL

# HISTORY TABLE
OperationID PK INT
SenderID FK NUMERIC
ReciverID FK NUMERIC
Amount REAL

# Where to find Backend Code:
backend/index.js

# Example how to Select the bank USERS :
# in Backend :(in index.js)

app.get('/users', (request, response) => {
    database_.all('SELECT * from USERS')
        .then((rows) => {
            console.log('Fetching All USERS')
            return response.status(201).send(rows)
        })
        .catch((error) => {
            console.log('Error while fetching USERS')
            return response.status(401).send({message: error}
            )
        })
})

# in Browser :
http://localhost:3000/users

so app.get('/users' means http://localhost:3000/users
so app.get('/history' means http://localhost:3000/history

# in Frontend : (Edit Readm.md to get the full code)

<template>
    <div>
        <h2>Bank Users</h2>
        <ul>
            <li :key="user.id" v-for="user in users">
                <p>{{USER.Fname}} - {{USER.Lname}}</p>
                <p>Passport No: {{USER.PassprtNo}}</p>
                <p>Account No :{{USER.AccountNo}}</p>
                <p>Balance : {{USER.AccountNo}} SEK</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "USERS",
        data() {
            return {
                users: []
            }
        },
        beforeMount() {
            this.fetchBankUsers();
            this.setTitle()
        },
        methods: {
            fetchBankUsers() {
                fetch("http://localhost:3000/users")
                    .then(response => response.json())
                    .then(result => {
                        this.users = result
                        console.log(result);
                    })
                    .catch(() => {
                        console.log({message: -1});
                    })
            },
            setTitle() {
                document.title = "Bank Users"
            }
        }
    }
</script>
