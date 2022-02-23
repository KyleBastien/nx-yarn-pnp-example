import { ReactLib } from '@nx-yarn-pnp-example/react-lib';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <>
      <NxWelcome title="react-app" />
      <ReactLib />
      <div />
    </>
  );
}

export default App;
