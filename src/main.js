import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import VueParticles from "vue-particles";

// Remova a importação redundante do Vue

const app = createApp(App);

app.use(VueParticles);

app.mount("#app");
