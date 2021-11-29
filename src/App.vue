<template lang="pug">
  div(id="app" class="container")
    Schedule
    Calendar
</template>

<script>
import Schedule from "./components/Schedule";
import Calendar from "./components/Calendar";

export default {
  name: "App",
  components: {
    Calendar,
    Schedule,
  },
  mounted() {
    this.$store.dispatch("setDay", {
      type: "current",
      dayCode: this.getCurrentDayCode(),
    });
    this.$store.dispatch("setDay", {
      type: "chosen",
      dayCode: this.getCurrentDayCode(),
    });
    const scheduleFromStorage = localStorage.getItem("schedule");
    if (scheduleFromStorage) {
      this.$store.state.schedule = JSON.parse(scheduleFromStorage);
    }
  },
  methods: {
    getLocalDay() {
      let day = new Date().getDay();

      if (day === 0) {
        day = 7;
      }

      return day - 1;
    },
    getCurrentDayCode() {
      return this.$store.state.days[this.getLocalDay()].code;
    },
  },
};
</script>

<style lang="scss">
@import "styles/global/global";

.container {
  display: grid;
  grid-template-columns: 400px 120px;
  column-gap: 60px;
  padding: 110px;
}
</style>
