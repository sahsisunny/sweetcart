import type { AppProps } from 'next/app';
import React from 'react';
import '@/styles/global.css';
import SplashScreen from '@/components/SplashScreen';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    const [showSplashScreen, setShowSplashScreen] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setShowSplashScreen(false);
        }, 3000);
    }, []);

    return (
        <>
            {showSplashScreen && <SplashScreen />}
            {!showSplashScreen && <Component {...pageProps} />}
        </>
    );
}
