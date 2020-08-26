<template>
  <div id="wrapper">
    <ul>
    <li>
      <h5> {{ 'User: ' + this.$store.state.userID }} </h5>
    </li>
    </ul>
    <div>
    <ul>
      <li>
        <label for="receiverID">Receiver id</label>
      </li>
      <li>
        <input type="number" id="receiverID" v-model="transaction.receiverID" placeholder=" -"/>
      </li>
    </ul>
    </div>
    <div>
      <ul>
        <li>
          <label for="balance">Balance</label>
        </li>
        <li>
          <input type="number" id="balance" v-model="transaction.balance" placeholder=" -"/>
        </li>
      </ul>
    </div>

    <ul>
      <li>
        <button>Send</button>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  data () {
    return {
      transaction: {
        senderID: this.$store.state.userID, // getting userID from store/index.js store. Might be null.
        receiverID: null,
        balance: null,
        timeStamp: '',
        personalMessage: ''
      }
    }
  }
}
</script>

<style scoped>
#wrapper {
  background-color: #533a71;
  color: azure;
}

li {
  list-style-type: none;
}

h5 {
  animation: color-change 5s infinite reverse;
}

@keyframes color-change {
  0% { color: red; }
  20% { color: orange; }
  40% { color: yellow; }
  60% { color: green; }
  80% { color: blue; }
  100% { color: purple; }
}

</style>
