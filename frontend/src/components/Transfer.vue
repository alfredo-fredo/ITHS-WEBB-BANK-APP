<template>
  <div id="wrapper">
    <h2>Från</h2>
    <div id="user">
      <select v-model="transaction.senderID" class="form-control">
        <option v-for="user in users" :value="user.AccountNo" :key="user.userID">{{ user.Fname }}</option>
      </select>
    </div>
    <h2>Till</h2>
    <div id="user">
      <select v-model="transaction.receiverID" class="form-control">
        <option
          v-for="user in users"
          :value="user.AccountNo"
          :key="user.userID"
        >{{ user.Fname }} {{user.balance}}</option>
      </select>
    </div>

    <div>
      <h2>Belopp</h2>
      <input type="number" v-model="transaction.amount" placeholder=" -">
    </div>

    <div id="button">
      <button @click="addToDBHistory">Send</button>
    </div>

    <div id="router">
      <router-link to="/">Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'users',
  data () {
    return {
      users: [],
      transaction: {
        senderID: null,
        receiverID: null,
        amount: null
      }
    }
  },
  beforeMount () {
    this.fetchBankUsers()
    this.setTitle()
  },
  methods: {
    addToDBHistory () { // So far only history post call is done. This method will include an actual transaction call later.
      fetch('http://localhost:3000/operation', {
        method: 'POST',
        body: this.transaction
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.ok) {
            alert('Transaction successfully completed. \n \n ' + this.transaction.amount + ' SEK sent to ID: ' + this.transaction.receiverID)
          } else {
            alert('Sorry, transaction failed.')
          }
          console.log(result)
        })
        .catch(() => {
          alert('Something went wrong..')
          console.log({ message: -1 })
        })
    },
    fetchBankUsers () {
      fetch('http://localhost:3000/users')
        .then((response) => response.json())
        .then((result) => {
          this.users = result
          console.log(result)
        })
        .catch(() => {
          console.log({ message: -1 })
        })
    },
    setTitle () {
      document.title = 'Bank Users'
    }
  }
}
</script>

<!--
<script>
export default {
  data() {
    return {
      transaction: {
        senderID: this.$store.state.userID, // getting userID from store/index.js store. Might be null.
        receiverID: null,
        amount: null,
        timeStamp: "",
        personalMessage: "",
      },
    };
  },
};
</script> -->

<style scoped>
#wrapper {
  background-color: #533a71;
  color: whitesmoke;
}

.form-control {
  list-style-type: none;
  color: whitesmoke;
  padding-bottom: 2em;
}
#button {
  padding-top: 2em;
}

#router {
  padding-top: 2em;
}

/* h5 {
  animation: color-change 5s infinite reverse;
}

@keyframes color-change {
  0% {
    color: red;
  }
  20% {
    color: orange;
  }
  40% {
    color: yellow;
  }
  60% {
    color: green;
  }
  80% {
    color: blue;
  }
  100% {
    color: purple;
  }
} */
</style>
