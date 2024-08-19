class Accordion {
  constructor(accordionDOM, filterDOM) {
    this.filterContainer = filterDOM;
    this.side = document.querySelector('details > aside');
    this.accordion = accordionDOM;
    this.accordion.addEventListener('click', (event) => {
      if (event.target.tagName !== 'LABEL' && event.target.tagName !== 'INPUT') {
        this.onClick(event);
      }
    });

    this.margin = '6rem';

    this.animation = null;
    this.duration = 300;

    this.disabled = false;
  }

  onClick(event) {
    event.preventDefault();

    if (!this.disabled) {
      const accordionIsOpen = this.accordion.open;
      if (accordionIsOpen) {
        window.requestAnimationFrame(() => this.closeAccordion());
      } else {
        window.requestAnimationFrame(() => this.openAccordion());
      }

      this.disabled = true;
      setTimeout(() => {
        this.disabled = false;
      }, this.duration);
    }
  }

  closeAccordion() {
    // Start a WAAPI animation
    this.animation = this.side.animate({
      opacity: [1, 0],
    }, {
      duration: this.duration,
      easing: 'ease',
    });
    this.animation = this.filterContainer.animate({
      marginBottom: [this.margin, 0],
    }, {
      delay: this.duration,
      duration: this.duration,
      easing: 'ease',
    });

    this.side.style.opacity = 0;
    setTimeout(() => {
      this.accordion.open = false;
      this.filterContainer.style.marginBottom = null;
    }, this.duration);

    this.animation.onfinish = () => this.onAnimationFinish(false);
  }

  openAccordion() {
    // Start a WAAPI animation
    this.animation = this.filterContainer.animate({
      marginBottom: [0, this.margin],
    }, {
      duration: this.duration,
      easing: 'ease',
    });
    this.animation = this.side.animate({
      opacity: [0, 1],
    }, {
      delay: this.duration,
      duration: this.duration,
      easing: 'ease',
    });

    setTimeout(() => {
      this.accordion.open = true;
    }, this.duration);

    this.side.style.opacity = 1;
    this.filterContainer.style.marginBottom = this.margin;
    this.animation.onfinish = () => this.onAnimationFinish(true);
  }

  onAnimationFinish(open) {
    this.accordion.open = open;
    this.animation = null;
  }
}

export default Accordion;
