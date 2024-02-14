let dipendente1;
let dipendente2;
let dipendente3;
let dipendente4;
let dipendente5;
let dipendente6;


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

for( let i=0 ; i<dipendenti.length; i++)
{
    // salvo dati del dipendente
    const dipendente= dipendenti[i];

    // crea lista non ordinata per i dettagli dipendenti
    const ul= document.createElement("ul");


    for(let key in dipendente)
    {
        // crea le li
        const li = document.createElement("li");
        // scrivo all' interno del list items i valori dei dipendenti
        li.innerText=`${key} : ${dipendente[key]},`;
        // appendo l'elemento li ad ul
        ul.append(li);

        // se la key fosse stata la stringa di caratteri foto fa quei comandi
        if(key==="foto")
        {
            // reiamo l'elemento immagine
            const img =document.createElement("img");
            // diamo il percorso per associare il contenitore all'immagine
            img.src=`./img/dipendente${i + 1}.jpg`;
            // svuotiamo il contenitore
            li.innerText="";
            // appendiamo
            li.append(img);
        }
    }

    if(i+1=== 1)
    {
        dipendente1=ul;
    }
    else if(i+1=== 2)
    {
        dipendente2=ul;
    }
    else if(i+1=== 3)
    {
        dipendente3=ul;
    }
    else if(i+1=== 4)
    {
        dipendente4=ul;
    }
    else if(i+1=== 5)
    {
        dipendente5=ul;
    }
    else if(i+1=== 6)
    {
        dipendente6=ul;
    }


    


}
// dichiarazione della card dove andranno le informazioni
const dipendente1location=document.getElementById("dipendente 1");
// abbiamo appeso la nostra ul
dipendente1location.append(dipendente1);

// dichiarazione della card dove andranno le informazioni
const dipendente2location=document.getElementById("dipendente 2");
// abbiamo appeso la nostra ul
dipendente2location.append(dipendente2);

// dichiarazione della card dove andranno le informazioni
const dipendente3location=document.getElementById("dipendente 3");
// abbiamo appeso la nostra ul
dipendente3location.append(dipendente3);

// dichiarazione della card dove andranno le informazioni
const dipendente4location=document.getElementById("dipendente 4");
// abbiamo appeso la nostra ul
dipendente4location.append(dipendente4);

// dichiarazione della card dove andranno le informazioni
const dipendente5location=document.getElementById("dipendente 5");
// abbiamo appeso la nostra ul
dipendente5location.append(dipendente5);

// dichiarazione della card dove andranno le informazioni
const dipendente6location=document.getElementById("dipendente 6");
// abbiamo appeso la nostra ul
dipendente6location.append(dipendente6);
