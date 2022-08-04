<template>
  <div class="app">
    <todo-list title="Yapılacaklar">
      <draggable
        :list="todos"
        group="todosapp"
        ghostClass="on-drag"
        animation="400"
      >
        <todo-item
          class="mb-2"
          v-for="todo in todos"
          :key="todo.id"
          :item="todo"
        ></todo-item>
      </draggable>

      <v-form>
        <v-text-field
          v-model="title"
          :rules="wordsRules"
          counter="25"
          hint="En fazla 25 karakter"
          label="Eklemek istediğiniz işi yazın"
        ></v-text-field
      ></v-form>
      <v-btn class="mt-2" color="green"><v-icon>mdi-plus</v-icon></v-btn>
    </todo-list>
    <todo-list title="Yapılıyor">
      <draggable
        :list="inProgress"
        group="todosapp"
        ghostClass="on-drag"
        animation="400"
      >
        <todo-item
          class="mb-2"
          v-for="todo in inProgress"
          :key="todo.id"
          :item="todo"
        ></todo-item>
      </draggable>
    </todo-list>
    <todo-list title="Yapıldı">
      <draggable
        :list="completed"
        group="todosapp"
        ghostClass="on-drag"
        animation="400"
      >
        <todo-item
          class="mb-2"
          v-for="todo in completed"
          :key="todo.id"
          :item="todo"
        ></todo-item>
      </draggable>
    </todo-list>
    <todo-list title="Onaylandı">
      <draggable
        :list="done"
        group="todosapp"
        ghostClass="on-drag"
        animation="400"
      >
        <todo-item
          v-for="todo in done"
          :key="todo.id"
          :item="todo"
          class="mb-2"
        ></todo-item>
      </draggable>
    </todo-list>
  </div>
</template>

<script>
import TodoList from '../../components/TodoList/TodoList.vue'
import TodoItem from '../../components/TodoList/TodoItem.vue'
import draggable from 'vuedraggable'
export default {
  data() {
    return {
      todos: [
        {
          id: 1,
          todo: 'Kitap oku',
        },
        {
          id: 2,
          todo: 'Sandalye ol',
        },
      ],
      inProgress: [
        {
          id: 3,
          todo: 'Vue öğren',
        },
      ],
      completed: [
        {
          id: 4,
          todo: 'Footer yap',
        },
      ],
      done: [
        {
          id: 5,
          todo: 'araba',
        },
      ],
    }
  },
  components: { TodoList, TodoItem, draggable },
}
</script>

<style>
.app {
  display: flex;
  justify-content: center;
  margin: 50px 0px;
}
.on-drag {
  background-color: rgb(38, 137, 244);
  color: white;
  z-index: 10;
}
</style>
