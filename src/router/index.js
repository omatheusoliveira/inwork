import { createRouter, createWebHashHistory } from "vue-router";
import LoginView from "../views/Login/LoginView.vue";
import FormCadastroPF from "../views/Cadastro/FormCadastroPF.vue";
import FormCadastroPJ from "../views/Cadastro/FormCadastroPJ.vue";
import HomePF from "../views/Home/HomePF.vue"
import EditarVagas from "../views/Vagas/EditarVagas.vue"
import CriarVaga from "../views/Vagas/CriarVaga.vue"
import ProfilePJ from "../views/Profile/ProfilePJ.vue"

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
  {
    path: "/home-pf",
    name: "home-pf",
    component: HomePF,
  },
  {
    path: "/criar-vaga",
    name: "criar-vaga",
    component: CriarVaga,
  },
  {
    path: "/editar-vaga",
    name: "editar-vaga",
    component: EditarVagas,
  },
  {
    path: "/my-profile-pj",
    name: "my-profile-pj",
    component: ProfilePJ,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
