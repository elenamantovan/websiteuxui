console.log("GSAP version:", gsap.version); 

function animateLeftSection() {
    const leftContent = document.getElementById("uxui-content");
    leftContent.classList.add("animated-text");
    leftContent.innerHTML = `
        <h1>ELENA M.</h1>
        <h2>UX/UI Designer</h2>
        <div class="scroll-prompt">SCROLL</div>
    `;
    
    gsap.fromTo("#uxui-content",
        { y: 50, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 2.5,
            delay: 1,
            ease: "expo.out"
        }
    );
}

function animatePage() {
    console.log("Starting animation...");
    
    // Initialize white panel (matches index.html's right side)
    gsap.set("#white-bar", {
        height: "100%",
        width: "50%",
        left: "50%",
        backgroundColor: "#FFFFFB"
    });

    // Collapse animation - ONLY targeting #white-bar that exists
    gsap.to("#white-bar", {
        height: "80px",
        duration: 1.5,
        ease: "power3.inOut",
        onComplete: () => console.log("Vertical collapse complete!")
        // We'll add expandWhiteBar later
    });
}

function expandWhiteBar() {
    gsap.to("#wedding-section", {
        width: "100%",  // Expands to full width
        left: 0,        // Aligns to left edge
        duration: 1,
        ease: "power2.out"
    });
}

document.addEventListener('DOMContentLoaded', animatePage);