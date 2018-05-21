import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Home from '@/components/Home'
import DishesGroupMain from '@/components/dishesGroups/DishesGroupsMain'
import DishesGroupTable from '@/components/dishesGroups/DishesGroupsTable'
import DishesGroupForm from '@/components/dishesGroups/DishesGroupsForm'
import DishesMain from '@/components/dishes/DishesMain'
import DishesTable from '@/components/dishes/DishesTable'
import DishesForm from '@/components/dishes/DishesForm'
import ClientsMain from '@/components/clients/ClientsMain'
import ClientsTable from '@/components/clients/ClientsTable'
import ClientsForm from '@/components/clients/ClientsForm'
import TablesMain from '@/components/tables/TablesMain'
import TablesTable from '@/components/tables/TablesTable'
import TablesForm from '@/components/tables/TablesForm'
import PricesMain from '@/components/prices/PricesMain'
import PricesTable from '@/components/prices/PricesTable'
import PricesForm from '@/components/prices/PricesForm'
import store from '../store'

import { makeRoutes } from './automatizations'

import ROUTES from './routes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        groupName: 'home'
      }
    },
    {
      path: '/home',
      component: Home,
      meta: {
        groupName: 'home'
      }
    },
    makeRoutes('dishesGroups', ['Группа блюд', 'Редактировать группу блюд', 'Завести группу блюд'], DishesGroupMain, DishesGroupTable, DishesGroupForm),
    makeRoutes('dishes', ['Блюда', 'Редактировать блюдо', 'Завести блюдо'], DishesMain, DishesTable, DishesForm),
    makeRoutes('clients', ['Клиенты', 'Редактировать клиента', 'Завести клиента'], ClientsMain, ClientsTable, ClientsForm),
    makeRoutes('tables', ['Столики', 'Редактировать столик', 'Завести Столик'], TablesMain, TablesTable, TablesForm),
    makeRoutes('prices', ['Ценики', 'Редактировать ценик', 'Завести Ценик'], PricesMain, PricesTable, PricesForm),
    {
      path: '/about',
      component: About,
      meta: {
        groupName: 'home'
      }
    }
  ]
})
