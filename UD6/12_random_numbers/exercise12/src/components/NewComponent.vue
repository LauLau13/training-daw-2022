<template>
    <div>
        <div>
            <button @click="add">Add</button>
            <button @click="remove">Remove</button>
        </div>
        <div>{{ numbers }}</div>
        
    </div>
</template>
  
<script>
  export default {
    data(){
        return{
            numbers:[]
        }
    },
    methods: {
        add(){
            this.numbers.push(parseInt(Math.random() * 100))
        },
        remove(){
            this.numbers.shift()
        }
    }
  }
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>