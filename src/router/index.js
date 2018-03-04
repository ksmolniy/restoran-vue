import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Home from '@/components/Home'
import DishesGroupMain from '@/components/dishesGroups/DishesGroupsMain'
import DishesGroupTable from '@/components/dishesGroups/DishesGroupsTable'
import DishesGroupForm from '@/components/dishesGroups/DishesGroupsForm'

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
    {
      path: '/dishesGroups',
      component: DishesGroupMain,
      meta: {
        breadcrumb: 'Группы блюд',
        groupName: 'dishesGroups'
      },
      children: [
        {
          path: '',
          component: DishesGroupTable,
          meta: {
            groupName: 'dishesGroups'
          }
        },
        {
          path: 'create',
          component: DishesGroupForm,
          meta: {
            breadcrumb: 'Новая группа блюд',
            groupName: 'dishesGroups'
          }
        }
      ]
    },
    {
      path: '/about',
      component: About,
      meta: {
        groupName: 'home'
      }
    }
  ]
})
