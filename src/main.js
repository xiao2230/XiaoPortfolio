import { createApp } from "vue";
import { createPinia } from "pinia";

// import font awesome icon component
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import the fontawesome core
import { library } from "@fortawesome/fontawesome-svg-core";

// import specific icons
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownLeftAndUpRightToCenter } from "@fortawesome/free-solid-svg-icons";
import { faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

// add icons to the library
library.add(faHouse, faGithub, faDownLeftAndUpRightToCenter, faUpRightAndDownLeftFromCenter, faCircleHalfStroke, faMoon, faSun, faLinkedinIn, faFacebookF);

import App from "@/App.vue";
import router from "@/router";

import "@/assets/scss/main.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.directive("save", {
    mounted(el) {
        el.setSessionStorage = (e) => sessionStorage.setItem(el.name, e.target.value);

        el.addEventListener("input", el.setSessionStorage);
        el.addEventListener("change", el.setSessionStorage);
    },
    updated(el, binding) {
        if (binding.value === "") sessionStorage.removeItem(el.name);
    },
    unmounted(el) {
        el.removeEventListener("input", el.setSessionStorage);
        el.removeEventListener("change", el.setSessionStorage);
    },
});

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
