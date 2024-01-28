class Input {
  constructor() {
    this.element = document.getElementById('input-container');
    document.addEventListener('keyPressed', (e) => {
      this.element.scrollLeft = this.element.scrollWidth;
      if (e.detail === 'Backspace') {
        this.removeValue();
      } else {
        this.addValue(e.detail);
      }
    });
  }

  addValue(value) {
    this.element.value += value;
  }

  removeValue() {
    this.element.value = this.element.value.substring(
      0,
      this.element.value.length - 1
    );
  }
}

const input = new Input();
