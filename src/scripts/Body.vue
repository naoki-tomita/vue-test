<template>
  <div>
    <div>{{ foo }}</div>
    <div>{{ count }}</div>
    <button v-on:click="handleClick">Add</button>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component
export default class Body extends Vue {
  foo: string = "foo";

  @Getter("count") count: number;
  @Action("countUp") countUp: () => void;

  handleClick() {
    this.countUp();
  }
}
</script>

<style scoped>
button {
  color: white;
  background-color: black;
}
div {
  background-color: aquamarine;
}
</style>
