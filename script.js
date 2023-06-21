gsap.registerPlugin(ScrollTrigger);

const scrollTrigger = () => {
  const animation = gsap.to("#img0", {
    x: 0, // Move the element horizontally by 500 pixels
    y: -1000, // Move the element vertically by 200 pixels
    duration: 0.5, // Animation duration in seconds
    ease: "power1.out" // Easing function for a smooth flow animation
  });

  const triggerPosition = 200; // Number of pixels scrolled before triggering the animation

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;

    if (scrollPosition > triggerPosition) {
      animation.play();
    } else {
      animation.reverse();
    }
  };

  // Delay initial animation until after scroll position is set
  setTimeout(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
  }, 100);
};

scrollTrigger();



const scrollTrigger1 = () => {
  const animation = gsap.to("#img2", {
    x: 0, // Move the element horizontally by 500 pixels
    y: -400, // Move the element vertically by 200 pixels
    duration: 0.5, // Animation duration in seconds
    ease: "power1.out" // Easing function for a smooth flow animation
  });

  const triggerPosition = 200; // Number of pixels scrolled before triggering the animation

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;

    if (scrollPosition > triggerPosition) {
      animation.play();
    } else {
      animation.reverse();
    }
  };

  window.addEventListener("scroll", handleScroll);
};



scrollTrigger1();


//vimeimg

const scrollTrigger2 = () => {
  const animation = gsap.to(".img1", {
    x: 0, // Move the element horizontally by 500 pixels
    y: -450, // Move the element vertically by 200 pixels
    duration: 0.5, // Animation duration in seconds
    ease: "power1.out",
    onStart: () => {
      img1.style.display = "block"; // Change display property to block when the animation starts
    } // Easing function for a smooth flow animation
  });

  const triggerPosition = 200; // Number of pixels scrolled before triggering the animation

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;

    if (scrollPosition > triggerPosition) {
      animation.play();
    } else {
      animation.reverse();
    }
  };

  // Delay initial animation until after scroll position is set
  setTimeout(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
  }, 100);
};

scrollTrigger2();


const scrollTrigger3 = () => {
  const animation = gsap.to(".img2", {
    x: 0, // Move the element horizontally by 500 pixels
    y: 450, // Move the element vertically by 200 pixels
    duration: 0.5, // Animation duration in seconds
    ease: "power1.out", // Easing function for a smooth flow animation
    onStart: () => {
      img2.style.display = "block"; // Change display property to block when the animation starts
    }
  });

  const triggerPosition = 200; // Number of pixels scrolled before triggering the animation

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;

    if (scrollPosition > triggerPosition) {
      animation.play();
    } else {
      animation.reverse();
    }
  };

  // Delay initial animation until after scroll position is set
  setTimeout(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
  }, 100);
};

scrollTrigger3();

//background

const handleScroll = () => {
  const scrollPosition = window.pageYOffset;
  const leftside = document.querySelector(".leftside");

  if (scrollPosition > 200) {
    leftside.classList.add("blue"); // Add the "blue" class to change the background color
  } else {
    leftside.classList.remove("blue"); // Remove the "blue" class to revert back to the original background color
  }
};

window.addEventListener("scroll", handleScroll);
const handleScroll2 = () => {
  const scrollPosition = window.pageYOffset;
  const rightside = document.querySelector(".rightside");

  if (scrollPosition > 200) {
    rightside.classList.add("grey"); // Add the "grey" class to change the background color
  } else {
    rightside.classList.remove("grey"); // Remove the "grey" class to revert back to the original background color
  }
};
window.addEventListener("scroll", handleScroll2);
