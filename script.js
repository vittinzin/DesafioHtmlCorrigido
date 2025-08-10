const valorInput = document.getElementById("valor");
const moedaOrigem = document.getElementById("moeda-origem").value;
const moedaDestino = document.getElementById("moeda-destino").value;
const resultadoParagrafo = document.getElementById("resultado");

const valor = parseFloat(valorInput.value);

function converterMoeda() {
  if (isNaN(valor) || valor === 0) {
    resultadoParagrafo.textContent = "Insira um valor válido!";
    resultadoParagrafo.style.color = "red";
    return;
  }

  if (
    moedaOrigem === moedaDestino ||
    moedaOrigem === "" ||
    moedaDestino === ""
  ) {
    resultadoParagrafo.textContent = "Insira uma conversão válida!";
    resultadoParagrafo.style.color = "red";
    return;
  }

  const taxas = {
    Real: {
      Dólar: 0.18,
      Euro: 0.15,
      Peso: 243.9,
      Iene: 27.17,
    },
    Dólar: {
      Real: 5.43,
      Euro: 5.43 * 0.15,
      Peso: 243.9 * 5.43,
      Iene: 27.17 * 5.43,
    },
    Euro: {
      Real: 6.33,
      Dólar: 6.33 * 0.18,
      Peso: 243.9 * 6.33,
      Iene: 27.17 * 6.33,
    },
    Iene: {
      Real: 0.0368,
      Dólar: 0.03 * 5.43,
      Euro: 0.03 * 6.33,
      Peso: 0.03 * 243.9,
    },
    Peso: {
      Real: 0.03,
      Dólar: 0.03 * 5.43,
      Euro: 0.03 * 6.33,
      Iene: 1,
    },
  };

  const valorConvertido = valor * taxas[moedaOrigem][moedaDestino];

  resultadoParagrafo.textContent = `${valor} ${moedaOrigem} = ${valorConvertido.toFixed(
    2
  )} ${moedaDestino}`;
  resultadoParagrafo.style.color = "black";
}

function limpar() {
   document.getElementById("valor").value = "";
  document.getElementById("moeda-origem").value = "";
  document.getElementById("moeda-destino").value = "";
  document.getElementById("resultado").textContent = "";
}
