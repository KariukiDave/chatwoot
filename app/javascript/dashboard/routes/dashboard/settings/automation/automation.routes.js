import SettingsContent from '../Wrapper.vue';
import Automation from './Index.vue';
import { frontendURL } from '../../../../helper/URLHelper';

export default {
  routes: [
    {
      path: frontendURL('accounts/:accountId/settings/automation'),
      component: SettingsContent,
      props: {
        headerTitle: 'AUTOMATION.HEADER',
        icon: 'automation',
        showNewButton: false,
      },
      children: [
        {
          path: '',
          name: 'automation_wrapper',
          redirect: 'list',
        },
        {
          path: 'list',
          name: 'automation_list',
          component: Automation,
          roles: ['administrator'],
        },
      ],
    },
  ],
};
