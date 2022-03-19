import SettingsContent from '../Wrapper.vue';
import Index from './Index.vue';
import { frontendURL } from '../../../../helper/URLHelper';

export default {
  routes: [
    {
      path: frontendURL('accounts/:accountId/profile'),
      name: 'profile_settings',
      roles: ['administrator', 'agent'],
      component: SettingsContent,
      props: {
        headerTitle: 'GENERAL_SETTINGS.TITLE',
        icon: 'edit',
        showNewButton: false,
      },
      children: [
        {
          path: 'settings',
          name: 'profile_settings_index',
          component: Index,
          roles: ['administrator', 'agent'],
        },
      ],
    },
  ],
};
