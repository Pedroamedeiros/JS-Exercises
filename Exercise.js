// Dada uma lista de palavras, retorne a maior palavra.

//Ex:
//["paulo", "rafaela", "enzo"]  -> "rafaela"
//["paulo", "pedro", "ana"] -> "paulo"
//[] -> null
//Obs: 
//* Caso tenhamos mais de uma palavra com o número maior de letras, retorne a primeira palavra encontrada
//* Se a lista for vazia, retorne null

const list = ["xxxxxxaxxxxxxx", "rfel", "yuyuyu"];

function biggerWord(list)
{
    //let bigger = [];
    let bigger = "";

    if(list.length==0)
    {
        //Boa prática em prog.- tratar as condições de contorno inicialmente: Early return
        return null
    }

    for(let cont=0; cont<list.length; cont++)
    {
        let word = list[cont];
        if(bigger.length<word.length && word.indexOf("a")!=-1)
          {
            bigger = word;
          }
    }
    if(bigger == "")
    {
        return null
    }

    return bigger
}

console.log(biggerWord(list));