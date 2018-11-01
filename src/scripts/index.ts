import Vue from "vue";

new Vue({
  el: "#app",
  data: {
    message: "Hello binded VueJS.",
    list: [],
  },
  methods: {
    async fetch() {
      const result = await fetch("https://qiita.com/api/v2/items");
      const json = await result.json();
      console.log(json);
      this.list = json;
    }
  }
});