// pages/_app.js
import '../styles/globals.css';
import { VariantProvider } from './context/VariantContext';

function MyApp({ Component, pageProps }) {
    return (
        <VariantProvider>
            <Component {...pageProps} />
        </VariantProvider>
    );
}

export default MyApp;
