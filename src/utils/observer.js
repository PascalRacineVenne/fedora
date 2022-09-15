const faders = document.querySelectorAll('.fade-in');
console.log(faders);
console.log('HELLO');

const appearOptions = {
  threshold: 1,
  rootMargin: '0px 0px -100px 0px',
};

let callback = (entries, appearOnScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  });
};

const appearOnScroll = new IntersectionObserver(callback, appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});
