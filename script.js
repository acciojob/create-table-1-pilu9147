function insert_Row() {
  let tbl = document.getElementById("sampleTable");
  let x = tbl.insertRow(0); // Insert row at index 0 (top)

  let cell1 = x.insertCell();
  let cell2 = x.insertCell();

  cell1.innerHTML = "New Cell1";
  cell2.innerHTML = "New Cell2";
}

// let tbl = document.getElementById("sampleTable");

// function insert_Row() {
//   let x = document.createElement("tr");
//   x.innerHTML = `
//     <td>New Cell1</td>
//     <td>New Cell2</td>`;

//   tbl.appendChild(x);
// }
