<template>
  <div>
    <div>{{ initialMsg }}</div>
    <div>
      <ul>
        <li v-for="(item, index) in quoteslist" :key="item" v-if="index%2 === 0">{{ item }}</li>
        <!--El v-if="index%2 === 0" y el index solo se utiliza para mostrar los pares-->
      </ul>
    </div>
  </div>
  
</template>

<script>
export default {
  data(){
    return{
      initialMsg: 'Random quotes',
      quoteslist: 
      [
        "Evite los virus. Hierva el ordenador antes de usar",
        "8086. Odisea de despacio...",
        "Virus check complete. All viruses functioning normally (Chequeo de virus completado, todos los virus funcionan perfectamente)",
        "Mi 286 no tiene memoria, tan sólo un vago recuerdo",
        "Fichero no encontrado. ¿Me lo invento? (S/N)",
        "Cambio Pentium por calculadora que sepa dividir",
        "Windows 98 es multitarea: Acaba con mis nervios y mi paciencia al mismo tiempo.",
        "PATH: la primera a la derecha y luego todo recto",
        "VVaayyaa tteeccllaaddoo mmaass sseennssiibbllee",
        "Mi ordenador me gana al ajedrez, pero yo le gano boxeando."
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
