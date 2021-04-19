document.getElementById("button").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "none";
});

let data = [];
const addProduct = (ev) => {
  ev.preventDefault();

  let product = {
    id: Date.now(),
    photo: document.getElementById("photo").value,
    name: document.getElementById("name").value,
    category: document.getElementById("category").value,
    price: document.getElementById("price").value,
  };

  data.push(product);
  document.querySelector("form").reset();

  saveToLocalStorage();
  addProductToTable();
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btnAdd").addEventListener("click", addProduct);
});

function saveToLocalStorage() {
  localStorage.setItem("MyProductList", JSON.stringify(data));
}

function addProductToTable() {
  let tabel = document.querySelector("table");
  let row = tabel.insertRow();
  data.forEach((product) => {
    row.innerHTML += `
    <td>
    <img class="image-after-first-row" 
      onmouseover="applyBigImageStyling(this)" 
      onmouseout="applyNormalImageStyling(this)" 
      src="${product.photo}" 
      alt="${product.name}" 
      tproducttle="${product.name}">
    <h5>${product.name}</h5>
         <br>
         <h5 class="category">${product.category}</h5>
         <br>
     <h4>${product.price}</h4>
   </td>
  `;
  });
}
