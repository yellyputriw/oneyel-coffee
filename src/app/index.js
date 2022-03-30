import 'regenerator-runtime';
import AOS from 'aos';
import 'aos/dist/aos.css';

import '@styles/style.css';
import '@views/main';
import registerSW from '@utils/RegisterSW';

if (process.env.NODE_ENV === 'production') {
  window.addEventListener('DOMContentLoaded', async () => {
    await registerSW();
  });
}

AOS.init();
