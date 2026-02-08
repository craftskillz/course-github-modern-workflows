import { defineAppSetup } from "@slidev/types";
import VueKonva from "vue-konva";

export default defineAppSetup(({ app }) => {
  app.use(VueKonva);
});
