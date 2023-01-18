<!-- Crear un proyecto vue.

Modificar el componente App para que:

Muestre 3 variable en 2 divs:

Div1: Nombre y Apellidos

Div2: Edad

Las variables Nombre y Apellidos serán cadenas, mientras que Edad será numérico

Deberán existir 2 botones ‘Incrementar’ y ‘Decrementar’ que sumarán y restarán (respectivamente) años a la variable edad

El color de fondo del Div1 será ‘coral’ y de Div2 será ‘lightcyan’ 
-->

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <TitleComponent></TitleComponent>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TitleComponent from './components/TitleComponent.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    TitleComponent
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
