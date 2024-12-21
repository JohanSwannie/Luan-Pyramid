const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  return (
    " ".repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    " ".repeat(rowCount - rowNumber)
  );
}

for (let i = 1; i <= count; i++) {
  rows.push(i);
}

for (let j = 0; j < rows.length; j++) {
  const result = padRow(rows[j], count);
  console.log(result);
}
