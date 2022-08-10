<template>
  <div class="todo-list">
    <div class="titleTodo">{{ title }}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['title'],
  data() {
    return {}
  },
}
</script>

<style>
.todo-list {
  padding: 10px 20px;
  margin: 0 10 px;
  border: 1px solid rgb(16, 49, 233);
  font-family: sans-serif;
  width: 300px;
  background-color: white;
}
.titleTodo {
  padding: 10px;
  font-size: 20px;
  font-weight: 600px;
  margin-bottom: 10px;
  text-align: center;
  border-bottom: 1px #eee;
}
</style>
