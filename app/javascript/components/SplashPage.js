import React, { useEffect, useState } from 'react';
import NavigationOverlay from './NavigationOverlay';

const SplashPage = props => {
  const [overlayOpen, setOverlayOpen] = useState(false);

  const toggleOverlay = () => {
    setOverlayOpen(!overlayOpen);
  };

  useEffect(() => {
    const numPetals = 100;
    const whitePetalIndex = Math.floor(Math.random() * numPetals);
    const cherryBlossoms = document.getElementById('cherry-blossoms');
    for (let i = 0; i < numPetals; i++) {
      setTimeout(() => {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        if (i === whitePetalIndex) {
          petal.classList.remove('petal');
          petal.classList.add('petal-white');
          petal.addEventListener('click', () => {
            window.location.href = '/gateless-gate';
          });
        }
        cherryBlossoms.appendChild(petal);
        
        const startLeft = Math.random() * window.innerWidth;
        const startTop = -20;
        const endTop = window.innerHeight;

        petal.style.left = startLeft + 'px';
        petal.style.top = startTop + 'px';

        const animatePetal = () => {
          petal.style.top = parseInt(petal.style.top) + 1 + 'px';
          petal.style.left = Math.round(parseInt(petal.style.left) + (Math.random() * 2 - 1.5)) + 'px';

          if (Math.random() < 0.20) { // 20% chance to change rotation on each frame
            const rotation = (Math.random() * 20 - 10); // Random rotation between -10 and 10 degrees
            petal.style.transform = `rotate(${rotation}deg)`;
          }

          if (parseInt(petal.style.top) < endTop && parseInt(petal.style.left) >= -5) {
            requestAnimationFrame(animatePetal);
          } else {
            cherryBlossoms.removeChild(petal);
          }
        };

        requestAnimationFrame(animatePetal);
      }, Math.random() * 5000);
    }
  }, []);

  return (
    <div>
      <div id="cherry-blossoms"></div>
      <p>
        Welcome. Have a look around. Enjoy the cherry blossoms.
      </p>
      <NavigationOverlay />
    </div>
  )
};

export default SplashPage;