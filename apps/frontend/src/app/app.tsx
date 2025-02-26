import { RouterProvider } from 'react-router-dom';
import { router } from './route';

export function App() {
  return <RouterProvider router={router} />;
}

export default App;
