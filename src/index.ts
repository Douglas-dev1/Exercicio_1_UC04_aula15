/**
 * 1- No nosso dia a dia, o uso de senhas é algo comum, pois usamos muitos sistemas ou aplicativos diferentes.
 *Como recomendação de segurança, é necessário que para cada aplicativo que usamos, seja gerada uma senha segura.
 *Usando a técnica de arrays, gere 5 senhas que contenham pelo menos 10 caracteres, contendo pelo menos 5 letras,
 *sendo 2 maiúsculas e 2 minúsculas, 2 números e um caractere especial (ponto, hashtag, barra, ponto de interrogação, arroba).
 *Use a tabela ASCII como base para gerar caracteres aleatórios.
 **/

 import Scanner from "@codeea/scanner";

 let scanner: Scanner;

function geraSenha(): string {
/*PRIMEIRO: GERAR ARRAYS COM LETRAS MAIÚSCULAS, MINÚSCULAS, NUMEROS E CARCTERES ESPECIAIS*/
const letrasMaiusculas: string[26] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letrasMinusculas: string[26] = "abcdefghijklmnopqrstuvwxyz";
const numeros: string[10] = "1234567890";
const caracteresEspeciais: string[9] = "!@#$%&";

let senha : string [] = [];
let senhaFinal : string [] = [];
/*PREENCHER O ARRAY SENHA COM 2 LETRAS MAIUSCULAS, 2 MINUSCULAS, 2 NUMEROS E 1 CARACTERE ESPECIAL*/
for(let i = 0; i<2; i++){
  /*UTILIZO A FUNÇÃO RANDON DA BIBLIOTECA MATH */
  senha.push(letrasMaiusculas[Math.floor(Math.random() * letrasMaiusculas.length)]);
  senha.push(letrasMinusculas[Math.floor(Math.random() * letrasMinusculas.length)]);
  senha.push(numeros[Math.floor(Math.random() * numeros.length)]);
}
senha.push(caracteresEspeciais[Math.floor(Math.random() * caracteresEspeciais.length)]);

/*PEGO A SENHA GERADA E PASSO SEUS CARACTERES E OS 3 ULTIMOS DE FORMA ALEATORIA*/
senhaFinal.push('[');
for(let j = 0; j<7; j++){
  senhaFinal.push(senha[j])
}
for(let k = 0; k<3; k++){
  senhaFinal.push(senha[Math.floor(Math.random() * senha.length)]);
}
senhaFinal.push(']');

  return senhaFinal.join('');

}
/*UTILIZO UMA FUNÇÃO PARA FAZER UM ARRAY DE ARRAYS, COM AS SENHAS ALEATORIAS*/
function geraNsenhas(quantidade: number): string[][]{
  let stringFinal: string [][] = [];
  for(let k = 0; k<quantidade; k++){
    const novaSenha = geraSenha();
    stringFinal.push([novaSenha]);
  }

  return stringFinal;
}
/*PEÇO PARA O USUARIO INFORMAR QUANTAS SENHAS ALETORIAS ELE QUER E IMPRIMO AS SENHAS NA TELA*/
async function main() {
  for(;;){
    let nSenhas = parseInt(await scanner.question("Quantas senhas quer gerar?: "));
    console.log(`Gerando ${nSenhas} senhas ${geraNsenhas(nSenhas)}`);
  }
}


(async () => {
  scanner = new Scanner();
  await main();
  scanner.close();
})();
