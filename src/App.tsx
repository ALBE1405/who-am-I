import { useEffect, useState } from 'react';
import AlbertPage from './AlbertPage';
import SunilPage from './SunilPage';

function isSunilPath(pathname: string) {
  const clean = pathname.replace(/\/+$/, '') || '/';
  return clean === '/sunil' || clean.endsWith('/sunil');
}

export default function App() {
  const [sunil, setSunil] = useState(() => isSunilPath(window.location.pathname));

  useEffect(() => {
    const sync = () => setSunil(isSunilPath(window.location.pathname));
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, []);

  return sunil ? <SunilPage /> : <AlbertPage />;
}
