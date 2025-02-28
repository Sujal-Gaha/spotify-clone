import { TPlan } from '@spotify-clone/libs/compositions';

export const planData: TPlan[] = [
  {
    has_free_trial: false,
    title: 'Mini',
    description: 'From $0.07',
    number_of_account_for: '1 account on mobile only',
    facilities: ['Ad-free music listening on mobile', 'Group Session', 'Download 30 songs on 1 mobile device'],
    termsAndConditions: '',
  },
  {
    has_free_trial: true,
    title: 'Individual',
    description: '$1.99/month after offer period',
    number_of_account_for: '1 account',
    facilities: ['Ad-free music listening', 'Group Session', 'Download 10k songs/device on 5 mobile devices'],
    termsAndConditions: '1 month free not available for users who have already tried Premium.',
  },
  {
    has_free_trial: true,
    title: 'Duo',
    description: '$2.49/month after offer period',
    number_of_account_for: '2 accounts',
    facilities: [
      'For couples who live together',
      'Ad-free music listening',
      'Group Session',
      'Download 10k songs/device, on 5 devices per account',
    ],
    termsAndConditions: '1 month free not available for users who have already tried Premium.',
  },
  {
    has_free_trial: true,
    title: 'Family',
    description: '$2.99/month after offer period',
    number_of_account_for: 'Up to 6 accounts',
    facilities: [
      'For family who live together',
      'Block explicit music',
      'Ad-free music listening',
      'Group Session',
      'Download 10k songs/device on 5 devices',
    ],
    termsAndConditions: '1 month free not available for users who have already tried Premium.',
  },
];
