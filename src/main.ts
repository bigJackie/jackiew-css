import { createApp } from "vue";
// import { JApp, JAppBar, JIcon } from "jackiew-ui-v3";
import App from "./App.vue";
import aa from "./aa.vue";
import "../atom.css";

const app = createApp(App);
app.use({
  install(app) {},
});
app.component("aa", aa);

// app.use(JApp);
// app.use(JAppBar);
// app.use(JIcon);
app.mount("#app");
