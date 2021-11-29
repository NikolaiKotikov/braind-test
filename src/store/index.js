import Vue from "vue";
import Vuex from "vuex";
import { getFormattedTime } from "../utils/get";

function getCurrentRecords(state) {
  return state.schedule[state.chosenDay] || [];
}

function sortItems(state) {
  getCurrentRecords(state).sort(
    (a, b) => getFormattedTime(a.time) - getFormattedTime(b.time)
  );
}

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentDay: "",
    chosenDay: "",
    days: [
      { title: "пн", code: "mo" },
      { title: "вт", code: "tu" },
      { title: "ср", code: "we" },
      { title: "чт", code: "th" },
      { title: "пт", code: "fr" },
      { title: "сб", code: "sa" },
      { title: "вс", code: "su" },
    ],
    schedule: {
      mo: [],
      tu: [],
      we: [],
      th: [],
      fr: [],
      sa: [],
      su: [],
    },
  },
  mutations: {
    SET_CHOSEN_DAY(state, dayCode) {
      state.chosenDay = dayCode;
    },
    SET_CURRENT_DAY(state, dayCode) {
      state.currentDay = dayCode;
    },
    ADD_ITEM(state, item) {
      getCurrentRecords(state).push(item);
      sortItems(state);
    },
    REMOVE_ITEM(state, item) {
      state.schedule[state.chosenDay] = getCurrentRecords(state).filter(
        (record) => record.uuid !== item.uuid
      );
    },
    UPDATE_ITEM(state, item) {
      const currentRecordIndex = getCurrentRecords(state).findIndex(
        (record) => record.uuid === item.uuid
      );
      if (currentRecordIndex >= 0) {
        getCurrentRecords(state)[currentRecordIndex] = item;
        sortItems(state);
      }
    },
    REPLACE_ITEM(state, item) {
      if (state.chosenDay === item || !getCurrentRecords(state).length) return;
      state.schedule[item] = JSON.parse(
        JSON.stringify(getCurrentRecords(state))
      );
      alert(
        `Данные из ${
          state.days.find((day) => day.code === state.chosenDay).title
        } скопированы в ${state.days.find((day) => day.code === item).title}`
      );
    },
  },
  actions: {
    setDay({ commit }, { dayCode, type }) {
      switch (type) {
        case "chosen": {
          commit("SET_CHOSEN_DAY", dayCode);
          break;
        }
        case "current": {
          commit("SET_CURRENT_DAY", dayCode);
        }
      }
    },
    updateSchedule({ commit, state }, { item, type }) {
      switch (type) {
        case "add": {
          commit("ADD_ITEM", item);
          break;
        }
        case "remove": {
          commit("REMOVE_ITEM", item);
          break;
        }
        case "update": {
          commit("UPDATE_ITEM", item);
          break;
        }
        case "replace": {
          commit("REPLACE_ITEM", item);
          break;
        }
      }
      localStorage.setItem("schedule", JSON.stringify(state.schedule));
    },
  },
  getters: {
    currentSchedule: (state) => {
      return getCurrentRecords(state);
    },
  },
});
