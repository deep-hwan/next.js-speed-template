import { useEffect } from 'react';

export function useOpenWebBrowser() {
  useEffect(() => {
    const userAgent = navigator.userAgent || '';
    const isKakaoTalk = userAgent.includes('KAKAOTALK');
    const isInstagram = userAgent.includes('Instagram');
    const isFacebook = userAgent.includes('FBAN') || userAgent.includes('FBAV');
    const isLine = userAgent.includes('Line');
    const isWeChat = userAgent.includes('MicroMessenger');
    const isTelegram = userAgent.includes('Telegram');
    const isWhatsApp = userAgent.includes('WhatsApp');
    const isThreads = userAgent.includes('Threads');
    const isTwitter = userAgent.includes('Twitter') || userAgent.includes('Twitter for');
    const isDiscord = userAgent.includes('Discord');

    const isInAppBrowser =
      isKakaoTalk ||
      isInstagram ||
      isFacebook ||
      isLine ||
      isWeChat ||
      isTelegram ||
      isWhatsApp ||
      isThreads ||
      isTwitter ||
      isDiscord;

    const fullUrl = window.location.href;

    if (isInAppBrowser) {
      window.location.href = `kakaotalk://web/openExternal?url=${encodeURIComponent(fullUrl)}`;
    } else return;
  }, []);
}
