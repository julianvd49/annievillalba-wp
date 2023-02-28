import '@/styles/globals.css'
import { StateProvider } from '../utils/state';

export default function App({ Component, pageProps }) {
  return (
    <StateProvider>
      <Component {...pageProps} />
    </StateProvider>
  ); 
}
