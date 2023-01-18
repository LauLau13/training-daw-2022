<template>
  <div>
    <h1>Esto es mi primer componente</h1>
    Mensaje: {{ msg }}
  </div>
</template>

<script>
export default {
  //Data es un método que devuelve un objeto
  data(){
    return{
      counter :0,
      msg : 'Hello World',
    }
  }
}
</script>

<style scoped>
h1{
  color:blue;
}

</style>