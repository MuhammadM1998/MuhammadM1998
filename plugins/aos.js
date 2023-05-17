import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window !== 'undefined') {
    const aosOptions = {
      duration: 600,
      easing: 'ease-in-out-cubic',
      once: true,
    };
    nuxtApp.AOS = new AOS.init(aosOptions);
  }
});
