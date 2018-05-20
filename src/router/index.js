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
    makeRoutes('dishesGroups', ['Группа блюд', 'Редактировать группу блюд', 'Создать группу блюд'], DishesGroupMain, DishesGroupTable, DishesGroupForm),
    makeRoutes('dishes', ['Блюда', 'Редактировать блюдо', 'Создать блюдо'], DishesMain, DishesTable, DishesForm),
    {
      path: '/about',
      component: About,
      meta: {
        groupName: 'home'
      }
    }
  ]
})
