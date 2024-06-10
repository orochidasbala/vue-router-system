import { createApp } from "vue";
import "@/css/style.css";

// user role
import App from "./App.vue";
import router from "./router";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

// quill editor
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

const app = createApp(App);
app.component("QuillEditor", QuillEditor);
app.use(router).mount("#app");
