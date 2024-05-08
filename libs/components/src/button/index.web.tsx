import { useRecoilState } from 'recoil';
import { userHasViewedOnboarding } from '@letshang/store';

export default function SolidButton() {
  const [hasUserViewdOnboardingFlow, setHasUserViewedOnboardingFlows] =
    useRecoilState(userHasViewedOnboarding);
  const onPress = () => {
    setHasUserViewedOnboardingFlows(!hasUserViewdOnboardingFlow);
  };
  return (
    <div>
      <button
        onClick={onPress}
        style={{
          backgroundColor: 'white',
          padding: 10,
          borderRadius: 5,
          margin: 10,
          borderWidth: 1,
        }}
      >
        <h3>Change user has onboarding</h3>
      </button>
      <h2 style={{ fontSize: 22 }}>
        Current State:{String(hasUserViewdOnboardingFlow)}
      </h2>
    </div>
  );
}
