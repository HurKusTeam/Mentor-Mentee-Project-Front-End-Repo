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
          <span class="text-h5">Detaylar</span>
        </v-card-title>
        <v-card-text justify="center">
          <v-row>
            <v-col>
              <v-textarea outlined dense label="Hakkında"> </v-textarea>
            </v-col>
            <v-col>
              <v-date-picker v-model="picker"></v-date-picker>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-2" text @click="dialog = false">Kapat</v-btn>
          <v-btn color="teal darken-1" text @click="dialog = false"
            >Kaydet</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ['item'],
  data() {
    return {
      dialog: false,
      picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
    }
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
