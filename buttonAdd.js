document.getElementById("button").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "none";
});

let data = [];
const addProduct = (ev) => {
  ev.preventDefault(); //to stop the form submitting
  let product = {
    id: Date.now(),
    photo: document.getElementById("photo").value,
    name: document.getElementById("name").value,
    category: document.getElementById("category").value,
    price: document.getElementById("price").value,
  };
  data.push(product);
  // document.forms[0].reset(); // to clear the form for the next entries
  document.querySelector("form").reset();

  //for display purposes only
  console.warn("added", { data });

  //saving to localStorage
  localStorage.setItem("MyProductList", JSON.stringify(data));
  addToTable();
};
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btnAdd").addEventListener("click", addProduct);
});

// function addToTable() {
//   let tabel = document.querySelector("table");
//   for (let i = 0; i < data.length; i++) {
//     let r1 = tabel.insertRow();
//     let r2 = tabel.insertRow();
//     let r3 = tabel.insertRow();
//     let r4 = tabel.insertRow();
//     r1.innerHTML = data[i].photo;
//     r2.innerHTML = data[i].name;
//     r3.innerHTML = data[i].category;
//     r4.innerHTML = data[i].price;
//   }
// }

function addToTable() {
  let tabel = document.querySelector("table");
  let row = tabel.insertRow();
  for (let i = 0; i < data.length; i++) {
    row.innerHTML += `
    <td>
    <img class="image1" onmouseover="bigImg(this)" onmouseout="normalImg(this)" src="${data[i].photo}" alt="${data[i].name}" title="${data[i].name}">
    <h5>${data[i].name}</h5>
         <br>
         <h5 class="category">${data[i].category}</h5>
         <br>
     <h4>${data[i].price}</h4>
   </td>
  `;
  }
}
