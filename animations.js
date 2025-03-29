document.addEventListener('DOMContentLoaded', () => {
    // First, hide the wedding section completely
    gsap.set("#wedding-section", { display: "none" });
    
    // Then proceed with animation
    const tl = gsap.timeline();
    
    tl
      .to(".white-bar", {
        height: "80px",
        duration: 0.8,
        ease: "power2.out"
      })
      .to(".white-bar", {
        width: "100%",
        left: "0",
        duration: 0.5,
        ease: "power2.inOut"
      }, "-=0.3")
      .to("#uxui-content", {
        opacity: 1,
        y: 150,
        duration: 0.6
      }, "-=0.2");
  });