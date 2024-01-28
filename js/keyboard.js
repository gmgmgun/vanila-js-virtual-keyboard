document.addEventListener('DOMContentLoaded', function () {
  fetch('/data/layout.json', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  })
    .then((response) => response.json())
    .then((layout) => {
      const keyboardModel = new KeyboardModel(layout);
      const keyboardView = new KeyboardView(keyboardModel);
      const keyboardController = new KeyboardController(
        keyboardModel,
        keyboardView
      );
    })
    .catch((error) => console.error(error));
});
