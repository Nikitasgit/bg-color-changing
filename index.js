function bodyColor() {
  const x = Math.floor(Math.random() * 255);
  const y = Math.floor(Math.random() * 255);
  const z = Math.floor(Math.random() * 255);
  const color = `rgb(${x},${y},${z})`;
  document.body.style.background = color;
  text.textContent = color;
}
setInterval(bodyColor, 4000);
