<template>
  <header class="toolbar">
    <div class="toolbar--container">
      <a
        href="/"
        class="item--link text--logo text-4xl text-gradient bg-gradient-to-r from-blue-600 via-indigo-400 to-purple-300"
      >
        HÜRKUŞ
      </a>
      <div
        class="relative z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end"
      >
        <nav class="hidden md:block">
          <div class="flex items-baseline space-x-10">
            <a href="/" class="item--link">
              <span class="block">ANA SAYFA</span>
            </a>
            <a href="#_" class="item--link">
              <span class="block">NEDEN HURKUS?</span>
            </a>
            <a href="#_" class="item--link">
              <span class="block">HAKKIMIZDA</span>
            </a>

            <span v-if="user == null" class="inline-flex rounded-md shadow-sm">
              <a href="/login" class="btn btn--primary"> GİRİŞ YAP </a>
            </span>

            <div class="text-center" v-if="user != null && user.Role == 0">
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon color="primary" dark v-bind="attrs" v-on="on">
                    <v-list-item-avatar class="ml-2" size="50">
                      <img
                        src="https://www.w3schools.com/howto/img_avatar.png"
                        alt="John"
                      />
                    </v-list-item-avatar>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item>
                    <v-btn text @click="goProfile"> Profilim </v-btn>
                  </v-list-item>
                  <v-list-item>
                    <v-btn text @click="goTodo(user.MentorID)">
                      Görevler / Görüşmelerim
                    </v-btn>
                  </v-list-item>
                  <v-list-item>
                    <v-btn text @click="goMyApplicants(user.MentorID, user.UserID)">
                      Başvuruları Görüntüle
                    </v-btn>
                  </v-list-item>
                  <v-list-item>
                    <addAdvertComp :userId="user.UserID" />
                  </v-list-item>
                  <v-list-item>
                    <v-btn text @click="myAdvert"> İlanım </v-btn>
                  </v-list-item>
                  <v-list-item>
                    <v-btn text v-on:click="logout"> Çıkış </v-btn>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>

            <div class="text-center" v-if="user != null && user.Role == 1">
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon color="primary" dark v-bind="attrs" v-on="on">
                    <v-list-item-avatar class="ml-2" size="50">
                      <img
                        src="https://www.w3schools.com/howto/img_avatar.png"
                        alt="John"
                      />
                    </v-list-item-avatar>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item>
                    <v-btn text @click="goProfile"> Profilim </v-btn>
                  </v-list-item>
                  <v-list-item>
                    <v-btn text @click="goTodoMentee(user.MentorID, user.MenteeID)">
                      Görevler
                    </v-btn>
                  </v-list-item>
                  <v-list-item>
                    <v-btn text @click="goMetingsMentee">
                      Görüşmelerim
                    </v-btn>
                  </v-list-item>
                  <v-list-item>
                    <v-btn text @click="goMyApplicants(user.MentorID, user.UserID)">
                      Başvurularım
                    </v-btn>
                  </v-list-item>
                  <v-list-item>
                    <v-btn text v-on:click="logout"> Çıkış </v-btn>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <hr />
  </header>
</template>

<script>
export default {
  data() {
    return {
      user: '',
      advertId: '',
    }
  },
  mounted() {
    if (process.client) {
      this.user = JSON.parse(localStorage.getItem('key'))
      this.advertId = localStorage.getItem('advertId')
      console.log(this.user)
    }
  },
  methods: {
    goProfile() {
      if(this.user.Role == 0){
      this.$router.push({
        name: 'mentorProfile',
      })
      }else if(this.user.Role == 1){
      this.$router.push({
        name: 'menteeProfile',
      })

      }
    },
    goTodo(id) {
      this.$router.push({
        name: 'mentorsMentees',
        params: { mentorid: id },
      })
    },
    goMyApplicants(id, usId) {
      if(this.user.Role == 0){
      this.$router.push({
        name: 'myApplicants',
        params: { mentorid: id, userId: usId },
      })
      }else if(this.user.Role == 1){
        console.log("girdi", usId)
      this.$router.push({
        name: 'myApplications',
        params: { userId: usId }
      })
      }
    },
    myAdvert() {
      this.advertId = localStorage.getItem('advertId')
      this.$router.push({
        name: 'advertDetail',
        params: { mentorid: this.advertId },
      })
    },
    goTodoMentee(mentorId, menteeId){
      this.$router.push({
        name: 'todoList',
        params: { mentorId: mentorId, menteeId: menteeId },
      })
    },
    goMetingsMentee(){
      this.$router.push({
        name: 'meetings'
      })
    },
    logout() {
      window.localStorage.clear()
      this.$router.push(
        {
          path: '/login',
          force: true,
        },
        () => {
          window.location.reload(true)
        }
      )
    },
  },
}
</script>

<style lang="postcss" scoped>
.toolbar {
  @apply relative w-full px-8 text-gray-700 bg-white;
}
.toolbar .toolbar--container {
  @apply container flex flex-col flex-wrap items-center justify-between py-5 mx-auto max-w-7xl;
  @screen md {
    @apply flex-row;
  }
}
.toolbar .text--logo {
  @apply relative z-10 flex items-center w-auto text-5xl font-extrabold leading-none select-none;
}
nav .item--link {
  @apply relative font-medium leading-6 mx-2 text-gray-600 transition duration-150 ease-out;
}
nav .item--link:hover {
  @apply text-gray-900;
}
</style>
