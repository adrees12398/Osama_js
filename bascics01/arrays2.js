const Marval_Heros = ["SpiderMan","Thor","MisterAmerica"];
const Dc_Heros = ["superMan","Flash","batman"];
// Marval_Heros.push(Dc_Heros);
// console.log(Marval_Heros[3][0]);
// const allheros = Marval_Heros.concat(Dc_Heros);
// console.log(allheros);
const AllHeros = [...Marval_Heros,...Dc_Heros]; // split operator
console.log(AllHeros);



