<template>
  <div class="todo-item">
    {{ item }}
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn x-small color="primary" dark v-bind="attrs" v-on="on">
          Info
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          <span class="text-h5">Detaylar</span>
        </v-card-title>
        <v-card-text justify="center">
          <v-col>
            <v-row>
              <v-text-field v-model="Title" label="Title"></v-text-field>
            </v-row>
            <v-row>
              <v-textarea
                v-model="todoDescription"
                outlined
                dense
                label="Hakkında"
              >
              </v-textarea>
            </v-row>
            <v-row justify="center">
              <v-date-picker class="mr-5" v-model="picker"></v-date-picker>
              <v-col>
                <v-row><p class="text-3xl">Bitiş Tarihi</p></v-row>
                <v-row class="red--text text-3xl Black text.">{{
                  endDate
                }}</v-row>
              </v-col>
            </v-row>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-2" text @click="dialog = false"
                >Kapat</v-btn
              >
              <v-btn
                v-on:click="submit()"
                color="teal darken-1"
                text
                @click="dialog = false"
                >Kaydet</v-btn
              >
            </v-card-actions>
            <v-row>
              <v-text-field v-model="commentUser" label="Yorum"></v-text-field>
              <v-btn
                small
                class="green mt-5"
                v-on:click="submitComment()"
                @click="dialog = false"
                >Gönder</v-btn
              >
            </v-row>

            <v-row>
              <v-card
                class="mb-2"
                v-for="comment in comments"
                :key="comment"
                width="533"
              >
                <v-list-item-avatar class="ml-2" size="35">
                  <img :src="`${comment.Profile?.ProfileImage}`" alt="John" />
                </v-list-item-avatar>
                {{ comment.Comment?.Description }}
              </v-card>
            </v-row>
          </v-col>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ['item', 'id', 'desc', 'endDate'],
  data() {
    return {
      date: '',
      commentUser: '',
      todoDescription: this.desc,
      Title: this.item,
      dialog: false,
      picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      comments: [],
    }
  },
  mounted() {
    this.getTodoComments()
  },
  methods: {
    getTodoComments() {
      return this.$axios
        .$get('/api/TodoComments/' + this.id)
        .then((response) => {
          this.comments = response
          console.log(response)
        })
    },

    submitComment() {
      let comment = {
        Description: this.commentUser,
        TodoID: this.id,
      }
      return this.$axios.$post('/api/AddComment', comment).then((response) => {
        console.log(response)
        console.log(comment)
      })
    },

    submit() {
      //if (this.$refs.form.validate()) {
      console.log(this.title, 0)

      this.date = this.picker.replace(/-/g, '.')
      let todo = {
        Title: this.Title,
        Description: this.todoDescription,
        Enddate: this.date,
      }
      return this.$axios
        .$post('/api/UpdateTodo/' + this.id, todo)
        .then((response) => {
          console.log(response)

          console.log('date', this.date)
          //console.log(todo)
          //console.log('id', this.id)
          window.location.reload(true)
        })
      //}
    },
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
