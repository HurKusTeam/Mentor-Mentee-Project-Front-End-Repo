<template>
  <div class="todo-item">
    {{ item.todo }}
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn x-small color="primary" dark v-bind="attrs" v-on="on">
          Info
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ['item'],
  data() {
    return {}
  },
}
</script>

<style>
.todo-item {
  padding: 10px 20px;
  border: 1px solid darkblue;
  background-color: darkblue;
  color: white;
}
.todo-item:hover {
  cursor: move;
}
</style>
