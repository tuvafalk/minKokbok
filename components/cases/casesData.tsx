// data/cases.ts

export const casesData = [
  {
    id: 'darkwell',
    title: 'Darkwell: A Weave Quest',
    category: 'Game Development',
    tags: ['Unity', 'C#', 'Procedural Generation', '2D Roguelike'],
    imageUrl: '/images/darkwell.png',
    shortDescription: 'A short 2D roguelike adventure game where players embark on a quest to find the source of the mysterious Weve-crystal.',
    sections: [
      {
        title: 'The Game',
        content: 'Darkwell: A Weave Quest is a short 2D roguelike adventure game where players embark on a quest to find the source of the mysterious Weve-crystal, aiming to restore balance to the world. As the main character, players navigate through procedurally generated levels filled with challenges, enemies, and puzzles.'
      },
      {
        title: 'The Process',
        content: 'Darkwell started as a personal exploration in classic 2D game design and development in Unity. Throughout the development of Darkwell, I delved into the realms of game design, storytelling, and procedural generation algorithms.'
      },
      {
        title: 'The Final Result',
        content: 'So far Darkwell is only a prototype. I aim to iteratively test game design, storytelling, and encounter balance to create an immersive experience. I also have the ambition to connect this project to the user-created content in the API I created, RealmWalker.'
      }
    ]
  },
  {
    id: 'realmwalker',
    title: 'Realm Walker',
    category: 'Web Development',
    tags: ['React', 'API', 'SQL', 'Database Design'],
    imageUrl: '/images/Databas labb1 - Frame 8(2).png', 
    shortDescription: 'An experiment in API, SQL, Database and creative webdesign leveraging APIs to create a storytelling platform.',
    sections: [
      {
        title: 'The Task',
        content: 'Realm Walker is an experiment in API, SQL, Database, and creative webdesign. Aiming to leverage APIs to create a creative storytelling platform.'
      },
      {
        title: 'The Process',
        content: 'From designing the database to implementing API integrations into the React web application, every aspect of the project was driven by my passion for storytelling and a desire to empower users to create their own stories.'
      },
      {
        title: 'The User Experience',
        content: 'Realm Walker empowers users by providing them with a platform to collaborate on storytelling projects and share their creative works with others. By leveraging APIs and databases to facilitate dynamic content creation and sharing, Realm Walker enables users to connect with like-minded individuals, share ideas, and inspire each other.'
      },
      {
        title: 'The Final Result',
        content: 'The final goal of this project is to connect the API to the Roguelike Darkwell that I am working on. This will create a collaborative experience where the users of Realm Walker can create items, characters, and locations that can be explored in the randomly generated levels of Darkwell.'
      }
    ]
  },
  {
    id: 'tuneblr',
    title: 'Tuneblr',
    category: 'Full-stack / MVC',
    tags: ['C#', 'MVC', 'SMTP', 'Database'],
    imageUrl: '/images/tuneblr.png',
    shortDescription: 'A nostalgic twist on modern music sharing platforms allowing users to create personalized mixtapes.',
    sections: [
      {
        title: 'The Task',
        content: 'Tuneblr offers a nostalgic twist on modern music sharing platforms, allowing users to create personalized mixtapes and share them with friends.'
      },
      {
        title: 'The Back-End',
        content: 'Behind Tuneblr\'s interface lies a robust backend infrastructure that handles data storage, retrieval, and sharing functionality. The database stores data while a secure MVC structure facilitates seamless communication between the front-end and back-end of the application.'
      },
      {
        title: 'The User Experience',
        content: 'Users can easily browse and add songs to their mixtapes, customize their playlists with personalized tags and descriptions, and share their creations with friends via email or social media, creating memorable experiences that resonate with both creators and recipients.'
      },
      {
        title: 'The Final Results',
        content: 'The result from this project is a web application allowing users to register accounts and craft mixtapes for sharing with others. Mixtapes are shared via email utilizing an SMTP server. Users can explore the database of user-created mixtapes, sorting by tags like "pop," "rock," or "techno." Login functionality utilizes cookies, and passwords are encrypted before storage.'
      }
    ]
  },
  {
    id: 'epistemic-limits-ai',
    title: 'Epistemic Limits & Formal Logic',
    category: 'Master Thesis',
    tags: ['AI Ethics', 'Formal Logics', 'Social Practice Theory', 'TEK'],
    imageUrl: '/images/ringar.png',
    shortDescription: 'Learning About the Richness of Traditional Ecological Knowledge Through Artificial Intelligence.',
    sections: [
      {
        title: 'The Task',
        content: 'Investigating the epistemological and technical limits of Artificial Intelligence (AI) when applied to the rich, context-dependent domain of Sámi Traditional Ecological Knowledge (TEK).'
      },
      {
        title: 'The Process',
        content: 'Employing a constructive design approach, the research attempts to encode the narrative practice of the "Sunrise Pasture Assessment" into the formal logic of Social Practice Theory (SPT) to perform a boundary analysis, using the rigidity of code to highlight precisely what resists digitization.'
      },
      {
        title: 'The Final Result',
        content: 'The formalization demonstrates that while SPT can coordinate the high-level syntax of herding, it encounters hard structural boundaries when attempting to encapsulate the embodied, relational semantics of the practice. The study argues for a variable-resolution approach to AI design, asserting that the core wisdom of Sápmi resides strictly within the Sámi community.'
      }
    ]
  }
];