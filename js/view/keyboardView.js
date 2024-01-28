class KeyboardView {
  constructor(model) {
    this.model = model;
    this.element = document.getElementById('keyboard-container');
    this.keys = this.createKeyElements();
  }

  createKeyboardElement() {
    let keyboard = document.createElement('div');
    keyboard.className = 'keyboard';
    document.body.appendChild(keyboard);
    return keyboard;
  }

  createKeyElements() {
    const keyViews = [];
    this.model.rows.forEach((row) => {
      const rowDiv = document.createElement('div');
      rowDiv.className = 'keyboard-row';
      row.forEach((keyModel) => {
        const keyView = new KeyView(keyModel);
        keyViews.push(keyView);
        rowDiv.appendChild(keyView.element);
      });
      this.element.appendChild(rowDiv);
    });

    return keyViews;
  }

  updateView(keyModel) {
    this.keys.forEach((key) => {
      key.model.onCapsLock = keyModel.onCapsLock;
      key.updateKeyText();
    });
  }
}
