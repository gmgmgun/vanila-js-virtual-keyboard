class Button {
  constructor() {
    this.element = document.getElementById('toggle-button');
    this.element.addEventListener('click', () => {
      this.element.classList.toggle('active');
      document
        .getElementById('toggle-button-container')
        .classList.toggle('active');
      document.body.classList.toggle('dark-mode');
      document.getElementById('input-container').classList.toggle('dark-mode');
      const keys = document.getElementsByClassName('key');
      const keysText = document.getElementsByClassName('key-text');
      for (let i = 0; i < keys.length; i++) {
        keys[i].classList.toggle('dark-mode');
      }
      for (let i = 0; i < keys.length; i++) {
        keysText[i].classList.toggle('dark-mode');
      }
    });
  }
}

const button = new Button();
