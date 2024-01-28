class KeyboardController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.initialize();
  }

  initialize() {
    this.view.keys.forEach((key) => {
      key.element.addEventListener('click', () => {
        key.element.classList.add('active');
        setTimeout(() => {
          key.element.classList.remove('active');
        }, 100);
        this.handleKeyClick(key);
        this.handleEvent(key);
      });
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace') {
        const event = new CustomEvent('keyPressed', {
          detail: 'Backspace',
        });
        document.dispatchEvent(event);
        const key = this.view.keys.find(
          (key) => key.model.value === 'Backspace'
        );
        key.element.classList.add('active');
      } else {
        this.view.keys.forEach((key) => {
          let phisicalKeyContent = e.key;
          if (key.model.type === 'letter' || key.model.type === 'sign') {
            phisicalKeyContent = this.model.onCapsLock
              ? e.key.toUpperCase()
              : e.key.toLowerCase();
            if (phisicalKeyContent === key.model.content) {
              key.element.classList.add('active');
              this.handleKeyPress(e, key);
            }
          } else {
            this.handleFunctionKeysPress(key, e.key);
          }
        });
      }
    });
    document.addEventListener('keyup', () => {
      this.view.keys.forEach((key) => {
        key.element.classList.remove('active');
      });
    });
  }

  handleEvent(key) {
    this.model.updateState(key);
    this.view.updateView(this.model);
  }

  handleKeyPress(e, key) {
    let content = key.model.content;
    if (e.shiftKey) {
      content =
        content === content.toLowerCase()
          ? content.toUpperCase()
          : content.toLowerCase();
    }

    const event = new CustomEvent('keyPressed', {
      detail: content,
    });
    document.dispatchEvent(event);
  }

  handleKeyClick(key) {
    if (key.model.type === 'letter' || key.model.type === 'sign') {
      const event = new CustomEvent('keyPressed', {
        detail: key.model.content,
      });
      document.dispatchEvent(event);
    }
    if (key.model.type === 'function') {
      if (key.model.value === 'Backspace') {
        const event = new CustomEvent('keyPressed', {
          detail: 'Backspace',
        });
        document.dispatchEvent(event);
      }
    }
  }

  handleFunctionKeysPress(key, phKey) {
    if (phKey === 'Shift') {
      if (key.model.value === 'Shift') {
        key.element.classList.add('active');
      }
    }
    if (phKey === 'Backspace') {
      if (key.model.value === 'Backspace') {
        key.element.classList.add('active');
      }
    }
    if (phKey === 'Meta') {
      if (key.model.value === 'CapsLock') {
        key.element.classList.add('active');
      }
      this.handleEvent(key);
    }
  }
}
