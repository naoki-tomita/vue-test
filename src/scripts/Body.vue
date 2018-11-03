<template>
  <div>
    <div>{{ foo }}</div>
    <div>{{ bar }}</div>
    <button v-on:click="handleClick">Add</button>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";

@Component
export default class Body extends Vue {
  foo: string = "foo";
  bar: number = 0;
  handleClick() {
    this.bar++;
  }
}
</script>
