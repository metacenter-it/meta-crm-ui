import { createMemoryHistory, createRouter } from 'vue-router'

import DashboardView from '@/components/Dashboard.vue'
import Ventas from '@/components/CRM/Ventas/Agentes.vue'
import Medicos from '@/components/CRM/Medicos/Medicos.vue'
import Contactos from '@/components/CRM/Contactos/Contactos.vue'
import Abogados from '@/components/CRM/Abogados/Abogados.vue'
import Marketing from '@/components/CRM/Marketing/Marketing.vue'
  

const routes = [
  { path: '/', component: DashboardView },
  { path: '/agentes', component: Ventas },
  { path: '/medicos', component: Medicos },
  { path: '/contactos', component: Contactos },
  { path: '/abogados', component: Abogados },
  { path: '/marketing', component: Marketing },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router