//\p{S}
//\p{Z}
//[\p{L}\p{Script=Greek}]
let texto = "Ave Caesar 123"
let expresion= /[\p{L}\p{N}]/gu;
console.log(texto.match(expresion))