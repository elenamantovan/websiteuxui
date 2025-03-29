document.addEventListener('DOMContentLoaded', () => {
    const tl = gsap.timeline();
    
    // 1. Initial delay (0.8s) - no visual flash
    tl.to(".white-bar", { 
      duration: 0.8 
    });
    
    // 2. Height shrink (1.8s) - ultra smooth
    tl.to(".white-bar", {
      height: "80px",
      duration: 1.8,
      ease: "expo.out"
    });
    
    // 3. Width stretch (1.2s) - slower and graceful
    tl.to(".white-bar", {
      width: "100%",
      left: "0",
      duration: 1.2,
      ease: "sine.out",
      onComplete: lockFinalPosition // Ensures no reset
    }, "-=0.4"); // Slight overlap
    
    // 4. Title appearance
    tl.to("#uxui-content", {
      opacity: 1,
      y: 150,
      duration: 1,
      ease: "power1.out"
    }, "-=0.3");
  
    // Permanent position lock
    function lockFinalPosition() {
        // Add class instead of inline styles
        document.querySelector('.white-bar').classList.add('final-state');
        
        // Optional: Force GPU layer creation
        gsap.set('.white-bar', { 
          x: 0, 
          overwrite: true 
        });
      }
  });