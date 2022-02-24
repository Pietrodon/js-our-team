const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    
    {
       name: 'Angela Caroll',
       role: 'Chief Editor',
       image: 'angela-caroll-chief-editor.jpg',
    },
    {
       name: 'Walter Gordon',
       role: 'Office Manager',
       image: 'walter-gordon-office-manager.jpg',
    },
    {
       name: 'Angela Lopez',
       role: 'Social Media Manager',
       image: 'angela-lopez-social-media-manager.jpg',
    },
    {
       name: 'Scott Estrada',
       role: 'Developer',
       image: 'scott-estrada-developer.jpg',
    },
    {
       name: "Barbara Ramos",
       role: "Graphic Designer",
       image: "barbara-ramos-graphic-designer.jpg",
    }
  ];


// ciclo for per ciclare elemnti array
for (let i=0;i<team.length;i++){
   console.log(team[i])
   // creazioni variabili per contenere i dati ciclati
   const nome = team[i].name;
   const ruolo =team[i].role;
   const foto = team[i].image; 
   console.log(nome,ruolo,foto)

   // creazione card
   const card = `
   <div class="team-card">
      <div class="card-image">
         <img
         src="${foto}"
         alt="${nome}"
         />
      </div>
      <div class="card-text">
         <h3>${nome}</h3>
         <p>${ruolo}</p>
      </div>
   </div>`
   console.log(card)
}
  
  


  