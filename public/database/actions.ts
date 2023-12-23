import { ActionsData, InfoCards } from '@/interfaces/default';

export const PAGE_ACTIONS: ActionsData[] = [
  {
    key: 1,
    title: 'page_action_1_title',
    description: 'page_action_1_description',
    boldDesc: 'page_action_1_boldDesc',
    wayHelps: [
      'page_action_1_wayHelps_1',
      'page_action_1_wayHelps_2',
      'page_action_1_wayHelps_3',
      'page_action_1_wayHelps_4',
      'page_action_1_wayHelps_5',
      'page_action_1_wayHelps_6',
      'page_action_1_wayHelps_7'
    ],
    path: 'jovenes'
  },
  {
    key: 2,
    title: 'page_action_2_title',
    description: '',
    wayHelps: [
      'page_action_2_wayHelps_1',
      'page_action_2_wayHelps_2',
      'page_action_2_wayHelps_3',
      'page_action_2_wayHelps_4',
      'page_action_2_wayHelps_5',
      'page_action_2_wayHelps_6'
    ],
    path: 'familias'
  },
  {
    key: 3,
    title: 'page_action_3_title',
    description: '',
    wayHelps: [
      'page_action_3_wayHelps_1',
      'page_action_3_wayHelps_2',
      'page_action_3_wayHelps_3'
    ],
    path: 'emprende'
  }
];

export const CARD_ACTIONS: InfoCards[] = [
  {
    key: 1,
    title: 'CARD_ACTION_1_title',
    description: 'CARD_ACTION_1_description',
    path: 'jovenes'
  },
  {
    key: 2,
    title: 'CARD_ACTION_2_title',
    description: 'CARD_ACTION_2_description',
    path: 'familias'
  },
  {
    key: 3,
    title: 'CARD_ACTION_3_title',
    description: 'CARD_ACTION_3_description',
    path: 'emprende'
  }
];
