import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export class RenderlizedBody extends Vue {
  render(h) {
    return <h1>HELLO WORLD!!!</h1>;
  }
}