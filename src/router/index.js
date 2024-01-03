import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactView from "../views/ContactView.vue";
import AboutView from "../views/AboutView.vue";
import B1B2View from "../views/visas/B1B2View.vue";
import F1M1View from "../views/visas/F1M1View.vue";
import WorkView from "../views/visas/WorkView.vue";
import EB4View from "../views/visas/EB4View.vue";
import PetitionsView from "../views/visas/PetitionsView.vue";
import AntecipationView from "../views/visas/AntecipationView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "sobre",
    component: AboutView,
  },
  {
    path: "/contact",
    name: "Contato",
    component: ContactView,
  },
  {
    path: "/visas/b1&b2",
    name: "b1&b2",
    component: B1B2View,
    meta: {
      hideInNavbar: true,
    },
  },
  {
    path: "/visas/f1&m1",
    name: "f1&m1",
    component: F1M1View,
    meta: {
      hideInNavbar: true,
    },
  },
  {
    path: "/visas/eb4",
    name: "eb4",
    component: EB4View,
    meta: {
      hideInNavbar: true,
    },
  },
  {
    path: "/visas/work",
    name: "work",
    component: WorkView,
    meta: {
      hideInNavbar: true,
    },
  },
  {
    path: "/visas/petitions",
    name: "petitions",
    component: PetitionsView,
    meta: {
      hideInNavbar: true,
    },
  },
  {
    path: "/visas/antecipation",
    name: "antecipation",
    component: AntecipationView,
    meta: {
      hideInNavbar: true,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
