import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [

  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/marca',
    name: 'Marca',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MarcaView.vue')
  },
  {
    path: '/formulario',
    name: 'formulario-formulario',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FormularioView.vue')
  },
  {
    path: '/modelo',
    name: 'Modelo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ModeloView.vue')
  },
  {
    path: '/veiculo',
    name: 'Veiculo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/VeiculoView.vue')
  },
  {
    path: '/condutor',
    name: 'Condutor',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CondutorView.vue')
  },
  {
    path: '/movimentacao',
    name: 'Movimentacao',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MovimentacaoView.vue')
  },
  {
    path: '/configuracao',
    name: 'Configuracao',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ConfiguracaoView.vue')
  },
  {
    path: '/cadastromarca',
    name: 'CadastroMarca',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CadastroMarcaView.vue'),
    children: [
      {
        path: '/cadastromarca',
        name: 'marca-formulario-editar-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/CadastroMarcaView.vue')
      },
      {
        path: '/cadastromarca',
        name: 'marca-formulario-excluir-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/CadastroMarcaView.vue')
      }
    ]
  },
  {
    path: '/cadastromodelo',
    name: 'CadastroModelo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CadastroModeloView.vue'),
    children: [
      {
        path: '/cadastromodelo',
        name: 'modelo-formulario-editar-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/CadastroModeloView.vue')
      },
      {
        path: '/cadastromodelo',
        name: 'modelo-formulario-excluir-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/CadastroModeloView.vue')
      }
    ]
  },
  {
    path: '/cadastroVeiculo',
    name: 'CadastroVeiculo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CadastroVeiculoView.vue'),
    children: [
      {
        path: '/cadastroVeiculo',
        name: 'veiculo-formulario-editar-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/CadastroVeiculoView.vue')
      },
      {
        path: '/cadastroVeiculo',
        name: 'veiculo-formulario-excluir-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/CadastroVeiculoView.vue')
      }
    ]
  },
  {
    path: '/cadastromovimentacao',
    name: 'CadastroMovimentacao',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CadastroMovimentacaoView.vue'),
    children: [
      {
        path: '/cadastromovimentacao',
        name: 'movimentacao-formulario-editar-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/CadastroMovimentacaoView.vue')
      },
      {
        path: '/cadastromovimentacao',
        name: 'movimentacao-formulario-excluir-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/CadastroMovimentacaoView.vue')
      },
      {
        path: '/cadastromovimentacao',
        name: 'movimentacao-formulario-fechar-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/CadastroMovimentacaoView.vue')
      }
    ]
  },
  {
    path: '/cadastrocondutor',
    name: 'CadastroCondutor',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CadastroCondutorView.vue'),
    children: [
      {
        path: '/cadastrocondutor',
        name: 'condutor-formulario-editar-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/CadastroCondutorView.vue')
      },
      {
        path: '/cadastrocondutor',
        name: 'condutor-formulario-excluir-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/CadastroCondutorView.vue')
      }
    ]
  },
  {
    path: '/cadastroconfiguracao',
    name: 'CadastroConfiguracao',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CadastroConfiguracaoView.vue'),
    children: [
      {
        path: '/cadastroconfiguracao',
        name: 'configuracao-formulario-editar-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/CadastroConfiguracaoView.vue')
      },
      {
        path: '/cadastroconfiguracao',
        name: 'configuracao-formulario-excluir-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/CadastroConfiguracaoView.vue')
      }
    ]
  },
  {
    path: '/relatorio',
    name: 'Relatorio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RelatorioView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
