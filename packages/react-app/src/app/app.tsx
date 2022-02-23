import { ReactLib } from '@nx-yarn-pnp-example/react-lib';
import { tsLib } from '@nx-yarn-pnp-example/ts-lib';
import NxWelcome from './nx-welcome';

export function App() {
  tsLib();

  return (
    <>
      <NxWelcome title="react-app" />
      <ReactLib />
      <div />
    </>
  );
}

export default App;
