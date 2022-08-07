<template>
  <div class="app">
    <todo-list title="Yapılacaklar">
      <draggable
        :list="todos"
        @add="onAdd0"
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

      <v-form class="mt-3" ref="form">
        <v-text-field
          v-model="title"
          counter="25"
          :rules="inputRules"
          hint="En fazla 25 karakter"
          label="Eklemek istediğiniz iş"
        ></v-text-field>
        <v-btn v-on:click="submit()" color="green"
          ><v-icon>mdi-plus</v-icon></v-btn
        >
      </v-form>
    </todo-list>
    <todo-list title="Yapılıyor">
      <draggable
        :list="inProgress"
        @add="onAdd1"
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
        @add="onAdd2"
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
        @add="onAdd3"
        group="todosapp"
        ghostClass="on-drag"
        animation="400"
      >
        <todo-item
          v-for="todo in done"
          :key="todo.id"
          :item="todo"
          class="mb-2"
        >
        </todo-item>
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
      inputRules: [(v) => v.length >= 3 || 'En az 3 karakter'],
      title: '',
      thisMentee: false,

      mentees: [
        {
          id: 2,
          name: 'Ayşe',
        },
        {
          id: 1,
          name: 'Ali',
        },
      ],

      todos: [
        {
          menteeId: 2,
          id: 1,
          todo: 'Kitap oku',
        },
        {
          menteeId: 1,
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
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        console.log(this.title, 0)
      }
    },
    getComponentData(evt, index) {
      console.log({
        value: evt.item.innerText,
        id: evt.item._underlying_vm_.id,
        menteeId: evt.item._underlying_vm_.menteeId,
        index,
      })
    },

    onAdd0: function (evt) {
      console.log(0)
      this.getComponentData(evt, 0)
    },
    onAdd1: function (evt) {
      console.log(1)
      this.getComponentData(evt, 1)
    },
    onAdd2: function (evt) {
      this.getComponentData(evt, 2)
    },
    onAdd3: function (evt) {
      this.getComponentData(evt, 3)
    },
  },
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
