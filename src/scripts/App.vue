<template>
  <div>
    <title-el :title="title"></title-el>
    <body-el></body-el>
    <renderlized-body></renderlized-body>
    <footer-el></footer-el>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import TitleEl from "./Title.vue";
import BodyEl from "./Body.vue";
import FooterEl from "./Footer.vue";
import { RenderlizedBody } from "./RenderlizedBody";

@Component({
  components: {
    TitleEl,
    BodyEl,
    FooterEl,
    RenderlizedBody,
  }
})
export default class App extends Vue {
  title: string = "App title.";
}
</script>
