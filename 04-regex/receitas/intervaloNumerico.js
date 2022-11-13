const texto = '0 1 10 192 199 201 249 255 256 312 101 1512'

// números entre 0-255
//    \b          borda esquerda
//    \d{1,2}     primeira parte grupo pega numero de 0 99
//    |1\d{1,2}   ou numero de 100 199
//    |2[0-4]\d   ou numero de 200 a 249
//    |25[0-5]    ou numero de 250 a 255
console.log(texto.match(/\b(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])\b/g))
