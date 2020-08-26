<template>
  <div id="wrapper">
    <h2>Från</h2>
    <div id="user">
      <select class="form-control">
        <option>Från</option>
        <option v-for="user in users" :value="user.AccountNo" :key="user.userID">{{ user.Fname }}</option>
      </select>
    </div>
    <h2>Till</h2>
    <div id="user">
      <select class="form-control">
        <option>Till</option>
        <option
          v-for="user in users"
          :value="user.AccountNo"
          :key="user.userID"
        >{{ user.Fname }} {{user.balance}}</option>
      </select>
    </div>

    <div id="button">
      <button>Send</button>
    </div>

    <div id="router">
      <router-link to="/">Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "users",
  data() {
    return {
      users: [],
    };
  },
  beforeMount() {
    this.fetchBankUsers();
    this.setTitle();
  },
  methods: {
    fetchBankUsers() {
      fetch("http://localhost:3000/users")
        .then((response) => response.json())
        .then((result) => {
          this.users = result;
          console.log(result);
        })
        .catch(() => {
          console.log({ message: -1 });
        });
    },
    setTitle() {
      document.title = "Bank Users";
    },
  },
};
</script>

<!-- 
<script>
export default {
  data() {
    return {
      transaction: {
        senderID: this.$store.state.userID, // getting userID from store/index.js store. Might be null.
        receiverID: null,
        balance: null,
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
  color: black;
}

.form-control {
  list-style-type: none;
  color: black;
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
