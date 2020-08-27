
<template>
  <div id="user">
    <h2>Bank Users</h2>
    <ul>
      <li :key="user.id" v-for="user in users">
        <p>{{user.Fname}} - {{user.Lname}}</p>
        <p>Passport No: {{user.PassprtNo}}</p>
        <p>Account No :{{user.AccountNo}}</p>
        <p>Balance : {{user.Balance}} SEK</p>
      </li>
    </ul>

    <router-link to="/transfer"><h4 class="link">Transfer</h4></router-link>
  </div>
</template>

<script>
export default {
  name: 'users',
  data () {
    return {
      users: []
    }
  },
  beforeMount () {
    this.fetchBankUsers()
    this.setTitle()
  },
  methods: {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#wrapper {
  background-color: #533a71;
  color: whitesmoke;
  width: 100%;
  height: 100%;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 1rem;
}

.link {
  text-decoration: underline;
  color: whitesmoke;
}

.my-white {
  color: #fdfdfd;
}
#user {
  display: flex;
  flex-direction: column;
  color: whitesmoke;
}
</style>
