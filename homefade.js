window.addEventListener('load', () => {
    const enterLink = document.querySelector('a.enter-link');
    
    if (enterLink) {
      enterLink.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Animate BOTH sections
        gsap.to(['.uxui-content', '.wedding-content'], {
          opacity: 0,
          scale: 0.95,
          duration: 0.7,
          ease: "power2.in",
          onComplete: () => {
            window.location.href = enterLink.href;
          }
        });
      });
    }
  });