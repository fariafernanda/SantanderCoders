/* Dada uma série de eleitores em potencial, retorne um objeto que represente os resultados da votação. Inclua quantos eleitores potenciais tinham entre 18 e 25 anos, quantos eram de 26 a 35 anos, quantos de 36 a 55 anos e quantos de cada uma dessas faixas etárias realmente votaram. O objeto resultante contendo esses dados deve ter 6 propriedades */

const voters = [
    { name: "Bob", age: 30, voted: true },
    { name: "Jake", age: 32, voted: true },
    { name: "Kate", age: 25, voted: false },
    { name: "Sam", age: 20, voted: false },
    { name: "Phil", age: 21, voted: true },
    { name: "Ed", age: 55, voted: true },
    { name: "Tami", age: 54, voted: true },
    { name: "Mary", age: 31, voted: false },
    { name: "Becky", age: 43, voted: false },
    { name: "Joey", age: 41, voted: true },
    { name: "Jeff", age: 30, voted: true },
    { name: "Zack", age: 19, voted: false },
  ];




let young = [];
let mid = [];
let old = [];



let handleYoung = (totals, voter) => ({
    ...totals,
    young: {
        people: totals.young.people + 1,
        votes: voter.voted ? totals.young.votes + 1 : totals.young.votes
    }
})

let handleMid = (totals, voter) => ({
    ...totals,
    mid: {
        people: totals.mid.people + 1,
        votes: voter.voted ? totals.mid.votes + 1 : totals.mid.votes
    }
   
})

let handleOld = (totals, voter) => ({
    ...totals,
    old: {
        people: totals.old.people + 1,
        votes: voter.voted ? totals.old.votes + 1 : totals.old.votes,
    }
})

function checkTotals(array){
    return array.reduce(
        (totals, currentVoter) => {

            if (currentVoter.age >= 18 && currentVoter.age <= 25){

                return handleYoung(totals, currentVoter);
            } 
            else if (currentVoter.age >= 26 && currentVoter.age <= 35){

                return handleMid(totals, currentVoter);
            }
            else if (currentVoter.age >= 36 && currentVoter.age <= 55){

                return handleOld(totals, currentVoter);
            }
        },
        {
           young: {people: 0, votes: 0},
           mid: {people: 0, votes: 0},
           old: {people: 0, votes: 0}
        }
    )
}

