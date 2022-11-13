/*
 *   Representantes:
 *   .         ponto             um caractere qualquer
 *   []        conjunto          conjunto de caracteres permitidos
 *   [^]       conjunto negado   conjunto de caracteres proibidos
 *
 *   Quantificadores:
 *   ?         opcional          zero ou um
 *   *         asterisco         zero ou mais
 *   +         mais              um ou mais
 *   {n,m}     chaves            de "n" até "m"
 *
 *   Ancoras:
 *   ^         circunflexo       inicio da linha
 *   $         cifrão            fim da linha
 *   \b        borda             inicio ou fim de palavra
 *
 *   Outros metacaracteres:
 *   \         escape            uso de metacaracteres como literal
 *   |         ou                operação ou
 *   ( )       grupo             define um grupo
 *   \1...\9   retrovisor        resgata grupos já definidos
 */

const texto = '1,2,3,4,5,6,a.b c!d?e'

// quebrar a string no caractere ponto
const regexPonto = /\./g
console.log(texto.split(regexPonto))

// quebrar em cada virgula, ponto, interrogação, espaço
const regexSimbolos = /,|\.|\?|!| /g
console.log(texto.split(regexSimbolos))
