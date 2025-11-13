const data = [
  { id: 1, name: "Suhu Udara", pin: "V0", color: "#00b16a", type: "Double", raw: false, min: 0 },
  { id: 2, name: "Kelembaban Udara", pin: "V1", color: "#f6b26b", type: "Integer", raw: false, min: 0 },
  { id: 3, name: "Kelembaban Tanah", pin: "V2", color: "#e74c3c", type: "Integer", raw: false, min: 0 },
  { id: 4, name: "Pompa Air", pin: "V3", color: "#ff6f00", type: "Integer", raw: false, min: 0 }
];

const tableBody = document.getElementById("tableBody");

function renderTable(filter = "") {
  tableBody.innerHTML = "";
  const filteredData = data.filter(d =>
    d.name.toLowerCase().includes(filter.toLowerCase())
  );
  filteredData.forEach(d => {
    const row = `
      <tr>
        <td>${d.id}</td>
        <td>${d.name}</td>
        <td>${d.pin}</td>
        <td><div class="color-box" style="background:${d.color}"></div></td>
        <td>${d.type}</td>
        <td>${d.raw}</td>
        <td>${d.min}</td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
}

renderTable();

document.getElementById("search").addEventListener("input", e => {
  renderTable(e.target.value);
});
