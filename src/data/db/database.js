import Mock from "../mock";

const database = {
  information: {
    name: 'Vegabite',
    realname: 'Bieko',
    aboutContent: "Wil jij vaker gezond en vegetarisch eten? Bestel Vegabite!",
    age: 27,
    phone: 'Kok',
    nationality: 'American',
    language: 'English, French',
    email: '',
    address: '121 King Street, Melbourne, Australia',
    gerecht1: 'Spaghetti',
    gerecht2: 'Bloemkoolsteak',
    socialLinks: {
      facebook: 'https://facebook.com/vegabite',
      instagram: 'https//instagram.com/vegabite',

    },
    brandImage: '/images/vb_logo.png',
    frontImage: '/images/vb_logo_front_two.png',
    aboutImage: '/images/vb_bieko.jpg',
    aboutImageLg: '/images/vb_bieko.jpg',
    bestellen: '/bestellen'
  },
  services: [
    {
      title: "1. Jij bestelt",
      icon: 'laptop-phone',
      details: "Elke week staan er 2 verschillende gerechten online. Jij bestelt waar je zin in hebt."
    },
    {
      title: "2. Ik kook",
      icon: 'dinner',
      details: "Als jij een bestelling hebt geplaatst ga ik aan de slag. Ik kook jouw gekozen vegan gerecht."
    },
    {
      title: "3. Jij geniet",
      icon: 'heart',
      details: "Op donderdag bezorg ik jou gerecht bij je thuis in het gekozen tijdslot. Je betaalt via een tikkie."
    },
  ],
  reviews: [
    {
      id: 1,
      content: "Het eten was ontzettend lekker, en de bakjes waarin bezorgd wordt zijn biologisch afbreekbaar. Dik pluspunt!",
      author: {
        name: 'Jorrit Leemans',
        designation: 'Klant'
      }
    },
    {
      id: 2,
      content: "Ik ga hier nog vaak bestellen, 10/10!",
      author: {
        name: 'Cheima El Jallab',
        designation: 'Klant'
      }
    },
    {
      id: 3,
      content: "Ontzettend lekker en helemaal vegan.",
      author: {
        name: 'Sem de Rooij',
        designation: 'Klant'
      }
    }
  ],

  experience: {
    workingExperience: [
      {
        id: 1,
        type: "Vegetarisch, Vegan",
        gerecht: "Spaghetti",
        ingredienten: "Met knoflook, peterselie en citroen",
        details: "Een heerlijke spaghetti met dit en dit en dit."
      },
      {
        id: 2,
        type: "Vegetarisch",
        gerecht: "Bloemkoolsteak",
        ingredienten: "Met Za'Athar, koriander",
        details: "Een halve bloemkool gebakken op één zeide met saus en koriander.",
      },
    ],
  },

  contactInfo: {
    phoneNumbers: ['06 12 34 56 78'],
    emailAddress: ['info@vegabite.nl'],
    address: "Ridderschapsstraat 8bis, 2801GM, Utrecht"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});
