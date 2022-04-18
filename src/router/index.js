import { createRouter, createWebHashHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import FormCadastroPF from "../views/FormCadastroPF.vue";
import FormCadastroPJ from "../views/FormCadastroPJ.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/cadastro-pf",
    name: "cadastro-pf",
    component: FormCadastroPF,
  },
  {
    path: "/cadastro-pj",
    name: "cadastro-pj",
    component: FormCadastroPJ,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
