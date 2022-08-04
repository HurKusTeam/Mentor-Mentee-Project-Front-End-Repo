<template>
  <div class="todo-item">
    {{ item.todo }}
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
