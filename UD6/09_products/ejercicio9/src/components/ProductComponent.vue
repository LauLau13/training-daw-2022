<template>
  <div>
    <div>
      <div>
        <div>{{ name }}</div>
        <div> {{ price }}</div>
      </div>
      <div>
        <button @click="show = !show">Show description</button>
      </div>
    </div>
    <div v-if="show">{{ description }}</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      name: 'Gold Sneakers',
      price: '1500€',
      show: false,
      description:'Sneakers for wealthy people'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
