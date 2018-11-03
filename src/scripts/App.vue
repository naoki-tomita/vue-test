<template>
  <div>
    <title-el :title="title"></title-el>
    <body-el></body-el>
    <footer-el></footer-el>
  </div>
</template>

<script lang="ts">
import TitleEl from "./Title.vue";
import BodyEl from "./Body.vue";
import FooterEl from "./Footer.vue";

import { Vue, Component } from "vue-property-decorator";

@Component({
  components: {
    TitleEl,
    BodyEl,
    FooterEl,
  }
})
export default class App extends Vue {
  title: string = "App title.";
}
</script>
