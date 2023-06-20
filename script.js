let tbl = document.getElementById("sampleTable");

function insert_Row() {
  let x = document.createElement("tr");
  x.innerHTML = `
    <td>New Cell1</td>
    <td>New Cell2</td>`;

  tbl.appendChild(x);
}
