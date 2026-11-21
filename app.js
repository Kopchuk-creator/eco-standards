// граничні значення для бензинових авто, г/км
const EURO = {
  "Євро-4": { co: 1.0, nox: 0.08 },
  "Євро-5": { co: 1.0, nox: 0.06 },
  "Євро-6": { co: 1.0, nox: 0.06 }
};

function euroClass(year) {
  if (year >= 2015) return "Євро-6";
  if (year >= 2011) return "Євро-5";
  return "Євро-4";
}

document.getElementById("check").addEventListener("submit", e => {
  e.preventDefault();
  const f = e.target;
  const cls = euroClass(+f.year.value);
  const n = EURO[cls];
  const ok = +f.co.value <= n.co && +f.nox.value <= n.nox;
  document.getElementById("result").textContent =
    cls + ": " + (ok ? "відповідає нормі" : "перевищення норми");
});
