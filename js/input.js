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
    console.log(value);
    this.element.value += value;
  }

  removeValue() {
    console.log(this.element.value);
    this.element.value = this.element.value.substring(
      0,
      this.element.value.length - 1
    );
    console.log(this.element.value);
  }
}

const input = new Input();
