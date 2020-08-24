<template>
  <div id="wrapper">
    <input type="text" v-model="transaction.receiverID" placeholder="Receiver Id">
    <input type="number" v-model="transaction.balance" placeholder="Balance">
  </div>
</template>

<script>
export default {

data() {
  return {
    transaction: {
      senderID: "",
      receiverID: "",
      balance: 0,
      timeStamp: "",
      personalMessage: ""
    }
  }
}

}
</script>
 
<style>

#wrapper{
    background-color: #533A71;
    
}

</style>