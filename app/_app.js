
import { useRouter } from 'next/router';
import MainLayout from './layouts/layout';

function App({ Component, pageProps }) {
  const router = useRouter();


  // Render different layouts based on the route if desired
  if (router.pathname === '/app/pages/index') {
    return (
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    );
  }

  // Render other pages with default layout
  return <Component {...pageProps} />;
}

export default App;