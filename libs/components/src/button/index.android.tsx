import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRecoilState } from 'recoil';
import { userHasViewedOnboarding } from '@letshang/store';

export default function SolidButton() {
  const [hasUserViewdOnboardingFlow, setHasUserViewedOnboardingFlows] =
    useRecoilState(userHasViewedOnboarding);
  const onPress = () => {
    setHasUserViewedOnboardingFlows(!hasUserViewdOnboardingFlow);
  };
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text>Change user has onboarding</Text>
      </TouchableOpacity>
      <Text style={styles.text}>
        Current State:{String(hasUserViewdOnboardingFlow)}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    borderWidth: 1,
  },
  text: {
    fontSize: 22,
  },
});
