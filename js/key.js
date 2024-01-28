class Key {
  constructor(model) {
    this.model = model;
    this.element = document.createElement('button');
    this.element.className = 'key';
    const width = model.width ? model.width * 40 + 'px' : '40px';
    this.element.style.width = width;
    this.renderKeyText();
  }

  renderKeyText() {
    if (this.model.type === 'sign') {
      const divSign = document.createElement('div');
      divSign.className = 'key-text';
      divSign.textContent = this.model.value[0];

      const divNumber = document.createElement('div');
      divNumber.className = 'key-text';
      divNumber.textContent = this.model.value[1];

      this.element.appendChild(divSign);
      this.element.appendChild(divNumber);
    } else {
      const div = document.createElement('div');
      div.className = 'key-text';

      if (this.model.type === 'letter') {
        if (!this.model.onCapsLock) {
          div.textContent = this.model.value[0];
        } else {
          div.textContent = this.model.value[1];
        }
      } else {
        div.textContent = this.model.value;
      }

      this.element.appendChild(div);
    }
  }

  updateKeyText() {
    if (this.model.type === 'letter') {
      if (!this.model.onCapsLock) {
        this.element.textContent = this.model.value[0];
      } else {
        this.element.textContent = this.model.value[1];
      }
    } else {
      this.element.textContent = this.model.value;
    }
  }

  createKeyElement() {
    let keyElement = document.createElement('button');
    keyElement.textContent = this.model.value;
    keyElement.className = 'key';

    return keyElement;
  }

  updateState() {
    if (this.model.isPressed) {
      this.element.classList.add('pressed');
    } else {
      this.element.classList.remove('pressed');
    }
  }
}
