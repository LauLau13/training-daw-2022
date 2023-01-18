<template>
<div>
    <div class="nombre">
        {{ nombre }} {{ apellido }}
    </div>
    <div class="edad">
        {{ edad }}
    </div>
    <button @click="edad++">Incrementar</button>
    <button @click="edad--">Decrementar</button>
</div>
</template>

<script>
export default {
    data(){
        return{
            nombre: 'John',
            apellido: 'Foo',
            edad: 0
        }
    }
}
</script>
    
<style scope>
    .nombre {
        color:coral;
        background-color: darkred;
    }
    .edad{
        color:lightcyan;
        background-color: darkblue;
    }
</style>