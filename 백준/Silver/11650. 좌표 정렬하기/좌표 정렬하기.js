let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
let N = Number(input.shift());
let locas = input.map(loc => loc.split(' ').map(n => Number(n)));

let results = '';
locas.sort((a,b) => 
           {if(a[0] !== b[0]){return(a[0] - b[0]);}
            return a[1] - b[1]
           })
locas.forEach(loc => {
    results += `${loc[0]} ${loc[1]}\n`;
})
                     
console.log(results)                     