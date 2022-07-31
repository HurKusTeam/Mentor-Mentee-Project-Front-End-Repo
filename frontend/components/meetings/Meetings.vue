<template>
  <v-container class="pt-2 pb-0">
    <v-card class="mx-auto" max-width="1000" tile>
      <v-timeline class="pa-8">
        <v-timeline-item
          fill-dot
          class="white--text mb-12"
          color="orange"
          large
        >
          <template v-slot:icon>
            <span>JL</span>
          </template>
          <v-text-field
            v-model="input"
            hide-details
            flat
            label="Leave a comment..."
            solo
            @keydown.enter="comment"
          >
            <template v-slot:append>
              <v-btn class="mx-0" depressed @click="comment"> Post </v-btn>
            </template>
          </v-text-field>
        </v-timeline-item>
        <v-timeline-item
          v-for="(year, i) in years"
          :key="i"
          :color="year.color"
          small
        >
          <template v-slot:opposite>
            <span
              :class="`headline font-weight-bold ${year.color}--text`"
              v-text="year.year"
            ></span>
          </template>
          <div class="py-4">
            <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">
              Lorem ipsum
            </h2>
            <div class="pb-2 ">
                <v-icon size="20"> mdi-calendar-range </v-icon>
                18.02.2020/18.02.2022
            </div>
            <div class="pb-2">
                <v-icon size="20"> mdi-link </v-icon>
                <a href="https://www.google.com/">Bağlantı</a>
            </div>
            <div>
              {{ year.text }}
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    years: [
      {
        color: 'cyan',
        year: '1960',
        text: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Communescaevola imperdiet nec ut, sed euismod convenire principes at. Estet nobis iisque percipit, an vim zril disputando voluptatibus, vixan salutandi sententiae.',
      },
      {
        color: 'green',
        year: '1970',
        text: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Communescaevola imperdiet nec ut, sed euismod convenire principes at. Estet nobis iisque percipit, an vim zril disputando voluptatibus, vixan salutandi sententiae.',
      },
      {
        color: 'pink',
        year: '1980',
        text: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Communescaevola imperdiet nec ut, sed euismod convenire principes at. Estet nobis iisque percipit, an vim zril disputando voluptatibus, vixan salutandi sententiae.',
      },
      {
        color: 'amber',
        year: '1990',
        text: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Communescaevola imperdiet nec ut, sed euismod convenire principes at. Estet nobis iisque percipit, an vim zril disputando voluptatibus, vixan salutandi sententiae.',
      },
      {
        color: 'orange',
        year: '2000',
        text: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Communescaevola imperdiet nec ut, sed euismod convenire principes at. Estet nobis iisque percipit, an vim zril disputando voluptatibus, vixan salutandi sententiae.',
      },
    ],
    input: null,
  }),
  computed: {
    timeline() {
      return this.events.slice().reverse()
    },
  },

  methods: {
    comment() {
      this.years.push({
        text: this.input,
        year: '2022',
        color: 'blue',
      })

      this.input = null
    },
  },
}
</script>

<style>
</style>