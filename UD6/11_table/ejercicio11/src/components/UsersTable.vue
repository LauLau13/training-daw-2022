<template>
  <div>
    <div>Users Table</div>
    <div>
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>surname</td>
            <td>adress</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.surname }}</td>
            <td>{{ user.adress }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data()
  {
    return{
      users: 
      [
        {id:1, name:'name1', surname:'surname1', adress:'adress1'},
        {id:2, name:'name2', surname:'surname2', adress:'adress2'},
        {id:3, name:'name3', surname:'surname3', adress:'adress3'}
      ]
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
