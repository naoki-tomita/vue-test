<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";

@Component
export default class Title extends Vue {
  @Prop(String) title: string;
}
</script>

<style scoped>
h1 {
  font-size: 42px;
}
</style>
