class KeyboardModel {
  constructor(layout) {
    this.onCapsLock = true;
    this.rows = layout.rows.map((row) =>
      row.keys.map(
        (key) =>
          new KeyModel(
            this.onCapsLock,
            key.value,
            key.type,
            key.width,
            this.getKeyContent(key)
          )
      )
    );
    this.keys = this.rows.reduce((acc, cur) => acc.concat(cur), []);
  }

  getKeyContent(key) {
    let content = '';
    if (key.type === 'letter' || key.type === 'sign') {
      content = this.onCapsLock ? key.value[0] : key.value[1];
    } else {
      content = key.value;
    }

    return content;
  }

  updateState(key) {
    if (key.model.value === 'CapsLock') {
      this.onCapsLock = !this.onCapsLock;
      this.keys.forEach((key) => {
        key.onCapsLock = this.onCapsLock;
        if (key.type === 'letter' && key.onCapsLock === true) {
          key.content = key.value[0];
        }
        if (key.type === 'letter' && key.onCapsLock === false) {
          key.content = key.value[1];
        }
      });
    }
  }
}
