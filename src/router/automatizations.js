import { capitalizeFirstLetter } from '../store/automatizations'
import store from '../store/index'

export function makeRoutes(name, [mainTitle, createTitle, editTitle], mainComponent, tableComponent, formComponent) {
  return {
    path: `/${name}`,
    component: mainComponent,
    meta: {
      breadcrumb: mainTitle,
      groupName: name
    },
    children: [
      {
        path: '',
        component: tableComponent,
        meta: {
          groupName: name
        },
      },
      {
        path: 'create',
        component: formComponent,
        meta: {
          breadcrumb: createTitle,
          groupName: name
        }
      },
      {
        path: 'edit/:id',
        component: formComponent,
        meta: {
          breadcrumb: editTitle,
          groupName: name
        },
      }
    ]
  };
}