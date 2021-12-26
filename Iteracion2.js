// Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.


const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(param) {
    
    let longest="";

    for (let i = 0; i < param.length; i++){

        if (longest.length < param[i].length){
            longest=param[i];
        }
    }

    return longest;
}

console.log(findLongestWord(avengers));