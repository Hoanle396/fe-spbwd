import { Route, Routes } from 'react-router-dom';
import BaseLayout from './layout/BaseLayout';
import { publicRoutes } from './routers';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
    AOS.refresh();
  });
  return (
    <>
      <Routes>
        {publicRoutes.map((item, i) => (
          <Route
            key={i}
            path={item.path}
            element={
              <BaseLayout bannerShow={['/'].includes(item.path) ? true : false}>
                <>{item.element}</>{' '}
              </BaseLayout>
            }
          />
        ))}
      </Routes>
    </>
  );
}

export default App;
