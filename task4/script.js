const linkA = document.querySelector("a");
linkA.addEventListener("click", (event) => {
  event.preventDefault();
  linkA.textContent = prompt("Введите новый текст для ссылки:");
});
