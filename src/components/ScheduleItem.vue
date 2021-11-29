<template lang="pug">
  div(:class="[ 'schedule-item', `schedule-item--${mode}`, { 'schedule-item--outdated': isOutdated } ]")
    VueTimepicker(class="schedule-item__control schedule-item__control--time" placeholder=" " input-width="80px" hide-clear-button auto-scroll v-model="timeModel" ref="timePicker")
    input(type="text" class="schedule-item__control schedule-item__control--text" v-model="textModel" @keydown.enter="addItem")
    button(class="schedule-item__control schedule-item__control--button" :disabled="isInvalid" @click="handleClick")
      SvgCross(class="schedule__icon")
</template>

<script>
import { generateUuid } from "../utils/jenerate";
import { getFormattedTime } from "../utils/get";
import VueTimepicker from "vue2-timepicker/src/vue-timepicker.vue";
import SvgCross from "./svg/SvgCross";

export default {
  components: {
    SvgCross,
    VueTimepicker,
  },
  name: "ScheduleItem",
  data() {
    return {
      item: { time: "", text: "", uuid: this.uuid },
    };
  },
  props: {
    mode: { type: String, default: "edit" },
    time: { type: String, default: "" },
    text: { type: String, default: "" },
    uuid: { type: String, default: "" },
  },
  methods: {
    handleClick() {
      this.mode === "edit" ? this.removeItem() : this.addItem();
    },
    addItem() {
      if (this.isInvalid) return;
      this.item.uuid = generateUuid();
      this.$store.dispatch("updateSchedule", {
        type: "add",
        item: Object.assign({}, this.item),
      });
      this.item.time = "";
      this.item.text = "";
      this.$refs.timePicker.clearTime();
    },
    removeItem() {
      this.$store.dispatch("updateSchedule", {
        type: "remove",
        item: this.item,
      });
    },
    updateItem() {
      if (this.mode === "edit") {
        this.$store.dispatch("updateSchedule", {
          item: { time: this.timeModel, text: this.textModel, uuid: this.uuid },
          type: "update",
        });
      }
    },
    findDayIndexByCode(code) {
      return this.$store.state.days.findIndex((day) => day.code === code);
    },
  },
  computed: {
    timeModel: {
      get: function () {
        return this.item.time || this.time;
      },
      set: function (newValue) {
        this.item.time = newValue;
      },
    },
    textModel: {
      get: function () {
        return this.item.text || this.text;
      },
      set: function (newValue) {
        this.item.text = newValue;
      },
    },
    chosenDayIndex() {
      return this.findDayIndexByCode(this.$store.state.chosenDay);
    },
    currentDayIndex() {
      return this.findDayIndexByCode(this.$store.state.currentDay);
    },
    isInvalid() {
      if (this.mode === "edit") return false;
      return !this.item.time.trim() || !this.item.text.trim();
    },
    isOutdated() {
      if (this.mode === "add") return false;
      if (this.chosenDayIndex < this.currentDayIndex) {
        return true;
      } else if (this.chosenDayIndex === this.currentDayIndex) {
        return getFormattedTime(this.timeModel) < getFormattedTime();
      } else {
        return false;
      }
    },
  },
  watch: {
    "item.time": function (nv, ov) {
      if (ov && ov !== nv) {
        this.updateItem();
      }
    },
    "item.text": function (nv, ov) {
      if (ov && ov !== nv) {
        this.updateItem();
      }
    },
  },
};
</script>

<style lang="scss">
.schedule-item {
  display: flex;
  justify-content: space-between;
  gap: 10px;

  .schedule-item__control--time {
    input.display-time {
      border: none;
    }
  }
}

.schedule-item__control {
  height: 40px;
  margin: 0;
  border: 1px solid #dedee1;
  border-radius: 4px;
  color: currentColor;

  input {
    color: currentColor;
  }
}

.schedule-item__control--text {
  flex-grow: 1;
}

.schedule-item__control--button {
  display: grid;
  width: 40px;
  border: none;
  place-items: center;

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
}

/*
Variations
*/
.schedule-item--outdated {
  color: red;
}

.schedule-item--add {
  .schedule-item__control--button {
    background-color: #4ba9ff;
  }
}

.schedule-item--edit {
  .schedule-item__control {
    border: none;

    &:hover {
      .schedule__icon {
        path {
          fill: tomato;
        }
      }
    }
  }

  .schedule__icon {
    transform: rotate(45deg);

    path {
      transition: fill 0.3s;
      fill: #adb3b9;
    }
  }
}
</style>
