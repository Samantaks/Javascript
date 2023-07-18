console.log("Resposta da 2ª questão:");
console.log("-----------------------");

const booPrimeira = true;
const booSegunda = false;

console.log(`Vide primeira constante ${booPrimeira} e segunda constante ${booSegunda}, em uma operação de AND entre ambas teriamos: ${booPrimeira && booSegunda}`)
console.log(`Vide primeira constante ${booPrimeira} e segunda constante ${booSegunda}, em uma operação de OR entre ambas teriamos: ${booPrimeira || booSegunda}`)

const booTerceira = false;

console.log(`Vide primeira constante ${booPrimeira}, segunda constante ${booSegunda} e uma terceira constante ${booTerceira}, em uma operação de AND entre ambas teriamos: ${booPrimeira && booSegunda && booTerceira}`)
console.log(`Vide primeira constante ${booPrimeira}, segunda constante ${booSegunda} e uma terceira constante ${booTerceira}, em uma operação de OR entre ambas teriamos: ${booPrimeira || booSegunda || booTerceira}`)
