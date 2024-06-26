function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

    const btnCreate = document.querySelector("[data-create]");
    const btnDestroy = document.querySelector("[data-destroy]");

  function createBoxes(amount) {
      const boxes = document.querySelector(`div#boxes`);
      const initSize = 30;
      for (let i = 0; i < amount; i++) {
       const dv = document.createElement("div");
       boxes.append(dv);
       const size = initSize + (i * 10);
       dv.style.width= `${size}px`;
       dv.style.height=`${size}px`;
       dv.style.background = getRandomHexColor();
      }
  }

    btnCreate.addEventListener('click', function() {
      const input = document.querySelector(`#controls>input`);
      const amount = parseInt(input.value);
      destroyBoxes();
      if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
      }
    })

    function destroyBoxes() {
      const boxes = document.getElementById('boxes');
      boxes.innerHTML = '';
   }

    btnDestroy.addEventListener('click', function() {
      destroyBoxes();
    })

