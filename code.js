// dichiarazione variabile
const dipendenti=
[
    // dichiarazione dell'oggetto 1
    {
        // ricordarsi di mettere le ,
        nome:"Wayne Barnett",
        posizione:"Founder & CEO",
        foto:"wayne-barnett-founder-ceo.jpg",
    },

    {
        nome:"Angela Caroll",
        posizione:"Chief Editor",
        foto:"angela-caroll-chief-editor.jpg",
    },

    {
        nome:"Walter Gordon",
        posizione:"Office Manager",
        foto:"walter-gordon-office-manager.jpg",
    },

    {
        nome:"Angela Lopez",
        posizione:"Social Media Manager",
        foto:"angela-lopez-social-media-manager.jpg",
    },

    {
        nome:"Scott Estrada",
        posizione:"Developer",
        foto:"scott-estrada-developer.jpg",
    },

    {
        nome:"Barbara Ramos",
        posizione:"Graphic Designer",
        foto:"barbara-ramos-graphic-designer.jpg",
    },


]

// console.log(dipendenti)
for(let i=0 ; i<dipendenti.length ; i++)
{
    // facendo questo ci salviamo i valori che leggiamo con il primo ciclo
    const dipendente = dipendenti[i];

    // Quindi, in questo ciclo, key sarà "nome", "posizione" e "foto" per ogni oggetto dipendente nell'array.
    // da ricordarsi proprieta ( chiave / valore)
    for(let key in dipendente)
    {
       console.log(`${key} : ${dipendente[key]},`) 
    //    in breve, stai utilizzando key per accedere dinamicamente alle proprietà di ciascun oggetto dipendente nell'array dipendenti durante la tua iterazione.
    }
    
}