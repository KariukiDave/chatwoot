import SettingsContent from '../Wrapper.vue';
import Index from './Index.vue';
import { frontendURL } from '../../../../helper/URLHelper';

export default {
  routes: [
    {
      path: frontendURL('accounts/:accountId/settings/labels'),
      component: SettingsContent,
      props: {
        headerTitle: 'LABEL_MGMT.HEADER',
        icon: 'tag',
        showNewButton: false,
      },
      children: [
        {
          path: '',
          name: 'labels_wrapper',
          roles: ['administrator'],
          redirect: 'list',
        },
        {
          path: 'list',
          name: 'labels_list',
          roles: ['administrator'],
          component: Index,
        },
      ],
    },
  ],
};
