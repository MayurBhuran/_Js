const myname= document.getElementById("my-name")
const btn = document.getElementById('my-btn')


function makeTextSizer(size) {
  function changeSize() {
    myname.style.fontSize =`${size}px`;
  }
  return changeSize;
}
const size12 = makeTextSizer(12);
const size22 = makeTextSizer(22);
const size122 = makeTextSizer(122)
const size78 = makeTextSizer(78);

btn.addEventListener('click',size122);

