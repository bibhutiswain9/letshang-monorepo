import { atom, selector } from 'recoil';

export const userHasViewedOnboarding = atom<boolean>({
  key: 'userHasViewedOnboarding',
  default: false,
});

export const userHasViewedOnboardingSelector = selector({
  key: 'userHasViewedOnboardingSelector',
  get: ({ get }) => {
    const alreadyEntered = get(userHasViewedOnboarding);
    return alreadyEntered;
  },
});
