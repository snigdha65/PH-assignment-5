let serial = 0;
// ------------------1st card calculation----------------
document.addEventListener("DOMContentLoaded", function () {
  serial += 1;
  document
    .getElementById("calculate-btn")
    .addEventListener("click", function () {
      const firstName = document.getElementById("first-name").innerText;
      const firstInput = document.getElementById("first-input-field").value;
      const secInput = document.getElementById("sec-input-field").value;
      if (
        firstInput == "" ||
        secInput == "" ||
        firstInput <= 0 ||
        secInput <= 0
      ) {
        return alert("please enter any valid number");
      }
      const total = 0.5 * parseInt(firstInput) * parseInt(secInput);
      displayData(firstName, firstInput, secInput, total);
    });
});
// ------------------2nd card calculation----------------
document.addEventListener("DOMContentLoaded", function () {
  serial += 1;
  document
    .getElementById("2nd-calculate-btn")
    .addEventListener("click", function () {
      const firstName = document.getElementById("sec-name").innerText;
      const firstInput = document.getElementById("2nd-first-input-field").value;
      const secInput = document.getElementById("2nd-sec-input-field").value;
      if (
        firstInput == "" ||
        secInput == "" ||
        firstInput <= 0 ||
        secInput <= 0
      ) {
        return alert("please enter any valid number");
      }
      const total = parseInt(firstInput) * parseInt(secInput);
      displayData(firstName, firstInput, secInput, total);
    });
});
// ------------------3rd card calculation----------------
document
  .getElementById("third-calculate-btn")
  .addEventListener("click", function () {
    serial += 1;
    const thirdName = document.getElementById("third-name").innerText;
    const card3One = document.getElementById("multipy").innerText;
    const card3Two = document.getElementById("multipy-2").innerText;
    const multiply = parseInt(card3One) * parseInt(card3Two);
    displayData(thirdName, multiply);
    disabledButton("third-calculate-btn");
  });
// ------------------4th card calculation----------------
document.getElementById("fourth-btn").addEventListener("click", function () {
  serial += 1;
  const fourthName = document.getElementById("fourth-name").innerText;
  const card4 = document.getElementById("4multiply").innerText;
  const card4Two = document.getElementById("4multipy2").innerText;
  const multiply2 = parseInt(card4) * parseInt(card4Two);
  displayData(fourthName, multiply2);
  disabledButton("fourth-btn");
});
// ------------------5th card calculation----------------
document.getElementById("fifth-btn").addEventListener("click", function () {
  serial += 1;
  const fifthName = document.getElementById("fifth-name").innerText;
  const card5One = document.getElementById("5multipy").innerText;
  const card5Two = document.getElementById("5multipy-2").innerText;
  const multiply3 = parseInt(card5One) * parseInt(card5Two);
  displayData(fifthName, multiply3);
  disabledButton("fifth-btn");
});
// ------------------last card calculation----------------
document.getElementById("last-btn").addEventListener("click", function () {
  serial += 1;
  const lastName = document.getElementById("last-name").innerText;
  const card6One = document.getElementById("last-multipy").innerText;
  const card6Two = document.getElementById("last-multipy-2").innerText;
  const multiplyLast = parseInt(card6One) * parseInt(card6Two);
  displayData(lastName, multiplyLast);
  disabledButton("last-btn");
});

// common function to display data
function displayData(nameOfTri, calculateResult) {
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${serial}</td>
    <td>${nameOfTri}</td>
    <td>${calculateResult}cm<sup>2</sup></td>
    <td>
    <button class="btn btn-sm bg-sky-600 text-white">convert to m<sup>2</sup></button>
    </td>
    `;
  container.appendChild(tr);
}

//  common function to disable button
function disabledButton(id) {
  document.getElementById(id).setAttribute("disabled", true);
}

// common function to get data using getElementById method
// function getData(id1, id2, id3) {
//     // get the data from htm using id
//     const productName = document.getElementById(id1).innerText;
//     const productPrice = document.getElementById(id2).innerText;
//     const productQuantity = document.getElementById(id3).innerText;

//     const pd = {
//       productName: productName,
//       productPrice: productPrice,
//       productQuantity: productQuantity,
//     };
//     return pd;
//   }
