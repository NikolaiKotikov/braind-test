<template lang="pug">
  .schedule
    button(class="schedule__control-copy" draggable )
      SvgSnowflake
    .schedule__content
      transition-group(v-if="$store.getters.currentSchedule.length" class="schedule__list" tag="ul" name="list")
        li(class="schedule__list-item" v-for="item in $store.getters.currentSchedule" :key="item.uuid + $store.state.chosenDay")
          ScheduleItem(:mode="'edit'" v-bind="item")
      p(class="schedule__message" v-else) Тут пока ничего нет!
    ScheduleItem(:mode="'add'" class="schedule__item-add")

</template>

<script>
import SvgSnowflake from "./svg/SvgSnowflake";
import ScheduleItem from "./ScheduleItem";

export default {
  name: "Schedule",
  components: { ScheduleItem, SvgSnowflake },
};
</script>

<style lang="scss">
.schedule {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 250px;
  padding: 87px 30px 30px;
  border: 1px solid #dedee1;
  border-radius: 8px;
  background-color: white;
}

.schedule__item-add {
  margin-top: auto;
}

.schedule__content {
  margin-bottom: 20px;
}

.schedule__control-copy {
  position: absolute;
  top: 23px;
  right: 37px;
  border: none;
}

.schedule__message {
  text-align: center;
}

.schedule__list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.active {
  opacity: 0;
}

/*
Animations
*/
.schedule__list-item {
  transition: all 400ms;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-leave-active {
  position: absolute;
}
</style>
