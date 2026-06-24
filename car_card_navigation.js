class CarCardNavigation {
  constructor(carCards) {
    this.carCards = carCards;
    this.currentCardIndex = 0;
    this.initNavigation();
  }

  initNavigation() {
    this.carCards.forEach((card, index) => {
      card.addEventListener('click', () => this.navigateToCard(index));
    });
  }

  navigateToCard(index) {
    this.carCards.forEach((card, currentIndex) => {
      if (currentIndex === index) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });
    this.currentCardIndex = index;
  }
}

// Example usage:
const carCards = document.querySelectorAll('.car-card');
const navigation = new CarCardNavigation(carCards);
