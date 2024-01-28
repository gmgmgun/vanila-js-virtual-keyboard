class FontSelector {
  constructor() {
    document
      .getElementById('font-selector')
      .addEventListener('change', (event) => {
        let selectedFont = event.target.value;
        document.body.style.fontFamily = selectedFont;
        document.getElementById('input-container').style.fontFamily =
          selectedFont;
        const keys = document.getElementsByClassName('key');
        const keysText = document.getElementsByClassName('key-text');
        for (let i = 0; i < keys.length; i++) {
          keys[i].style.fontFamily = selectedFont;
        }
        for (let i = 0; i < keysText.length; i++) {
          keysText[i].style.fontFamily = selectedFont;
        }
      });
  }
}

const fontSelect = new FontSelector();
