const pages = [
  {
    name: "Wes Bos",
    description:
      "Maker of this site. Web Developer, Tutorial Maker, Syntax.fm Podcaster, BBQ Lover",
    url: "https://wesbos.com/uses",
    twitter: "@wesbos",
    emoji: "🔥",
    country: "🇨🇦",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Developer",
      "Full Stack",
      "Entrepreneur",
      "Teacher",
      "YouTuber",
      "JavaScript",
      "React",
      "Node",
      "CSS"
    ]
  },
  {
    name: "Adam Schwartz",
    description: "Software developer, designer, film music composer",
    url: "https://adamschwartz.co/uses/",
    twitter: "@adamfschwartz",
    emoji: "♫",
    country: "🇺🇸",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Composer",
      "CSS",
      "Designer",
      "Developer",
      "Engineer",
      "Front End",
      "JavaScript",
      "Musician"
    ]
  },
  {
    name: "Habbat Adnan",
    description:
      "Self Taught Web Developer, Full Time Freelancer, Open Source Enthusiast",
    url: "https://adncodez.com/uses",
    twitter: "@adncodez",
    emoji: "🐍",
    country: "🇲🇦",
    computer: "linux",
    phone: "android",
    tags: [
      "Developer",
      "Full Stack",
      "Freelancer",
      "Python",
      "Django",
      "JavaScript",
      "CSS",
      "Docker"
    ]
  },
  {
    name: "Carter McAlister",
    description: "Software Engineer, Digital Nomad, Lover of the Outdoors",
    url: "https://cartermcalister.dev/uses",
    twitter: "@_CarterMc_",
    emoji: "🏔️",
    country: "🇺🇸",
    computer: "apple",
    phone: "android",
    tags: [
      "Engineer",
      "Front End",
      "Remote",
      "Nomad",
      "Developer",
      "JavaScript",
      "TypeScript",
      "React",
      "Node",
      "CSS",
      "Java"
    ]
  },
  {
    name: "Matt Jennings",
    description: "web dev, hockey | tradebreaker.io",
    url: "https://mattjennings.io/uses",
    twitter: "@mattjennings44",
    emoji: "🏒",
    country: "🇨🇦",
    computer: "apple",
    phone: "iphone",
    tags: ["Developer", "Full Stack", "JavaScript", "React", "Hockey"]
  },
  {
    name: "Jason Cory Alvernaz",
    description:
      "Web Developer, Blogger, YouTuber, and Dog Lover. Not necessarily in that order.",
    url: "https://jasoncoryalvernaz.com/uses",
    emoji: "👽",
    country: "🇺🇸",
    computer: "windows",
    phone: "iphone",
    tags: [
      "Developer",
      "Full Stack",
      "Entrepreneur",
      "Teacher",
      "YouTuber",
      "JavaScript",
      "React",
      "CSS",
      "Gatsby",
      "Blogger"
    ]
  },
  {
    name: "Alessia Bellisario",
    description:
      "Web engineer, mechanical keyboard builder, plotter art maker.",
    url: "https://aless.co/uses",
    emoji: "😎",
    country: "🇨🇦",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Developer",
      "Full Stack",
      "JavaScript",
      "React",
      "Rust",
      "WebAssembly",
      "Gatsby",
      "Blogger"
    ]
  },
  {
    name: "Sam Cross",
    description:
      '"Developer", IT student, frequent traveller by coach, addicted to music.',
    url: "http://sam-cross.github.io/uses",
    twitter: "@samcrxss",
    emoji: "🎵",
    country: "🇬🇧",
    computer: "windows",
    phone: "android",
    tags: ["Developer", "JavaScript", "React", "Node", "CSS"]
  },
  {
    name: "Praveen Kumar Purushothaman",
    description:
      "Cook, Cat Lover, Front End Architect, Full Stack Web Developer Evangelist & Cloud Computing Consultant.",
    url: "https://blog.praveen.science/my-personal-development-environment/",
    twitter: "@praveenscience",
    emoji: "😻",
    country: "🇬🇧",
    computer: "apple",
    phone: "android",
    tags: [
      "Developer",
      "Full Stack",
      "Entrepreneur",
      "Mentor",
      "Blogger",
      "PHP",
      "JavaScript",
      "React",
      "Node",
      "CSS"
    ]
  },
  {
    name: "Rene Pot",
    // Short description
    description:
      "Developer Evangelist, JavaScript Developer, Cross-Platform App Developer and gamer",
    // URL to your /uses page
    url: "http://renepot.com/uses",
    twitter: "@wraldpyk",
    // An emoji that describes you
    emoji: "🎮",
    // emoji of your country's flag
    country: "🇳🇱",
    // ONE of: apple, windows or linux
    computer: "apple",
    // iphone or android
    phone: "iphone",
    // Tags - You can add your own, but please keep it to one word. "Social vape entrepreneur influencer denver" isn't a tag.

    // Dev Tags: Engineer, Developer, Designer, Front End, Back End, Full Stack,
    // Other: Tags: Entrepreneur, Teacher, Podcaster, YouTuber, Blogger, Speaker,
    // Language Tags: JavaScript, PHP, Rails, Ruby, TypeScript, React, Vue, Node
    tags: [
      "Developer",
      "JavaScript",
      "Evangelist",
      "Gamer",
      "Streamer",
      "Titanium",
      "Node",
      "Speaker",
      "Twitch"
    ]
  },
  {
    name: "Gant Laborde",
    description:
      "Speaker, GDE Web/ML, Podcaster, Trainer, Speaker, Author, Podcaster",
    url: "http://gantlaborde.com/uses/",
    twitter: "@gantlaborde",
    emoji: "🔥",
    country: "🇺🇸",
    computer: "windows",
    phone: "iphone",
    tags: [
      "Engineer",
      "JavaScript",
      "Developer",
      "Consultant",
      "Entrepreneur",
      "React",
      "Blogger",
      "Teacher",
      "Speaker",
      "TypeScript",
      "Web Developer",
      "Writer",
      "Podcaster",
      "Machine Learning"
    ]
  },
  {
    name: "Kent C. Dodds",
    description: "JavaScript Software Engineer, speaker, and trainer",
    url: "https://kentcdodds.com/uses",
    emoji: "🙌",
    country: "🇺🇸",
    computer: "apple",
    phone: "android",
    tags: [
      "Developer",
      "Full Stack",
      "Entrepreneur",
      "Teacher",
      "YouTuber",
      "JavaScript",
      "Testing",
      "React",
      "Speaker",
      "Blogger"
    ]
  },
  {
    name: "Glenn Reyes",
    description:
      "Independent Software Engineer, trainer & speaker. Into sports & music.",
    url: "https://glennreyes.com/uses",
    twitter: "@glnnrys",
    emoji: "💃",
    country: "🇦🇹",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Developer",
      "Front End",
      "Entrepreneur",
      "Teacher",
      "JavaScript",
      "React",
      "GraphQL",
      "TypeScript",
      "Speaker"
    ]
  },
  {
    name: "Adam Jahnke",
    description:
      "Caffiend, motorcyclist, climber, recovering perfectionist. I love to make the complex simple.",
    url: "https://adamyonk.com/uses",
    emoji: "⤫",
    twitter: "@adamyonk",
    country: "🇺🇸",
    computer: "apple",
    phone: "iphone",
    tags: ["Engineer", "Full Stack", "JavaScript", "Ruby"]
  },
  {
    name: "Andrew Healey",
    description: "Software Engineer, Writer, Learner!",
    url: "https://healeycodes.com/uses",
    emoji: "🦉",
    country: "🇬🇧",
    computer: "apple",
    phone: "iphone",
    tags: ["Software Engineer", "Full Stack", "JavaScript", "Python", "Writer"]
  },
  {
    name: "Scott Tolinski",
    description: "Web Developer, Tutorial Maker, Podcaster, Bboy",
    url: "https://scotttolinski.com/uses",
    emoji: "💪🏻",
    country: "🇺🇸",
    computer: "apple",
    phone: "iphone",
    tags: ["Developer", "Front End", "Entrepreneur", "Teacher", "JavaScript"]
  },
  {
    name: "Anton Andrésen",
    description: "Software Engineer, Tutorial Maker, Youtuber, Tea Drinker",
    url: "https://anton.best/uses/",
    twitter: "@antonosuyt",
    emoji: "💻",
    country: "🇸🇪",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Developer",
      "Full Stack",
      "Entrepreneur",
      "YouTuber",
      "JavaScript",
      "TypeScript",
      "React",
      "Node",
      "GraphQL",
      "CSS"
    ]
  },
  {
    name: "Josiah Wiebe",
    description: "Designer & developer, lifelong learner.",
    url: "https://jwie.be/uses/",
    emoji: "🚴",
    country: "🇨🇦",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Full Stack",
      "Developer",
      "Designer",
      "Python",
      "JavaScript",
      "TypeScript"
    ]
  },
  {
    name: "Benjamin Lannon",
    description: "Web Developer, Open Source Contributor, Livestreamer",
    url: "https://lannonbr.com/uses/",
    twitter: "@lannonbr",
    emoji: "🎤",
    country: "🇺🇸",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Developer",
      "Full Stack",
      "Blogger",
      "Teacher",
      "JavaScript",
      "GraphQL"
    ]
  },
  {
    name: "Braden Watkins",
    description: "Student, Full Stack Developer, Lover of all things analog",
    url: "https://bradenwatkins.dev/uses",
    emoji: "🐐",
    country: "🇺🇸",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Full Stack",
      "Developer",
      "Web Developer",
      "JavaScript",
      "Python",
      "Golang"
    ]
  },
  {
    name: "Lauro Silva",
    description: "Software Engineer and Technical Writer",
    url: "https://laurosilva.com/uses",
    emoji: "😄",
    country: "🇺🇸",
    computer: "apple",
    phone: "iphone",
    tags: [
      "JavaScript",
      "React",
      "Full Stack",
      "Writer",
      "Independent",
      "Speaker",
      "Blogger"
    ]
  },
  {
    name: "Nuno Maduro",
    description: "Software engineer, Open Source contributor, Speaker",
    url: "https://nunomaduro.com/uses/",
    emoji: "🏄‍♂️",
    country: "🇵🇹",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Engineer",
      "Developer",
      "Speaker",
      "PHP",
      "JavaScript",
      "TypeScript"
    ]
  },
  {
    name: "Adrian Marin",
    description:
      "Product-Minded Software Engineer, Digital nomad, no-nonsense enjoyer of life, friends and family.",
    url: "https://adrianthedev.com/uses",
    twitter: "@adrianthedev",
    emoji: "🥑",
    country: "🇷🇴",
    computer: "apple",
    phone: "iphone",
    tags: ["Developer", "Full Stack", "Entrepreneur", "Rails", "TypeScript"]
  },
  {
    name: "Jahir Fiquitiva",
    description: "Passionate and Creative Full Stack Developer",
    url: "https://jahir.dev/uses",
    twitter: "@jahirfiquitiva",
    emoji: "💎",
    country: "🇨🇴",
    computer: "apple",
    phone: "iphone",
    tags: ["Developer", "Full Stack", "JavaScript", "Python", "Kotlin", "React"]
  },
  {
    name: "Christophe Querton",
    description:
      "Software Engineer, xoogler, co-founder of @accelery. Full-stack, technical debt collector. Lover of the Outdoors, BBQ, sailing.",
    url: "https://kertof.com/what-i-use",
    twitter: "@kertof",
    emoji: "🍉",
    country: "🇧🇪",
    computer: "windows",
    phone: "android",
    tags: [
      "Developer",
      "Full Stack",
      "Entrepreneur",
      "JavaScript",
      "Angular",
      "Node",
      "TypeScript",
      "NestJS",
      "CSS"
    ]
  },
  {
    name: "Lina María Montaño Ramírez",
    description:
      "Software Engineer at @holbertonschool, Web Developer, passionate and  Organizer at @node_co",
    url: "https://calypsobronte.me/uses",
    twitter: "@calypsobronte",
    emoji: "🦄",
    country: "🇨🇴",
    computer: "linux",
    phone: "android",
    tags: [
      "Developer",
      "Full Stack",
      "JavaScript",
      "Python",
      "C",
      "Mentor",
      "Organizer",
      "YouTuber",
      "Back End"
    ]
  },
  {
    name: "Brad Garropy",
    description:
      "Self taught frontender at Adobe, into lifting and country music.",
    url: "https://bradgarropy.com/uses",
    twitter: "@bradgarropy",
    emoji: "🤠",
    country: "🇺🇸",
    computer: "windows",
    phone: "android",
    tags: [
      "Developer",
      "Front End",
      "Full Stack",
      "Streamer",
      "YouTuber",
      "Blogger",
      "JavaScript",
      "Python"
    ]
  },
  {
    name: "Abdisalan Mohamud",
    description: "Software Engineer, blogger, lifetime learner",
    url: "https://abdisalan.com/uses",
    twitter: "@abdisalan_js",
    emoji: "🤷🏾‍♂️",
    country: "🇺🇸",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Developer",
      "Full Stack",
      "Blogger",
      "JavaScript",
      "React",
      "ReasonML",
      "Go",
      "AWS"
    ]
  },
  {
    name: "Josh Barker",
    description:
      "Front end engineer at Red Ventures. Soccer enthusiast. Lover of stories.",
    url: "https://joshuabarker.com/uses",
    twitter: "@joshuafbarker",
    emoji: "⚽️",
    country: "🇺🇸",
    computer: "apple",
    phone: "iphone",
    tags: ["Developer", "Front End", "JavaScript"]
  },
  {
    name: "Aaron Dunphy",
    description: "Full Stack Developer, Coffee Lover and Photo Taker",
    url: "https://aarondunphy.com/uses",
    twitter: "@aaronjohndunphy",
    emoji: "📷",
    country: "🇬🇧",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Developer",
      "Full Stack",
      "Back End",
      "Laravel",
      "PHP",
      "JavaScript"
    ]
  },
  {
    name: "Mohamed Benhida",
    description: "Web Developer, Open source contributor.",
    url: "http://mohamedbenhida.com/uses",
    twitter: "@simo_benhida",
    emoji: "🔥",
    country: "🇲🇦",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Developer",
      "Full Stack",
      "Entrepreneur",
      "Teacher",
      "Back End",
      "Laravel",
      "Vue",
      "Tailwind CSS",
      "PHP",
      "JavaScript"
    ]
  },
  {
    name: "Andrew McCombe",
    // Short description
    description:
      "Experienced full stack web developer with a passion for testing.",
    url: "https://www.euperia.com/uses",
    twitter: "@euperia",
    emoji: "🏁",
    country: "🇬🇧",
    computer: "apple",
    phone: "android",
    tags: [
      "Developer",
      "Full Stack",
      "Back End",
      "Laravel",
      "PHP",
      "JavaScript",
      "Vue",
      "LAMP",
      "ElasticSearch",
      "AWS"
    ]
  },
  {
    name: "Smakosh",
    description: "Full stack JavaScript Developer, blogger and speaker.",
    url: "https://smakosh.com/the-tech-tools-I-use",
    twitter: "@smakosh",
    emoji: "👌",
    country: "🇲🇦",
    computer: "apple",
    phone: "android",
    tags: ["Developer", "Full Stack", "Entrepreneur", "Blogger", "JavaScript"]
  },
  {
    name: "Pouria Ezzati",
    description: "Web developer. Digs music, football and a e s t h e t i c s",
    url: "https://pouria.dev/uses",
    twitter: "@poeti8",
    emoji: "🐬",
    country: "🇮🇷",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Developer",
      "Full Stack",
      "Designer",
      "JavaScript",
      "TypeScript",
      "React",
      "Node"
    ]
  },
  {
    name: "Jonathan Suh",
    description: "Designer, Developer, Sneakerhead",
    url: "https://jonsuh.com/uses",
    twitter: "@jonsuh",
    emoji: "👟",
    country: "🇺🇸",
    computer: "apple",
    phone: "iphone",
    tags: ["Designer", "Developer", "Front End", "JavaScript", "React"]
  },
  {
    name: "Jonathan Speek",
    description: "Developer & Musician",
    url: "https://speek.design/uses",
    twitter: "@jonspeek",
    emoji: "🦄",
    country: "🇺🇸",
    computer: "apple",
    phone: "iphone",
    tags: ["Full Stack", "Developer", "Front End", "JavaScript", "React"]
  },
  {
    name: "David O'Trakoun",
    description: "Software Engineer",
    url: "https://www.davidosomething.com/uses/",
    twitter: "@davidosomething",
    emoji: "⛄",
    country: "🇺🇸",
    computer: "linux",
    phone: "android",
    tags: ["Developer"]
  },
  {
    name: "Dean Harris",
    description:
      "Front End Developer. Husband. Skateboarder. Occasional blogger",
    url: "https://deanacus.com/uses/",
    twitter: "@deanacus",
    emoji: "🛹",
    country: "🇦🇺",
    computer: "apple",
    phone: "iphone",
    tags: ["Developer", "Font End", "JavaScript", "React", "Node", "PHP"]
  },
  {
    name: "Michael Hoffmann",
    description: "Freelance Software Engineer",
    url: "https://www.mokkapps.de/blog/my-development-setup/",
    twitter: "@mokkapps",
    emoji: "🍺",
    country: "🇩🇪",
    computer: "apple",
    phone: "iphone",
    tags: ["Developer", "Blogger", "Angular"]
  },
  {
    name: "Michael Le",
    description: "Software Engineer",
    url: "https://www.michael1e.com/uses/",
    twitter: "@michaelnle",
    emoji: "🤣",
    country: "🇺🇸",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Engineer",
      "Developer",
      "Full Stack",
      "Front End",
      "Entrepreneur",
      "JavaScript",
      "React",
      "Node",
      "Vue"
    ]
  },
  {
    name: "Sil van Diepen",
    description: "Creative Developer",
    url: "https://www.silvandiepen.nl/uses/",
    twitter: "@silvandiepen",
    emoji: "🐯",
    country: "🇳🇱",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Developer",
      "Designer",
      "Illustrator",
      "Photography",
      "Front End",
      "JavaScript",
      "Vue",
      "Node",
      "CSS",
      "Sass",
      "Design Systems"
    ]
  },
  {
    name: "Kilian Valkhof",
    description: "User experience developer",
    url: "https://kilianvalkhof.com/using/",
    twitter: "@kilianvalkhof",
    emoji: "🐧",
    country: "🇳🇱",
    computer: "linux",
    phone: "iphone",
    tags: [
      "Developer",
      "Designer",
      "Full stack",
      "Front end",
      "Entrepreneur",
      "JavaScript",
      "React",
      "Node",
      "Electron",
      "Polypane",
      "Devtools"
    ]
  },
  {
    name: "Timothy Miller",
    description: "Web Designer/Developer for hire. Wears lots of hats.",
    url: "https://timothymiller.dev/uses",
    twitter: "@WebInspectInc",
    emoji: "🥓",
    country: "🇺🇸",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Developer",
      "Designer",
      "Front End",
      "Full Stack",
      "Entrepreneur",
      "YouTuber",
      "JavaScript",
      "CSS",
      "PHP",
      "Blogger"
    ]
  },
  {
    name: "Christopher Hranj",
    description: "Software Engineer, Blogger, Musician, Ultimate player.",
    url: "https://brodan.biz/uses",
    twitter: "@brodan_",
    emoji: "🍁",
    country: "🇺🇸",
    computer: "apple",
    phone: "android",
    tags: ["Engineer", "Back End", "Blogger", "Python", "Crystal"]
  },
  {
    name: "Vincent Ramdhanie",
    description: "Software Developer, Lecturer, Technical Writer and Mentor",
    url: "https://vincentramdhanie.com/uses",
    emoji: "",
    country: "🇹🇹",
    computer: "apple",
    phone: "android",
    tags: [
      "Developer",
      "Full Stack",
      "Lecturer",
      "Mentor",
      "React",
      "Node",
      "Testing",
      "Machine Learning",
      "Python"
    ]
  },
  {
    name: "Amir R Muntasser",
    description:
      "Web Developer, #vuenicorn wizard, Oxford comma enthusiast, and inventor of the ol' razzle dazzle.",
    url: "https://arkm.xyz/uses/",
    twitter: "@arkmuntasser",
    emoji: "⚡️",
    country: "🇺🇸",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Front End",
      "JavaScript",
      "CSS",
      "HTML",
      "a11y",
      "Vue",
      "React",
      "Developer"
    ]
  },
  {
    name: "Pavel Melnik",
    description:
      "Web developer, Technology enthusiast, Energy Management System expert",
    url: "https://theopract.gitlab.io/pavel-dev/uses/",
    twitter: "@theopract",
    emoji: "🤟",
    country: "🇷🇺",
    computer: "windows",
    phone: "android",
    tags: [
      "Developer",
      "Front End",
      "Engineer",
      "JavaScript",
      "Vue",
      "SQL",
      "Accessibility",
      "Performance"
    ]
  },
  {
    name: "Miguel Ángel Durán",
    description:
      "Front end passionate, Web Performance freak, casual speaker, <WTFront! /> podcast host, and gamer.",
    url: "https://midu.dev/uses",
    twitter: "@midudev",
    emoji: "👾",
    country: "🇪🇸",
    computer: "apple",
    phone: "android",
    tags: [
      "Developer",
      "Front End",
      "Full Stack",
      "Engineer",
      "JavaScript",
      "TypeScript",
      "React",
      "Accessibility",
      "Performance",
      "Teacher",
      "YouTuber",
      "Node",
      "Speaker",
      "Podcaster",
      "Blogger"
    ]
  },
  {
    name: "David Llop",
    description:
      "Full stack developer from Girona. Open Source contributor. Always Learning.",
    url: "https://davidllop.com/uses",
    twitter: "@lloople",
    emoji: "🤨",
    country: "🇪🇸",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Developer",
      "Back End",
      "Full Stack",
      "Engineer",
      "PHP",
      "JavaScript",
      "Laravel",
      "Vue",
      "Chatbots",
      "API",
      "Blogger"
    ]
  },
  {
    name: "Josh Manders",
    description: "Full Snack Developer and Indie Maker",
    url: "https://joshmanders.com/uses/",
    twitter: "@joshmanders",
    emoji: "🌯",
    country: "🇺🇸",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Developer",
      "Full Stack",
      "Front End",
      "Back End",
      "Node",
      "React",
      "GraphQL"
    ]
  },
  {
    name: "Daniel Wirtz",
    description: "Designer who codes @Crisp Studio",
    url: "https://danielwirtz.com/uses/",
    twitter: "@wirtzdan",
    emoji: "🎨",
    country: "🇩🇪",
    computer: "apple",
    phone: "android",
    tags: ["Designer", "Entrepreneur"]
  },
  {
    name: "Harry Wolff",
    description: "Front-end engineer and YouTuber ",
    url: "https://hswolff.com/uses/",
    twitter: "@hswolff",
    emoji: "👨‍🎤",
    country: "🇺🇸",
    computer: "apple",
    phone: "iphone",
    tags: ["Engineer", "YouTuber", "Blogger", "Front End"]
  },
  {
    name: "James Mills",
    description:
      "Work with PHP & Laravel at @clicksco in Dubai. Pleased to be part of the Laravel community.",
    url: "https://jamesmills.co.uk/uses",
    twitter: "@jamesmills",
    emoji: "🖱",
    country: "🇦🇪",
    computer: "apple",
    phone: "iphone",
    tags: ["Developer", "Blogger", "Back End", "PHP", "Laravel", "Treeware"]
  },
  {
    name: "Jeffrey Way",
    description: "Laracasts Author",
    url: "https://laracasts.com/blog/laracasts-uses",
    twitter: "@jeffrey_way",
    emoji: "💻",
    country: "🇺🇸",
    computer: "apple",
    phone: "iphone",
    tags: ["Developer", "Designer", "Back End", "PHP"]
  },
  {
    name: "Terry Godier",
    description: "A developer and marketer of fine internet products.",
    url: "https://terrygodier.com/uses",
    twitter: "@terrygodier",
    emoji: "🇺🇸",
    country: "🇺🇸",
    computer: "apple",
    phone: "iphone",
    tags: ["Developer", "Marketer", "Writer", "PHP", "Laravel"]
  },
  {
    name: "Erno Salo",
    description: "Full Stack Developer and Open Source Contributor",
    url: "https://endormi.io/uses/",
    twitter: "@terrygodier",
    emoji: "🎮",
    country: "🇫🇮",
    computer: "windows",
    phone: "android",
    tags: [
      "Developer",
      "Designer",
      "Front End",
      "Back End",
      "JavaScript",
      "Python",
      "Node"
    ]
  },
  {
    name: "Gokulakrishnan Kalaikovan",
    description: "Web Developer, GDE, Open Source contributor, Speaker",
    url: "https://gokul.site/uses",
    twitter: "@gokul_i",
    emoji: "🤩",
    country: "🇮🇳",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Web Developer",
      "Open Source contributor",
      "Speaker",
      "GDE",
      "Front End"
    ]
  },
  {
    name: "James Brooks",
    description: "Software Developer at Laravel and Podcaster",
    url: "https://james.brooks.page/uses/",
    twitter: "@jbrooksuk",
    emoji: "👨🏻‍🚀",
    country: "🇬🇧",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Developer",
      "Back End",
      "PHP",
      "Blogger",
      "Full Stack",
      "Podcaster",
      "Vue",
      "JavaScript"
    ]
  },
  {
    name: "Byurhan Beyzat",
    description: "Front-End Developer. Engineer. Occasional blogger.",
    url: "https://byurhanbeyzat.com/uses",
    twitter: "@byurhanbeyzat",
    emoji: "🙌",
    country: "🇧🇬",
    computer: "apple",
    phone: "android",
    tags: [
      "Blogger",
      "Engineer",
      "Developer",
      "JavaScript",
      "Full Stack",
      "Front End",
      "Back End",
      "React"
    ]
  },
  {
    name: "Mike Barkmin",
    description:
      "I'm a passionate developer and researcher at the University of Duisburg-Essen at the chair of Computer Science Education.",
    url: "https://www.barkmin.eu/uses/",
    twitter: "@mikebarkmin",
    emoji: "🐧",
    country: "🇩🇪",
    computer: "linux",
    phone: "android",
    tags: [
      "Developer",
      "Full Stack",
      "Researcher",
      "Teacher",
      "Python",
      "Flask",
      "Docker",
      "JavaScript",
      "React",
      "Node"
    ]
  },
  {
    name: "Hugo Di Francesco",
    description:
      "JavaScript developer, blogger at codewithhugo.com, author of 'Professional JavaScript' with Packt.",
    url: "https://codewithhugo.com/uses/",
    twitter: "@hugo__df",
    emoji: "👓",
    country: "🇬🇧",
    computer: "apple",
    phone: "android",
    tags: [
      "Engineer",
      "Full Stack",
      "Blogger",
      "Author",
      "Python",
      "Docker",
      "Kubernetes",
      "Serverless",
      "JavaScript",
      "TypeScript",
      "React",
      "Vue",
      "Node"
    ]
  },
  {
    name: "Steve Heyes",
    description:
      "I like to use tech to build awesome things that makes peoples lives better",
    url: "https://steveheyes.co.uk/uses",
    twitter: "@mrsteveheyes",
    emoji: "👋",
    country: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Developer",
      "Full Stack",
      "Ruby",
      "Rails",
      "JavaScript",
      "React",
      "React Native"
    ]
  },
  {
    name: "Diego Vazquez",
    description:
      "Young guy who loves code. Full Stack Web Developer. Lead Teacher @ Ironhack",
    url: "https://gist.github.com/diurivj/78ca931c4b20dca1e1e13982fa9c309d",
    twitter: "@diurivj",
    emoji: "🌚",
    country: "🇲🇽",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Developer",
      "Full Stack",
      "Teacher",
      "JavaScript",
      "React",
      "Node",
      "Mongo DB"
    ]
  },
  {
    name: "Rafael Quintanilha",
    description:
      "Software Engineer. Blogs about Web Development, Front-end, React, UI/UX, Accessibility.",
    url: "https://rafaelquintanilha.com/about#uses",
    twitter: "@webquintanilha",
    emoji: "⚔️",
    country: "🇧🇷",
    computer: "linux",
    phone: "android",
    tags: [
      "Engineer",
      "Entrepreneur",
      "Front End",
      "JavaScript",
      "React",
      "Node",
      "Blogger"
    ]
  },
  {
    name: "Ben Leivian",
    description: "A “seasoned” full-stack developer & visual designer 🍔",
    url: "https://benleivian.com/uses",
    twitter: "@benleivian",
    emoji: "🍔",
    country: "🇺🇸",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Full Stack",
      "Developer",
      "Designer",
      "PHP",
      "JavaScript",
      "Laravel",
      "Vue",
      "Node",
      "Docker"
    ]
  },
  {
    name: "Roman Husar",
    description: "Tinkering, all the time.",
    url: "https://seemslikelegit.com/uses",
    twitter: "@seemslikelegit",
    emoji: "➰",
    country: "🇺🇦",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Software Engineer",
      "Full Stack",
      "JavaScript",
      "PostgreSQL",
      "React",
      "Node"
    ]
  },
  {
    name: "Stephen Senkomago Musoke",
    // Short description
    description:
      "Software Engineer, eHealth Technologist, PHP Lover by night, Muganda, Goat Meat for Life, Coffee Drinker",
    // URL to your /uses page
    url: "https://ssmusoke.com/uses",
    twitter: "@ssmusoke",
    // An emoji that describes you
    emoji: "🔥",
    // emoji of your country's flag
    country: "🇺🇬",
    // ONE of: apple, windows or linux
    computer: "apple",
    // iphone or android
    phone: "android",
    // Tags - You can add your own, but please keep it to one word. "Social vape entrepreneur influencer denver" isn't a tag.

    // Dev Tags: Engineer, Developer, Designer, Front End, Back End, Full Stack,
    // Other: Tags: Entrepreneur, Teacher, Podcaster, YouTuber, Blogger, Speaker,
    // Language Tags: JavaScript, PHP, Rails, Ruby, TypeScript, React, Vue, Node
    tags: ["Developer", "Engineer", "PHP", "Java", "OpenMRS", "HTML", "CSS"]
  },
  {
    name: "Jérémy Mouzin",
    description: "Software Engineer, Tutorial Maker, Entrepreneur, Blogger",
    url: "https://jeremymouzin.com/uses",
    twitter: "@jeremymouzin",
    emoji: "🐓",
    country: "🇫🇷",
    computer: "apple",
    phone: "android",
    tags: [
      "Engineer",
      "Full Stack",
      "Entrepreneur",
      "Teacher",
      "YouTuber",
      "Blogger",
      "JavaScript",
      "Node"
    ]
  },
  {
    name: "Adam Laycock",
    description: "IT Engineer, Web Developer & Blogger",
    url: "https://www.arcath.net/uses",
    twitter: "@arcathwhitefall",
    emoji: "⚙",
    country: "🇬🇧",
    computer: "windows",
    phone: "android",
    tags: [
      "Engineer",
      "Full Stack",
      "TypeScript",
      "Blogger",
      "JavaScript",
      "Node"
    ]
  },
  {
    name: "Scott Spence",
    description:
      "Father, husband 👨‍👩‍👧 Web Developer. Just In Time learner ❤️ 👍 http://my.pronoun.is/he",
    url: "https://scottspence.me#uses",
    twitter: "@spences10",
    emoji: "🙃",
    country: "🇬🇧",
    computer: "linux",
    phone: "android",
    tags: [
      "Developer",
      "YouTuber",
      "JavaScript",
      "React",
      "Gatsby",
      "Sloths",
      "Blogger",
      "Speaker"
    ]
  },
  {
    name: "Georgi Yanev",
    description: "Software Engineer, FPV Drone Pilot, Blogger, YouTuber",
    url: "https://gyanev.com/uses/",
    twitter: "@jumpalottahigh",
    emoji: "🚁",
    country: "🇫🇮",
    computer: "apple",
    phone: "android",
    tags: [
      "Engineer",
      "Full Stack",
      "Entrepreneur",
      "Teacher",
      "YouTuber",
      "Blogger",
      "JavaScript",
      "React",
      "Electron",
      "Python",
      "FPVtips",
      "Developer"
    ]
  },
  {
    name: "Karl Horky",
    description: "Founder, Teacher at https://upleveled.io",
    url: "https://github.com/karlhorky/uses/blob/master/readme.md",
    twitter: "@karlhorky",
    emoji: "🚀",
    country: "🇦🇹",
    computer: "apple",
    phone: "android",
    tags: [
      "Developer",
      "Full Stack",
      "Back End",
      "Front End",
      "Entrepreneur",
      "Teacher",
      "Speaker",
      "JavaScript",
      "TypeScript",
      "React",
      "Node",
      "CSS",
      "HTML",
      "GraphQL"
    ]
  },
  {
    name: "Josh Farrant",
    description:
      "Full-Stack JavaScript developer, creator of Shortcuts JS, astrophysicist and private pilot. I turn coffee, alchemy-like, into code.",
    url: "https://farrant.me/uses",
    twitter: "@joshfarrant",
    emoji: "🎉",
    country: "🇬🇧",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Developer",
      "Full Stack",
      "JavaScript",
      "TypeScript",
      "React",
      "Node",
      "UX",
      "Open Source"
    ]
  },
  {
    name: "Pedro Assunção",
    description: "Senior Fullstack Software Developer, Tutorial Maker, Blogger",
    url: "https://pedroassuncao.com/pages/uses",
    twitter: "@nocivus",
    emoji: "💻",
    country: "🇵🇹",
    computer: "apple",
    phone: "android",
    tags: [
      "Engineer",
      "Full Stack",
      "Developer",
      "Teacher",
      "YouTuber",
      "Blogger",
      "Ruby on Rails",
      "Elixir",
      "Phoenix",
      "Erlang",
      "React",
      "AWS"
    ]
  },
  {
    name: "Steven van Loef",
    description: "Web Developer, App Developer",
    url: "https://steven.vanloef.com/uses",
    twitter: "@ludolphus",
    emoji: "🎲",
    country: "🇳🇱",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Developer",
      "Full Stack",
      "Entrepreneur",
      "PHP",
      "C",
      "JavaScript",
      "CakePHP",
      "MySQL",
      "Node",
      "Front End",
      "Back End",
      "HTML",
      "CSS"
    ]
  },
  {
    name: "Richard Zilahi",
    description: "Full stack developer, pug enthusiast, dying for pizza",
    url: "https://gist.github.com/zilahir/4aaf5907999ea53711b2d554d22b0f3f",
    twitter: "@zilahy",
    emoji: "🐶",
    country: "🇫🇮",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Full Stack",
      "Engineer",
      "Teacher",
      "Blogger",
      "JavaScript",
      "Node",
      "TypeScript",
      "PHP",
      "React",
      "GraphQL",
      "GatsbyJs"
    ]
  },
  {
    name: "Bezael Pérez",
    description: "Front-end Developer passionate. Trainer & speaker",
    url: "https://dominicode.com/uses",
    twitter: "@bezael_dev",
    emoji: "👨🏻‍🚀",
    country: "🇩🇴",
    computer: "apple",
    phone: "android",
    tags: [
      "Developer",
      "Angular",
      "YouTuber",
      "TypeScript",
      "JavaScript",
      "CSS",
      "Node",
      "Teacher"
    ]
  },
  {
    name: "Zander Martineau",
    description: "Independent front-end-full-stack-UI-UX-engineer coder",
    url: "https://zander.wtf/writing/my-setup",
    twitter: "@mrmartineau",
    emoji: "👨‍🔬",
    country: "🇬🇧",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Engineer",
      "Front End",
      "Full Stack",
      "JavaScript",
      "TypeScript",
      "React",
      "Node",
      "CSS"
    ]
  },
  {
    name: "Daniel Van Cuylenburg",
    description:
      "Front-end Web Developer. Love all things CSS, ReactJS, GatsbyJS, NodeJS and U.I design",
    url: "https://danielvanc.com/uses",
    twitter: "@danielvanc",
    emoji: "🚀",
    country: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Developer",
      "Full Stack",
      "CSS",
      "Guitarist",
      "JavaScript",
      "React",
      "Gatsby"
    ]
  },
  {
    name: "Chiamaka Ikeanyi",
    description: "Software Engineer, Technical Writer, Poet",
    url: "https://chiamakaikeanyi.dev/uses",
    twitter: "@chiamakaikeanyi",
    emoji: "👩🏽‍💻",
    country: "🇳🇬",
    computer: "apple",
    phone: "android",
    tags: [
      "Engineer",
      "Front End",
      "Blogger",
      "JavaScript",
      "Accessibility",
      "Performance"
    ]
  },
  {
    name: "Francis Sunday",
    description: "Software Engineer | Gopher | Hacker",
    url: "https://hakaselogs.me/2020-01-10/what-i-use",
    twitter: "@codehakase",
    emoji: "🔥",
    country: "🇳🇬",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Developer",
      "Engineer",
      "Full Stack",
      "JavaScript",
      "PHP",
      "Go",
      "React",
      "Node",
      "Golang"
    ]
  },
  {
    name: "Jared Clifton-Lee",
    description: "Engineer of code; manager of people; trainer of cats",
    url: "https://jared.clifton-lee.com/uses",
    twitter: "@jaredcliftonlee",
    emoji: "☕",
    country: "🇺🇸",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Entrepreneur",
      "Manager",
      "Full Stack",
      "Engineer",
      "Ruby",
      "Rails",
      "Elixir",
      "Phoenix",
      "JavaScript",
      "React",
      "Node"
    ]
  },
  {
    name: "James Kemp",
    description: "Web Developer, Blogger, Freelancer",
    url: "https://www.jameskemp.dev/uses/",
    twitter: "@jkempdev",
    emoji: "💻",
    country: "🇺🇸",
    computer: "linux",
    phone: "android",
    tags: [
      "Engineer",
      "Full Stack",
      "Blogger",
      "React",
      "Rails",
      "JavaScript",
      "Node"
    ]
  },
  {
    name: "Tom Hazledine",
    description:
      "Data visualisation tinkerer and JS enthusiast. Podcaster. Nerd.",
    url: "https://tomhazledine.com/uses",
    twitter: "@thomashazledine",
    emoji: "🥩",
    country: "🇬🇧",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Developer",
      "Front End",
      "JavaScript",
      "React",
      "Node",
      "CSS",
      "Podcaster"
    ]
  },
  {
    name: "Mihai Serban",
    description:
      "Software engineer in constant search for new and exciting technologies",
    url: "https://www.mihaiserban.dev/uses",
    twitter: "@MihaiSerban",
    emoji: "✌️",
    country: "🇷🇴",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Engineer",
      "Full Stack",
      "Entrepreneur",
      "JavaScript",
      "React",
      "Node",
      "CSS",
      "Vue",
      "iOS"
    ]
  },
  {
    name: "Nick Janetakis",
    description:
      "Freelance Web Developer, Web App Deployment, Tutorials, Technical death metal enthusiast",
    url: "https://nickjanetakis.com/uses",
    twitter: "@nickjanetakis",
    emoji: "👀",
    country: "🇺🇸",
    computer: "windows",
    phone: "android",
    tags: [
      "Developer",
      "Full Stack",
      "Freelancer",
      "Teacher",
      "YouTuber",
      "Flask",
      "Phoenix",
      "Docker",
      "DevOps"
    ]
  },
  {
    name: "Kaleigh Scruggs",
    description:
      "Front-End Web Developer, stand-up comedian, loves Brazilian jiu-jitsu, tea, and being a helicopter dog mom",
    url: "https://kaleighscruggs.com/uses",
    twitter: "@kaleighscruggs",
    emoji: "🐞",
    country: "🇺🇸",
    computer: "apple",
    phone: "android",
    tags: [
      "Developer",
      "Front End",
      "Blogger",
      "JavaScript",
      "React",
      "WordPress",
      "CSS",
      "Full Stack"
    ]
  },
  {
    name: "Ste Grainer",
    description: "Designer, Developer",
    url: "https://stegrainer.com/uses",
    twitter: "@stegrainer",
    emoji: "🐉",
    country: "🇺🇸",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Designer",
      "Developer",
      "Front End",
      "Accessibility",
      "CSS",
      "Craft CMS",
      "Blogger",
      "Design Systems",
      "JavaScript"
    ]
  },
  {
    name: "José Carlos Correa",
    description:
      "Fullstack developer and speaker. Lead teacher @ironhack and gatsby teacher @platzi. Learning all the time.",
    url: "https://jossdz.com/uses",
    twitter: "@jossdz",
    emoji: "🤘",
    country: "🇲🇽",
    computer: "apple",
    phone: "android",

    tags: [
      "Developer",
      "Full Stack",
      "GraphQL",
      "Teacher",
      "Speaker",
      "JavaScript",
      "React",
      "Node",
      "CSS"
    ]
  },
  {
    name: "Erv Walter",
    description: "Father, Husband, Web Developer, Board Game Addict",
    url: "https://blog.ewal.net/uses/",
    twitter: "@ervwalter",
    emoji: "🎲",
    country: "🇺🇸",
    computer: "windows",
    phone: "iphone",
    tags: [
      "Developer",
      "Full Stack",
      "TypeScript",
      "React",
      "C#",
      ".NET Core",
      "Azure"
    ]
  },
  {
    name: "Juanito Fatas",
    description: "Program Tinker 🧙🏼‍♂️",
    url: "https://juanitofatas.com/uses",
    twitter: "@juanitofatas",
    emoji: "🐻",
    country: "🇯🇵",
    computer: "apple",
    phone: "iphone",
    tags: ["Think", "Apply"]
  },
  {
    name: "Elliot Bonneville",
    description:
      "Freelance Web Developer / Consultant, educator, lover of coffee, cats, and writing of all kinds.",
    url: "https://elliotbonneville.com/uses",
    twitter: "@elliotbnvl",
    emoji: "💀",
    country: "🇺🇸",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Developer",
      "Full Stack",
      "Entrepreneur",
      "Teacher",
      "Blogger",
      "YouTuber",
      "JavaScript",
      "TypeScript",
      "Node",
      "React",
      "Node",
      "CSS"
    ]
  },
  {
    name: "John Garrett",
    description: "Arch Duke of Computering, Full Stack Instructor",
    url: "https://johngarrett.dev/uses",
    twitter: "@jhgarrett",
    emoji: "👨🏻‍🚀",
    country: "🇺🇸",
    computer: "linux",
    phone: "iphone",
    tags: [
      "Developer",
      "Full Stack",
      "React",
      "Teacher",
      "Linux",
      "JavaScript",
      "PHP",
      "C",
      "DevOps"
    ]
  },
  {
    name: "Dieter Stinglhamber",
    description: "Developer, human, nerd.",
    url: "https://www.dieterstinglhamber.me/uses/",
    twitter: "@elhebert",
    emoji: "🎲",
    country: "🇧🇪",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Developer",
      "JavaScript",
      "PHP",
      "Laravel",
      "TypeScript",
      "Node",
      "Vue",
      "Full Stack"
    ]
  },
  {
    name: "Dany Paredes",
    description:
      "I was a .NET guy, my last years ❤️ { #js & #sass } and play[ #react #vue #angular #sveltejs]",
    url: "https://danywalls.com/uses",
    twitter: "@danywalls",
    emoji: "🏀",
    country: "🇩🇴",
    computer: "linux",
    phone: "iphone",
    tags: ["Developer", ".NET", "Typescript", "Javascript", "Sass"]
  },
  {
    name: "Thomas Weibenfalk",
    description:
      "Passionate developer, course creator, youtuber, designer and musician from Sweden",
    url: "https://www.weibenfalk.com/uses/",
    twitter: "@weibenfalk",
    emoji: "💾",
    country: "🇸🇪",
    computer: "apple",
    phone: "iphone",
    tags: [
      "JavaScript",
      "Developer",
      "Entrepreneur",
      "React",
      "Teacher",
      "Writer",
      "YouTuber"
    ]
  },
  {
    name: "David Leuliette",
    description:
      "Freelance React Native developer and bootcamp instructor specializing in cross-platform application.",
    url: "https://davidl.fr/uses",
    twitter: "@flexbox_",
    emoji: "⚡",
    country: "🇫🇷",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Engineer",
      "Designer",
      "Front End",
      "Entrepreneur",
      "Teacher",
      "Speaker",
      "JavaScript",
      "TypeScript",
      "React",
      "CSS",
      "GraphQL"
    ]
  },
  {
    name: "Dave Berning",
    description:
      "Developer, author, rocker, Nintendo enthusiast. I also co-organize the CodePen Cincinnati Meetups.",
    url: "https://daveberning.io/uses/",
    twitter: "@daveberning",
    emoji: "🦄",
    country: "🇺🇸",
    computer: "apple",
    phone: "iphone",
    tags: [
      "JavaScript",
      "Typescript",
      "HTML",
      "CSS",
      "Vue",
      "Developer",
      "Writer"
    ]
  },
  {
    name: "Jan-Lukas Else",
    description: "Computer Science Student, Developer & Blogger from Germany",
    url: "https://jlelse.dev/uses/",
    twitter: "@jlelse",
    emoji: "🤓",
    country: "🇩🇪",
    computer: "linux",
    phone: "android",
    tags: ["Student", "Developer", "Blogger"]
  },
  {
    name: "Seyhun Akyürek",
    description:
      "Senior Software Specialist. Swift, Objective-C, former Rubyist. Author of twitter-bootstrap-rails",
    url: "https://www.seyhunakyurek.com/uses/",
    twitter: "@seyhunak",
    emoji: "🚀",
    country: "🇹🇷",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Developer",
      "Entrepreneur",
      "Swift",
      "Objective-C",
      "Ruby On Rails",
      "Open Source",
      "Blogger"
    ]
  },
  {
    name: "Eric Oyanadel",
    description: "Artist - Developer - Musician",
    url: "https://www.oyanadel.com/uses/",
    twitter: "@EricOyanadel",
    emoji: "🌻",
    country: "🇨🇱",
    computer: "apple",
    phone: "iphone",
    tags: ["Javascript", "React", "Node", "Design", "Full Stack", "Writer"]
  },
  {
    name: "Usman Khwaja",
    description: "Front end engineer, Jamstack developer",
    url: "https://usmankhwaja.com/uses",
    twitter: "@numbfall",
    emoji: "⛵",
    country: "🇵🇰",
    computer: "windows",
    phone: "android",
    tags: ["Developer", "Engineer", "Jamstack", "JavaScript", "AMP", "CSS"]
  },
  {
    name: "Thomas Large",
    description: "My name is Tom! I write code",
    url: "https://tomlarge.dev/uses",
    emoji: " 👨‍💻",
    country: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Developer",
      "Full Stack",
      "Ruby on Rails",
      "JavaScript",
      "React",
      "React Native",
      "TypeScript",
      "Wordpress",
      "DevOps",
      "Node",
      "GraphQL"
    ]
  },
  {
    name: "Amit Merchant",
    description: "Maker of things. Open-source enthusiast. Blogger. ",
    url: "https://www.amitmerchant.com/uses",
    twitter: "@amit_merchant",
    emoji: "🔥",
    country: "🇮🇳",
    computer: "linux",
    phone: "android",
    tags: [
      "Developer",
      "Full Stack",
      "Entrepreneur",
      "Blogger",
      "JavaScript",
      "React",
      "PHP",
      "Laravel",
      "CSS"
    ]
  },
  {
    name: "Junaid Qadir",
    description: "A Full Stack #Laravel Developer",
    url: "https://junaidqadir.com/uses",
    twitter: "@junaidqadirb",
    emoji: "⌨",
    country: "🇨🇦",
    computer: "linux",
    phone: "android",
    tags: [
      "Blogger",
      "Developer",
      "Full Stack",
      "Laravel",
      "PHP",
      "JavaScript",
      "VueJS",
      "React",
      "CSS"
    ]
  },
  {
    name: "Yurui Zhang",
    description:
      "Full-stack developer. Dark mode enthusiast. Quality software devotee.",
    url: "https://gist.github.com/pallymore/6e12133b5c2fa2856a8a6b288e579c01",
    twitter: "@yuruiology",
    emoji: "🐙",
    country: "🇨🇳",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Developer",
      "Full Stack",
      "JavaScript",
      "TypeScript",
      "React",
      "Node",
      "CSS",
      "Ruby",
      "Testing"
    ]
  },
  {
    name: "Eduardo Reveles",
    description: "Web Engineer, Husband, Gamer.",
    url: "https://www.osiux.ws/about/uses",
    twitter: "@osiux",
    emoji: "🐈",
    country: "🇲🇽",
    computer: "linux",
    phone: "android",
    tags: ["Developer", "Full Stack", "PHP", "JavaScript", "Laravel", "React"]
  },
  {
    name: "Thomas Maximini",
    description: "Freelance software developer from Germany.",
    url: "https://www.maxi.io/uses/",
    twitter: "@tmaximini",
    emoji: "🐍",
    country: "🇩🇪",
    computer: "apple",
    phone: "iphone",
    tags: [
      "JavaScript",
      "React",
      "Blogger",
      "GraphQL",
      "serverless",
      "Node",
      "Full Stack"
    ]
  },
  {
    name: "Philip Theobald",
    description: "Guitar player, motorcyclist, software engineer, entreprenuer",
    url: "https://www.philiptheobald.com/uses/",
    twitter: "@fylzero",
    emoji: "🤑",
    country: "🇺🇸",
    computer: "apple",
    phone: "android",
    tags: ["Software Engineer", "Laravel", "Vue", "WordPress"]
  },
  {
    name: "Alejandro G. Anglada",
    description:
      "Dad 👪🔥⚡️ Web Engineer ⚛️🚀 #typescript all over the place 👌",
    url: "https://aganglada.com/uses/",
    twitter: "@aganglada",
    emoji: "🔥",
    country: "🇪🇸",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Engineer",
      "Front End",
      "Mentor",
      "YouTuber",
      "Writer",
      "JavaScript",
      "TypeScript",
      "Performance",
      "PWA",
      "React",
      "Node",
      "CSS"
    ]
  },
  {
    name: "Antoni Kepinski",
    description: "Node Fetch maintainer // Into Node.js and Rust",
    url: "https://kepinski.me/uses/",
    twitter: "@dokwadratu",
    emoji: "⚡",
    country: "🇵🇱",
    computer: "linux",
    phone: "iphone",
    tags: ["JavaScript", "Developer", "TypeScript", "React", "Rust", "Node"]
  },
  {
    name: "Marcus Obst",
    description: "Webdeveloper, Music Lover",
    url: "https://marcus-obst.de/uses",
    emoji: "🍊",
    country: "🇩🇪",
    computer: "windows",
    phone: "iphone",
    tags: ["Developer", "Full Stack", "PHP", "JavaScript", "CSS", "Vue"]
  },
  {
    name: "Pawel Grzybek",
    description: "Software Engineer",
    url: "https://pawelgrzybek.com/uses/",
    twitter: "@pawelgrzybek",
    emoji: "🥑",
    country: "🇵🇱",
    computer: "apple",
    phone: "iphone",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node",
      "Software Engineer",
      "Front End",
      "Back End",
      "Full Stack",
      "Blogger"
    ]
  },
  {
    name: "Eric McCormick",
    description:
      "Software Developer, IBM Champion, coffee lover, dabbler in all things technology, hobbyist 3d design and printing",
    url: "https://edm00se.codes/uses/",
    twitter: "@edm00se",
    emoji: "🤔",
    country: "🇺🇸",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Developer",
      "Full Stack",
      "Blogger",
      "Speaker",
      "YouTuber",
      "JavaScript",
      "Vue",
      "Node",
      "CSS"
    ]
  },
  {
    name: "Ben Congdon",
    description: "Golang, Python, Rust. Runs in the Cloud.",
    url: "https://benjamincongdon.me/uses",
    twitter: "@BenRCongdon",
    emoji: "🤷‍♂️",
    country: "🇺🇸",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Developer",
      "Engineer",
      "Go",
      "Rust",
      "Serverless",
      "Python",
      "JavaScript",
      "React"
    ]
  },
  {
    name: "Jens van Wijhe",
    description: "Creative web developer and entrepreneur",
    url: "https://jens.ai/uses",
    twitter: "@jvanwijhe",
    emoji: "👨🏻‍🚀",
    country: "🇳🇱",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Developer",
      "Full Stack",
      "JavaScript",
      "Vue",
      "Angular",
      "Ionic",
      "Firebase",
      "PHP",
      "Laravel",
      "Wordpress",
      "CSS",
      "Tailwind"
    ]
  },
  {
    name: "Jacob Herper",
    description:
      "Senior Front-End Engineer with a passion for all things digital. I create amazing web apps to make the internet a better place.",
    url: "https://herper.io/uses/",
    twitter: "@jakeherp",
    emoji: "👨‍💻",
    country: "🇬🇧",
    computer: "apple",
    phone: "iphone",
    tags: [
      "JavaScript",
      "React",
      "Gatsby",
      "Front End",
      "Engineer",
      "TypeScript",
      "Performance",
      "Entrepreneur"
    ]
  },
  {
    name: "Ryan Warner",
    description: "Software Engineer and Interface Designer. Leader and Mentor.",
    url: "https://ryan.warner.codes/uses",
    emoji: "😄",
    country: "🇺🇸",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Engineer",
      "Designer",
      "Entrepreneur",
      "JavaScript",
      "React",
      "Gatsby",
      "Firebase",
      "Node",
      "CSS"
    ]
  },
  {
    name: "Adam Urban",
    description: "coder, father, left-handed",
    url: "https://urbanisierung.dev/uses/",
    twitter: "@urbanisierung",
    emoji: "🚀",
    country: "🇩🇪",
    computer: "linux",
    phone: "iphone",
    tags: [
      "Engineer",
      "Full Stack",
      "Designer",
      "TypeScript",
      "Angular",
      "Node",
      "i3",
      "Serverless",
      "GCP"
    ]
  },
  {
    name: "Majo Paskuvan",
    description: "Front End Developer, Reader, Deaf Person",
    url: "https://paskuvan.us/uses.html",
    twitter: "@paskuvan",
    emoji: "🤟",
    country: "🇨🇱",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Ruby On Rails",
      "Frontend",
      "UI Design",
      "Web Development",
      "UX",
      "Blogger",
      "Designer"
    ]
  },
  {
    name: "Christopher Wavrin",
    description: "Full Stack Developer",
    url: "https://wavrin.com/uses",
    twitter: "@wavrin",
    emoji: "🤨",
    country: "🇺🇸",
    computer: "apple",
    phone: "iphone",
    tags: ["Ruby On Rails", "Vue.js", "Web Development", "Full Stack", "AWS"]
  },
  {
    name: "Florian Kapfenberger",
    description:
      "Frontend developer from Austria who likes to create modern applications with React (Native)",
    url: "https://phiilu.com/uses",
    twitter: "@phiilu",
    emoji: "🐢",
    country: "🇦🇹",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Developer",
      "Front End",
      "Full Stack",
      "JavaScript",
      "Blogger",
      "React",
      "Gatsby"
    ]
  },
  {
    name: "Nick Taylor",
    description: "Just some dev from Montreal, Quebec, Canada",
    url: "https://www.iamdeveloper.com/uses/",
    twitter: "@nickytonline",
    emoji: "🔥",
    country: "🇨🇦",
    computer: "apple",
    phone: "iphone",
    tags: [
      "JavaScript",
      "Developer",
      "React",
      "Writer",
      "TypeScript",
      "Node",
      "CSS"
    ]
  },
  {
    name: "Logan Blangenois",
    description:
      "Front-end developer passionate about eco-frienldy (web)app and React.",
    url: "https://logan-blangenois.be/uses/",
    twitter: "@loganblangenois",
    emoji: "🧑🏻‍💻",
    country: "🇧🇪",
    computer: "apple",
    phone: "iphone",
    tags: [
      "Front End",
      "Developer",
      "JavaScript",
      "React",
      "GraphQL",
      "Gatsby",
      "HTML",
      "CSS",
      "Sass",
      "Performance"
    ]
  }
];

export default pages;
// Times out
// {
//   name: 'Troy Forster',
//   description: 'Consulting Technology Director and CTO for Hire',
//   url: 'https://tforster.com/uses',
//   twitter: '@tforster',
//   emoji: '',
//   country: '🇨🇦',
//   computer: 'windows',
//   phone: 'android',
//   tags: [
//     'Engineer',
//     'Back End',
//     'Front End',
//     'Consultant',
//     'Entrepreneur',
//     'JavaScript',
//     'C#',
//     'PHP',
//     'Serverless',
//     'SOA',
//     'Enterprise',
//   ],
// },

// Times out
// {
//   name: 'Carlos Andres Charris Sandoval',
//   description: 'Software Engineer',
//   url: 'https://carloscharris.com/uses',
//   twitter: '@Darkklitos',
//   emoji: '🔥',
//   country: '🇨🇴',
//   computer: 'apple',
//   phone: 'android',
//   tags: [
//     'Developer',
//     'Full Stack',
//     'JavaScript',
//     'TypeScript',
//     'Angular',
//     'Vue',
//     'React',
//     'Node',
//     'Java',
//     'Docker',
//     'Serverless',
//   ],
// },

// Times out
// {
//   name: 'Carlos Junod',
//   description:
//     'Husband, Dreamer, Full Stack Developer, Javascript passionate, Graphic Designer',
//   url: 'http://carlosjunod.me/uses/',
//   twitter: '@carlosjunod',
//   emoji: '🥑',
//   country: '🇨🇱',
//   computer: 'apple',
//   phone: 'iphone',
//   tags: [
//     'Developer',
//     'Full Stack',
//     'React',
//     'Designer',
//     'Entrepreneur',
//     'JavaScript',
//     'Node',
//     'CSS',
//     'HTML',
//   ],
// },

// No /uses page
// {
//   name: 'Hussain Aminu',
//   description: 'Web Developer, Data Scientist',
//   url: 'https://hussain4real.github.io/Portfolio/uses',
//   twitter: '@hussain4real',
//   emoji: '🔥',
//   country: '🇳🇬',
//   computer: 'windows',
//   phone: 'android',
//   tags: [
//     'Developer',
//     'Full Stack',
//     'Data Science',
//     'JavaScript',
//     'Python',
//     'Vue',
//     'Node',
//     'Django',
//   ],
// },

// No /uses page
// {
//   name: 'Sanket Gandhi',
//   description: 'Software Engineer',
//   url: 'https://sanketgandhi.com/uses',
//   twitter: '@sanketgandhi876',
//   emoji: '🔥',
//   country: '🇮🇳',
//   computer: 'apple',
//   phone: 'android',
//   tags: [
//     'Developer',
//     'Full Stack',
//     'PHP',
//     'Laravel',
//     'AWS',
//     'JavaScript',
//     'React',
//     'Node',
//   ],
// },

// No /uses page
// {
//   name: 'Martin Chammah',
//   description: 'Full Stack Gatsby Developer @ ecomerciar',
//   twitter: '@codigomate',
//   url: 'https://martinchammah.dev/uses',
//   emoji: '🇦🇷',
//   country: '🇦🇷',
//   computer: 'windows',
//   phone: 'android',
//   tags: [
//     'Developer',
//     'Full Stack',
//     'Entrepreneur',
//     'YouTuber',
//     'JavaScript',
//     'Gatsby',
//     'React',
//     'Wordpress',
//     'Thinkpad',
//   ],
// },

// No /uses page
// {
//   name: 'Richard Palacios G.',
//   description: 'Web Developer, passionate apprentice, Community co-organizer',
//   url: 'https://www.richardpalaciosg.dev/uses',
//   twitter: '@rpalaciosg_',
//   emoji: '⚡',
//   country: '🇪🇨',
//   computer: 'linux',
//   phone: 'android',
//   tags: [
//     'Developer',
//     'JavaScript',
//     'Front End',
//     'BackEnd',
//     'Community',
//     'Node',
//     'React',
//   ],
// },

// No /uses page
// {
//   name: 'Marek Racík',
//   description: 'Full Stack Developer',
//   url: 'https://racik.info/uses',
//   twitter: '@marek_racik',
//   emoji: '🍍',
//   country: '🇸🇰',
//   computer: 'apple',
//   phone: 'iphone',
//   tags: [
//     'Web Developer',
//     'Full Stack',
//     'Laravel',
//     'Vue',
//     'Tailwind',
//     'Django',
//     'Python',
//     'PHP',
//     'JavaScript',
//   ],
// },

// No /uses page
// {
//   name: 'Oscar Sánchez',
//   description: 'Passionate developer, traveler and drummer from Perú',
//   url: 'https://devlusaja.com',
//   twitter: '@dev_lusaja',
//   emoji: '💻🛩💪',
//   country: '🇵🇪',
//   computer: 'linux',
//   phone: 'android',
//   tags: [
//     'Developer',
//     'Software Architect',
//     'Python',
//     'PHP',
//     'Docker',
//     'Graphql',
//     'AWS',
//     'Open Source',
//   ],
// },

// No /uses page
// {
//   name: 'Khriztian Moreno',
//   description:
//     '#Javascript Developer 🥑& Community builder 👨🏻‍💻♥️👨🏻‍🏫 | #MDE at @cloudinary | Producer @commitfm 🎙📻 | Co-Organize of @MedellinJS @avanetr',
//   url: 'https://khriztianmoreno.dev/uses',
//   twitter: '@khriztianmoreno',
//   emoji: '👨🏼‍💻',
//   country: '🇨🇴',
//   computer: 'apple',
//   phone: 'iphone',
//   tags: [
//     'Developer',
//     'JavaScript',
//     'React',
//     'Front End',
//     'React',
//     'Blogger',
//     'Speaker',
//     'Podcaster',
//     'Community',
//     'JAMstack',
//     'YouTuber',
//   ],
// },

// No /uses page
// {
//   name: 'Yuri Yakovlev',
//   description:
//     'Maker of this site. Web Developer, Tutorial Maker, Podcaster, BBQ Lover',
//   url: 'https://mynameisyuri.com/uses',
//   twitter: '@yakovlevyuri',
//   emoji: '🧙‍♂️',
//   country: '🇨🇿',
//   computer: 'apple',
//   phone: 'iphone',
//   tags: [
//     'Developer',
//     'Full Stack',
//     'Serverless',
//     'JavaScript',
//     'TypeScript',
//     'React',
//     'Node',
//     'GraphQL',
//   ],
// },

// Empty /uses page
// {
//   name: 'Ændrew Rininsland',
//   description: 'Developer-Journalist',
//   url: 'https://aendrew.com/uses',
//   twitter: '@aendrew',
//   emoji: '💚',
//   country: '🏳️‍🌈',
//   computer: 'apple',
//   phone: 'android',
//   tags: [
//     'Developer',
//     'DataViz',
//     'JavaScript',
//     'TypeScript',
//     'Node',
//     'Python',
//     'Author',
//     'Journalist',
//     'Speaker',
//     'Front-End',
//     'React',
//     'D3',
//   ],
// },

// Weird redirect to YouTube Video
// {
//   name: 'Juan Manuel Incaurgarat',
//   description: 'Front end developer',
//   url: 'https://kilinkis.me/uses',
//   twitter: '@kilinkis',
//   emoji: '🏀',
//   country: '🇦🇷',
//   computer: 'apple',
//   phone: 'android',
//   tags: ['React', 'WordPress', 'Gatsby', 'JavaScript', 'Node'],
// },
