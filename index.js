const addProduct = () => {
  const ul = document.querySelector("ul");
  // Crea elemento <li>
  const li = document.createElement("li");
  li.style.listStyle = "none";

  // Crea checkbox
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");

  // Aggiunge il testo dal campo di input
  const taskText = document.querySelector("input").value;

  // Crea lo span per il testo
  const span = document.createElement("span");
  span.innerText = taskText; 

  // Aggiunge gli elementi checkbox e span all'interno di li
  li.appendChild(checkbox);
  li.appendChild(span);

  // Aggiunge li all'interno di ul
  ul.appendChild(li);

  // Pulisce il campo input
  document.querySelector("input").value = "";
};
