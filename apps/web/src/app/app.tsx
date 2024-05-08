import NxWelcome from './nx-welcome';
import HOC from 'libs/root/src/initializer';

export function App() {
  return (
    <HOC>
      <View style={styles.container}>
        <SolidButton />
      </View>
    </HOC>
  );
}

export default App;
