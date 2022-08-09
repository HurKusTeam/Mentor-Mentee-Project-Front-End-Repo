<template>
  <div class="app">
    <todo-list title="Yapılacaklar">
      <draggable
        :list="allTodos.Todo0"
        @add="onAdd0"
        group="todosapp"
        ghostClass="on-drag"
        animation="400"
      >
        <todo-item
          class="mb-2"
          v-for="todo in allTodos.Todo0"
          v-if="todo.Title != '???'"
          :key="todo.id"
          :item="todo.Title"
          :id="todo.ID"
        ></todo-item>
      </draggable>

      <v-form class="mt-3" ref="form">
        <v-text-field
          v-model="title"
          counter="20"
          :rules="inputRules"
          hint="En fazla 20 karakter"
          label="Eklemek istediğiniz iş"
        ></v-text-field>
        <v-btn
          v-on:click="submit(allTodos.Mentee.ID, allTodos.Mentee.MentorID)"
          color="green"
          ><v-icon>mdi-plus</v-icon></v-btn
        >
      </v-form>
    </todo-list>
    <todo-list title="Yapılıyor">
      <draggable
        :list="allTodos.Todo1"
        @add="onAdd1"
        group="todosapp"
        ghostClass="on-drag"
        animation="400"
      >
        <todo-item
          class="mb-2"
          v-for="todo in allTodos.Todo1"
          v-if="todo.Title != '???'"
          :key="todo.id"
          :item="todo.Title"
          :id="todo.ID"
        ></todo-item>
      </draggable>
    </todo-list>
    <todo-list title="Yapıldı">
      <draggable
        :list="allTodos.Todo2"
        @add="onAdd2"
        group="todosapp"
        ghostClass="on-drag"
        animation="400"
      >
        <todo-item
          class="mb-2"
          v-for="todo in allTodos.Todo2"
          v-if="todo.Title != '???'"
          :key="todo.id"
          :item="todo.Title"
          :id="todo.ID"
        ></todo-item>
      </draggable>
    </todo-list>
    <todo-list title="Onaylandı">
      <draggable
        :list="allTodos.Todo3"
        @add="onAdd3"
        group="todosapp"
        ghostClass="on-drag"
        animation="400"
      >
        <todo-item
          v-for="todo in allTodos.Todo3"
          v-if="todo.Title != '???'"
          :key="todo.id"
          :item="todo.Title"
          :id="todo.ID"
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
      checkMove: function (evt) {
        console.log(evt.draggedContext)
      },
      inputRules: [
        (v) => (v.length >= 3 && v.length <= 20) || 'En az 3 karakter',
      ],
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

      allTodos: [],
    }
  },
  components: { TodoList, TodoItem, draggable },
  mounted() {
    this.getUserTodo()
  },

  methods: {
    getUserTodo() {
      return this.$axios.$get('/api/GetTodo/38/139').then((response) => {
        this.allTodos = response
        console.log(response)
      })
    },

    submit(Menteeid, Mentorid) {
      if (this.$refs.form.validate()) {
        console.log(this.title, 0)
        let todo = {
          Title: this.title,
          Menteeid: Menteeid,
          Mentorid: Mentorid,
        }
        return this.$axios.$post('/api/AddTodo', todo).then((response) => {
          console.log(response)
          console.log(todo)
        })
      }
    },
    async getComponentData(evt, index) {
      let todo = {
        ID: evt.item._underlying_vm_.ID,
        Status: index,
        ActionDate: '05-05-2005',
      }

      return await this.$axios.$post('/api/Dragged', todo).then((response) => {
        console.log(response)
        console.log(todo)
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
