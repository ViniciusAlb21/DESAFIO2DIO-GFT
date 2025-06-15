let name = "Ragnar";
let vitorias = 50;
let derrotas = 15;

function calcularSaldo(vitorias, derrotas) {
  return vitorias - derrotas;
}

function determinarElo(saldo) {
  if (saldo <= 10) {
    return "Ferro";
  } else if (saldo <= 20) {
    return "Bronze";
  } else if (saldo <= 50) {
    return "Prata";
  } else if (saldo <= 80) {
    return "Ouro";
  } else if (saldo <= 90) {
    return "Diamante";
  } else if (saldo <= 100) {
    return "Lendário";
  } else {
    return "Imortal";
  }
}

let saldo = calcularSaldo(vitorias, derrotas);
let elo = determinarElo(saldo);

console.log("O Heroi " + name + " tem de saldo de " + saldo + " e seu elo é " + elo + ".");