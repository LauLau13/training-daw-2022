<template>
    <v-simple-table>
        <template v-slot:default>
            <tbody>
                <tr>
                    <td>
                        <v-checkbox
                            v-model="hover"
                            
                        ></v-checkbox>
                    </td>
                    <td>{{ name }}</td>
                    <td>{{ calories }}</td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>
    </template>
  
  <script>
  export default {
    props: {
      id: Number,
      name: String,
      done: Boolean
    }
  }
  </script>