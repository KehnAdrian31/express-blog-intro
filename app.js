// importo express
const express = require ('express');

// chiamo la funzione per creare l' oggetto express e salvarlo in una variabile
const app = express();

//definisco la porta in cui il server deve rimanere in ascolto
const port = 3000;

// importo il middleware per definire gli asset statici
app.use(express.static('public'));

//definisco la rotta base 
app.get('/', (req, res) => {
  res.send('Server del mio blog in ascolto');
})

//definisco la rotta per restituire l' elenco dei post
app.get('/bacheca', (req, res) => {

  //creo un array di oggetti
  const posts = [
    {
      title: 'Gita in montagna',
      content: " mezz'ora di camminata, guardato la vista dal castello baradello",
      img: '/img/posts/download(1).png',
      tags: ['tour, gita, attività fisica']
    },
     {
      title: 'Vacanza al Mare',
      content: "Vacanza in Sardegna, preso il sole, bagno al mare cristallo",
      img: '/img/posts/download.png',
      tags: ['Mare, Spiaggia, Sole']
    },
     {
      title: 'Visita al lago di Como',
      content: "stroll in centro di Como, visitati Ville",
      img: '/img/posts/images(1).jpg',
      tags: ['Villa, Lago, Como, Gita']
    },
     {
      title: 'Porto il cane al parco',
      content: "Ho portato il cane al parco",
      img: '/img/posts/images.jpg',
      tags: ['Chill, Dog-lover, Parco']
    },
     {
      title: 'Visito il catedrale Duomo',
      content: "Sono andato a Milano a visitare Duomo e la galleria",
      img: '/img/posts/images.png',
      tags: ['città, Milano, Duomo']
    }
  ];

  res.json(posts);
})

app.listen(port, () => {
  console.log(`Server in ascolto alla porta ${port}`)
});