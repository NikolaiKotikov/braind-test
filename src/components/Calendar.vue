<template lang="pug">
  .calendar
    button(@drop="onDrop($event, day.code)" @dragover.prevent @dragenter.prevent  v-for="day in days" :class="['calendar__day', {'calendar__day--active': day.code === $store.state.chosenDay}]" @click="setCurrentDay(day.code)") {{day.title}}
</template>

<script>
export default {
  name: "Calendar",
  computed: {
    days() {
      return this.$store.state.days;
    },
  },
  methods: {
    setCurrentDay(code) {
      this.$store.dispatch("setDay", { type: "chosen", dayCode: code });
    },
    onDrop(evt, code) {
      this.$store.dispatch("updateSchedule", { type: "replace", item: code });
    },
  },
};
</script>

<style lang="scss">
.calendar {
  display: flex;
  flex-direction: column;
  align-self: center;
  background-color: white;
}

.calendar__day {
  padding-top: 3px;
  padding-bottom: 7px;
  border: none;
  background-color: white;
  color: currentColor;
  font-weight: 700;
  transition: background-color 0.3s;
}

.calendar__day--active {
  background-color: #f8f8f9;
}
</style>
