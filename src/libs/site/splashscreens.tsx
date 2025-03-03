import { colors } from '@/libs/themes';
import Head from 'next/head';

export default function SplashScreens() {
  return (
    <Head>
      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='msapplication-TileColor' content={colors.keyColor} />

      <link
        href='/assets/splashscreens/iphone5_splash.png'
        media='(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)'
        rel='apple-touch-startup-image'
      />
      <link
        href='/assets/splashscreens/iphone6_splash.png'
        media='(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)'
        rel='apple-touch-startup-image'
      />
      <link
        href='/assets/splashscreens/iphoneplus_splash.png'
        media='(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)'
        rel='apple-touch-startup-image'
      />
      <link
        href='/assets/splashscreens/iphonex_splash.png'
        media='(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)'
        rel='apple-touch-startup-image'
      />
      <link
        href='/assets/splashscreens/iphonexr_splash.png'
        media='(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)'
        rel='apple-touch-startup-image'
      />
      <link
        href='/assets/splashscreens/iphonexsmax_splash.png'
        media='(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)'
        rel='apple-touch-startup-image'
      />
      <link
        href='/assets/splashscreens/ipad_splash.png'
        media='(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)'
        rel='apple-touch-startup-image'
      />
      <link
        href='/assets/splashscreens/ipadpro1_splash.png'
        media='(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)'
        rel='apple-touch-startup-image'
      />
      <link
        href='/assets/splashscreens/ipadpro3_splash.png'
        media='(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)'
        rel='apple-touch-startup-image'
      />
      <link
        href='/assets/splashscreens/ipadpro2_splash.png'
        media='(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)'
        rel='apple-touch-startup-image'
      />
    </Head>
  );
}
