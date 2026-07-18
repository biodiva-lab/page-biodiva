// BioDiVa Lab — behavior: language toggle, mobile menu, network list rendering.
'use strict';

const TRANSLATIONS = {
  en: {
    brandSub: 'Laboratory of (bio)diversity in the Anthropocene',
    nav: { about: 'About', research: 'Research', how: 'How it works', network: 'Network', coord: 'Coordination', contact: 'Contact' },
    labels: { about: 'About the lab', mission: 'Mission', research: 'Research lines', how: 'How does it works?', values: 'Values', network: 'Collaborative network', coord: 'Coordination', countries: 'Across the world' },
    heroBefore: 'A decentralized model for collaborative ',
    heroColored: 'biodiversity science',
    heroAfter: ' across borders',
    heroCta: 'Learn more',
    about: {
      p1: 'The BioDivA Lab is a decentralized and collaborative research network designed to transform how biodiversity science is produced, shared, and applied.',
      p2: 'The lab connects researchers across institutions, countries, and career stages to co-develop projects in ecology, evolution, and conservation.'
    },
    mission: 'To promote a diverse, inclusive, and healthier scientific community, compromised with open, ethical, and transparent science production and the construction of a collaborative and transdisciplinary network to fight the complex challenges from the Anthropocene.',
    research: [
      'The Impacts of human activities on natural and human systems',
      'Science Governance and Diplomacy',
      'Ethnobiology and Society-Nature relationship: a transdisciplinary approach to environmental conservation'
    ],
    principles: ['Flexibility', 'Communication', 'Support', 'Respectful environment', 'Passion', 'Humanized mentorship'],
    howHub: 'Collaborative science',
    values: [
      'Intersectionality and social sensitivity',
      'Global Collaboration and Transdisciplinarity',
      'Innovation and Creativity',
      'Education and Science Outreach',
      'Inclusion and Equal Opportunities',
      'Compromise with and Equal and Sustainable World'
    ],
    win: {
      structure: 'This structure enables the integration of diverse expertise and perspectives while promoting scientific inclusivity, training, and equitable participation in research.',
      outcomes: ['Better work and learning experiences', 'New research perspectives', 'Better opportunities for all people involved', 'Encouraging more people to work with science'],
      center: 'EVERYONE WINS!',
      note: 'To build a more inclusive Science, we need diverse mentor networks.'
    },
    coord: {
      role: 'Coordination',
      bio: 'Biologist and researcher in ecology, conservation and biodiversity in the Anthropocene, and an advocate for open, inclusive and diverse science. She founded and coordinates the BioDiVa Lab and its collaborative research network.',
      cv: 'View Lattes CV'
    },
    contact: { title: 'Contact' },
    footer: { line: 'BioDiVa Lab — (bio)diversity in the Anthropocene.' },
    countries: ['Brazil', 'United States', 'Colombia', 'Croatia', 'Guatemala', 'Canada', 'Germany', 'India', 'Iraq', 'Cameroon', 'Mexico', 'Argentina', 'Chile', 'Puerto Rico', 'Syria', 'South Africa', 'Australia', 'Portugal', 'United Kingdom', 'Pakistan'],
    team: {
      title: 'The people of the network',
      filterAll: 'All',
      lines: ['Human Impacts', 'Science Governance', 'Ethnobiology'],
      lattes: 'Lattes CV',
      empty: 'No researcher found for this filter.',
      people: {
        "aida-p-giozza": {
          "affiliation": "Undergraduate program in Biodiversity, Institute of Biosciences, Humanities and Exact Sciences, São Paulo State University (UNESP), São José do Rio Preto campus, SP, Brazil. Laboratory of Ecology and Evolution (LEEv), Butantan Institute, São Paulo, SP, Brazil.",
          "title": "Effects of climate change on South American pit vipers",
          "desc": "I study the effects of climate change on South American pit vipers through ecological niche modeling."
        },
        "ana-leticia-dos-santos-lima": {
          "role": "Doutorando (phd student)",
          "affiliation": "Postgraduate program in ecology: theories, applications, and values; Biology Institute, Federal University of Bahia, Salvador, Bahia, Brazil.",
          "title": "Bees in urban areas: the landscape and its influence on community structure",
          "desc": "To analyze the influence of the urban landscape on bee communities and on the structure of bee-plant interaction networks.",
          "formacao": "Bachelor's degree in Biological Sciences, Master's degree in Ecology and Evolution"
        },
        "andre-nunes": {
          "affiliation": "Research Fellow (DTI-B/CNPq); Laboratory of Ecology and Conservation (LABECO), Biological Sciences Institute, Federal University of Pará (UFPA), Belém, Pará, Brazil",
          "title": "Conservation Solutions for Herpetofauna in the Pan-Amazon: Climate Emergency and the Future of Species",
          "desc": "This research proposes practical and integrated conservation solutions to protect pan-Amazonian herpetofauna biodiversity from environmental collapses caused by the climate crisis."
        },
        "beatriz-hormanseder": {
          "role": "Collaborating researcher",
          "desc": "Uses three-dimensional methodologies for research, curation, and digital preservation of geopaleontological heritage, integrating 3D technologies into science communication in Paleontology.",
          "formacao": "Bachelor's degree in Biological Sciences"
        },
        "camila-sant-anna": {
          "role": "Collaborating researcher"
        },
        "caroline-tito": {
          "role": "Doutorando (phd student)",
          "affiliation": "Postgraduate program in ecology: theories, applications, and values; Biology Institute, Federal University of Bahia, Salvador, Bahia, Brazil.",
          "title": "Structure of solitary bee and wasp communities (Hymenoptera: Aculeata) nesting in pre-existing cavities, their functional groups and the properties of antagonistic relationships, characterizing this community along an urbanization gradient",
          "desc": "To analyze how urbanization affects the structure, functions, and ecological relationships of solitary bee and wasp communities that use trap-nests."
        },
        "charles-vinicius-de-jesus-braga": {
          "role": "Collaborating researcher",
          "affiliation": "Department of Biological Sciences, Santa Cruz State University, Ilhéus, Bahia, Brazil.",
          "formacao": "Undergraduate student in Biological Sciences (in progress)"
        },
        "damares-soares": {
          "role": "Doutorando (phd student)",
          "affiliation": "Postgraduate program in ecology: theories, applications, and values; Biology Institute, Federal University of Bahia, Salvador, Bahia, Brazil.",
          "title": "Impact of climate change on Atlantic Forest birds of prey: refuge, migration, and predation",
          "desc": "How climate change impacts, or may impact, birds of prey.",
          "formacao": "Biological Sciences"
        },
        "denis-bruno-santos-marques-nunes": {
          "role": "Collaborating researcher",
          "affiliation": "None at the moment",
          "title": "To be defined",
          "desc": "To be defined"
        },
        "fabiola-vieira": {
          "role": "Doutorando (phd student)",
          "affiliation": "Postgraduate Program in Animal Science; School of Veterinary Medicine, Federal University of Minas Gerais (UFMG), Belo Horizonte, Minas Gerais, Brazil. Research focus: One Health and conservation, Indigenous communities, and Chiroptera.",
          "title": "Viral zoonotic potential in bats from the Belo Horizonte Zoonosis Control Center and Maxakali cosmoperception: intersections among One Health, conservation, and ethnozoology",
          "desc": "My research focuses on the interfaces between One Health, conservation, and ethnozoology, exploring the relationships between bats, the Maxakali people, and society at large."
        },
        "fernanda-melo-gomes": {
          "role": "Pesquisador(a) de pós-doutorado (postdoctoral scholar)",
          "affiliation": "Postdoctoral Researcher in Ethnobotany; Biology Institute, Federal University of Bahia, Salvador, Bahia, Brazil.",
          "title": "Ethnobotany of traditional communities in Brazil: strategies facing climate change from the perspective of basic education",
          "desc": "My research investigates the ethnobotanical knowledge and practices of traditional communities, seeking to understand their relationships with biodiversity and climate change and to contribute to their appreciation within basic education."
        },
        "hugo-andrade": {
          "role": "Pesquisador(a) de pós-doutorado (postdoctoral scholar)",
          "affiliation": "Junior Postdoctoral Researcher, Federal University of Sergipe, Sergipe, Brazil.",
          "title": "Too hot to hop: thermal ecophysiology of amphibians under climate change scenarios",
          "desc": "I seek to understand the determining factors for the occurrence and distribution of reptiles across different scales and climate scenarios."
        },
        "joao-pedro-ramos-couto": {
          "role": "IC (undergraduate research)",
          "affiliation": "Undergraduate student in Biology Teaching; Biology Institute, Federal University of Bahia, Salvador, Bahia, Brazil.",
          "title": "Routes and Refuges: Predicting the Future of Shorebirds under Climate Change",
          "desc": "To define climatic refuges for migratory shorebirds through niche modeling.",
          "formacao": "Undergraduate student in Biology Teaching"
        },
        "juliana-moraes": {
          "role": "phd student",
          "affiliation": "Postgraduate program in ecology: theories, applications, and values; Biology Institute, Federal University of Bahia, Salvador, Bahia, Brazil | Visitor researcher, Ruđer Bošković Institut, Zagreb, Croatia",
          "title": "Effects of climate changes on migratory birds",
          "desc": "My research aims to understand how different environmental pressures affect the physiology, ecology, and survival of migratory birds in their various biological aspects."
        },
        "karen-nascimento": {
          "role": "Collaborating researcher",
          "affiliation": "Undergraduate student in Biological Sciences; Institute of Biological and Health Sciences, Federal University of Alagoas, Maceió, Alagoas, Brazil.",
          "title": "The cost of life beneath the surface: ecophysiology and ecological niche modeling of amphisbaenians (Squamata: Amphisbaenia) under future climate change",
          "desc": "To understand the possible impacts of climate change on neotropical fossorial herpetofauna.",
          "formacao": "Bachelor's degree in Biological Sciences"
        },
        "lavinia-conceicao-ribeiro": {
          "role": "Collaborating researcher",
          "affiliation": "Licensed in Biological Sciences and undergraduate student in Biological Sciences at the Federal University of Bahia (UFBA). Collaborator at the Laboratory of (Bio)diversity in the Anthropocene (BioDIVA), Biology Institute, Federal University of Bahia, Salvador, Bahia, Brazil.",
          "title": "Impact of Wind Farm Installation on Herpetofauna: Community Analysis in Caatinga Environments in Northeastern Brazil.",
          "desc": "To investigate the impacts of wind farm installation on the structure and composition of the lizard community in the Caatinga.",
          "formacao": "Licensed in Biological Sciences from the Federal University of Bahia."
        },
        "lucca-izaguirres-souza": {
          "role": "Collaborating researcher",
          "affiliation": "Bachelor's degree in Biological Sciences - Santa Cruz State University, Ilhéus, Bahia, Brazil.",
          "formacao": "Undergraduate student in Biological Sciences"
        },
        "marcelle-heliopolis": {
          "role": "Collaborating researcher",
          "affiliation": "Bachelor's degree in Biological Sciences, Institute of Biological and Health Sciences, Federal University of Alagoas, Maceió, Alagoas, Brazil",
          "title": "The impacts of climate change on the ecophysiology of anuran species of the Atlantic Forest in Alagoas, Brazil",
          "desc": "To investigate the impact of average temperatures on anurans of the Atlantic Forest in the Pernambuco Endemism Center."
        },
        "maria-amazonas-mura": {
          "affiliation": "Postgraduate program in anthropology; Faculty of Philosophy and Human Sciences at UFBA, Federal University of Bahia, Salvador, Bahia, Brazil.",
          "title": "The formative process of healing specialists among peoples undergoing ethnic resurgence in the Lower Tapajós region",
          "desc": "Understanding the formation of healing specialists in Indigenous communities."
        },
        "marina-sunshine-souza-lobo-dos-santos": {
          "role": "Mestrando (masters student)",
          "affiliation": "Postgraduate program in ecology: theories, applications, and values; Biology Institute, Federal University of Bahia, Salvador, Bahia, Brazil.",
          "title": "Phylogenetic and therapeutic patterns of medicinal plants used by traditional Brazilian communities: A systematic review",
          "formacao": "Biologist"
        },
        "murillo-medeiros-carvalho": {
          "role": "Collaborating researcher",
          "title": "Mapping trans strategies for the climate crisis"
        },
        "nolga-elia": {
          "role": "Mestrando (masters student)",
          "affiliation": "Postgraduate program in ecology: theories, applications, and values; Biology Institute, Federal University of Bahia, Salvador, Bahia, Brazil.",
          "title": "Potential of mammal functional diversity as an indicator of ecological integrity in Atlantic Forest fragments in southern Bahia.",
          "desc": "To assess the potential of medium and large mammal functional diversity as an indicator of ecological integrity, examining whether it varies with proximity to protected areas, habitat structure, and carbon stock, in Atlantic Forest fragments of southern Bahia.",
          "formacao": "Bachelor's degree in Biological Sciences"
        },
        "patricia-neves-pereira": {
          "role": "Collaborating researcher",
          "affiliation": "Basic Education Teacher at the Wilson David Domingues Municipal Educational Center and at the Zuleide Freire de Abreu State Full-Time School, Jacaraci, Bahia, Brazil."
        },
        "rafaela-da-silva-lampa": {
          "affiliation": "Postgraduate program in ecology: theories, applications, and values; Biology Institute, Federal University of Bahia, Salvador, Bahia, Brazil.",
          "title": "Parental behavior of spinner dolphins from the Fernando de Noronha Archipelago, PE, Brazil.",
          "desc": "To investigate the mother-calf behavioral repertoire in the spinner dolphin population of Fernando de Noronha, Brazil."
        },
        "ricardo-santos-magalhaes": {
          "role": "Mestrando (masters student)",
          "affiliation": "Postgraduate program in ecology: theories, applications, and values; Biology Institute, Federal University of Bahia, Salvador, Bahia, Brazil.",
          "title": "Thermal physiology and impacts of climate change on populations of Corallus hortulana Linnaeus, 1758 (Squamata: Boidae) across different biomes.",
          "desc": "My research aims to investigate the effects of climate change on an arboreal boa species."
        },
        "silvana-silva-dos-santos": {
          "affiliation": "Postgraduate program in ecology: Application, Theory, and Values; Biology Institute, Federal University of Bahia",
          "title": "Global impacts of Sonneratia apetala (Lythraceae) invasion and the threat to Brazilian mangroves",
          "desc": "To research the ecological effects of the invasive behavior of S. apetala in mangroves around the world and in Brazil."
        },
        "thamyres-da-costa-freitas": {
          "role": "Doutorando (phd student)",
          "affiliation": "PhD in Climate Change and Sustainable Development Policies; Faculty of Sciences, University of Lisbon, Lisbon, Portugal.",
          "title": "Ethnospecies and carbon sequestration: an ecological approach to climate change mitigation",
          "desc": "To assess the contribution of ethnospecies in future emissions scenarios and to consolidate strategies for protecting and strengthening their role in combating climate change."
        },
        "thieres-almeida": {
          "role": "Collaborating researcher",
          "affiliation": "Postgraduate program in ecology and conservation; Universidade Federal de Sergipe, São Cristóvão, Sergipe, Brazil",
          "title": "Computational tools for the conservation and restoration of the Caatinga",
          "desc": "To develop and apply computational tools and diverse data in innovative ways to solve conservation and restoration problems in the Caatinga."
        },
        "vitoria-ribeiro": {
          "role": "Doutorando (phd student)",
          "affiliation": "Graduate student in the Legal Amazon Biodiversity and Biotechnology Network (Bionorte) at the Maranhão State University, São Luís, Maranhão, Brazil.",
          "title": "Effectiveness of protected areas in safeguarding threatened parrots in Brazil",
          "desc": "To assess the protective potential that protected areas offer to Brazilian parrot species threatened with extinction, and to determine which environmental factors shape their past, current, and future distribution.",
          "formacao": "Biological Sciences"
        },
        "lais-doria": {
          "role": "IC (undergraduate research)",
          "affiliation": "Undergraduate student in Biological Sciences at the Federal University of Bahia, Salvador, Bahia, Brazil",
          "formacao": "Undergraduate student in Biological Sciences - Bachelor's degree"
        },
        "lucas-araujo-faria": {
          "role": "IC (undergraduate research)",
          "affiliation": "Bachelor's degree in Biological Sciences; Institute of Biology, Federal University of Bahia, Salvador, Bahia, Brazil",
          "title": "Climate Impact on Mangrove Plants: a systematic review",
          "desc": "A systematic review of climate impacts on selected mangrove plant genera.",
          "formacao": "First academic degree"
        },
        "beatriz-de-jesus-garcia": {
          "role": "Collaborating researcher",
          "title": "Ecological niche modeling for Diphylla ecaudata in the Atlantic Forest under climate change scenarios.",
          "formacao": "Undergraduate student in Biological Sciences - UFBA"
        },
        "daniel-araujo": {
          "role": "Collaborating researcher",
          "affiliation": "Renova Mundo Soluções Ambientais",
          "desc": "Impact of noise caused by wind farms on wildlife and humans.",
          "formacao": "Biology"
        },
        "lana-resende-de-almeida": {
          "role": "Collaborating researcher",
          "formacao": "Bachelor's degree in Biological Sciences"
        },
        "luis-filipe-ribeiro-santos": {
          "role": "IC (undergraduate research)",
          "affiliation": "Teaching degree in Biological Sciences; Biology Institute, Federal University of Bahia, Salvador, Bahia, Brazil.",
          "title": "Ancestral and contemporary ethnozoology of anurans: past and future for conservation.",
          "desc": "To use ethnozoology, through the different human relationships with anurans, as a way to raise awareness and encourage anuran conservation.",
          "formacao": "Biology"
        },
        "helena-rachel-da-mota-araujo": {
          "role": "Collaborating researcher",
          "affiliation": "Senior lecturer at the State University of Southwest Bahia, Jequié Campus; Graduate Program in Ethnic Relations and Contemporaneity (PPGREC) and Graduate Program in Genetics, Biodiversity and Conservation (PPGGBC), Bahia, Brazil",
          "formacao": "Bachelor's degree in Biological Sciences - UFBA"
        },
        "soliene-teixeira-dos-santos": {
          "role": "IC (undergraduate research)",
          "affiliation": "Undergraduate program in general biology: Biology Institute, Federal University of Bahia, Salvador, Bahia, Brazil.",
          "formacao": "Teaching degree in Biological Sciences"
        },
        "gessica-f-assis": {
          "role": "IC (undergraduate research)",
          "affiliation": "Bachelor's degree in Biological Sciences; Biology Institute, Federal University of Bahia, Salvador, Bahia, Brazil.",
          "formacao": "Biological Sciences - UFBA (in progress)"
        },
        "pedro-vieira-de-carvalho": {
          "role": "Collaborating researcher",
          "affiliation": "Postgraduate Program in Communication (PPGCOM), Rio de Janeiro State University (UERJ). Research areas: gender, representation, transgender identities, media, and advertising. Rio de Janeiro, Rio de Janeiro, Brazil.",
          "title": "The inclusion of trans people in advertising campaigns: production of meaning, symbolic power, and the limits of representation in Brazilian advertising",
          "desc": "To analyze the representation of transgender people in Brazilian advertising campaigns and understand how this representation has contributed to shaping social perceptions of this population, as well as to processes of exclusion and marginalization."
        },
        "deivide-almeida-dos-santos": {
          "role": "IC (undergraduate research)",
          "affiliation": "Undergraduate student in Biological Sciences; Biology Institute, Federal University of Bahia, Salvador, Bahia, Brazil.",
          "title": "Climate Impact on Mangrove Plants: a Systematic Review",
          "desc": "To assess, through a systematic literature review, the impacts of climate change on mangrove plants, synthesizing the available scientific evidence.",
          "formacao": "Biological Sciences"
        },
        "matheus-augusto-de-azevedo": {
          "role": "IC (undergraduate research)",
          "affiliation": "Federal University of Bahia",
          "title": "Ethnobotany on Social Media: Indigenous Peoples from Bahia in Action",
          "desc": "My research aims to understand which Indigenous communities in Bahia share their knowledge about plants on the internet, and which plants these are.",
          "formacao": "Bachelor's degree in Biological Sciences from the Federal University of Bahia"
        },
        "mateus-santos": {
          "role": "Doutorando (phd student)",
          "affiliation": "Postgraduate program in ecology and conservation; Department of Biology, Federal University of Sergipe, São Cristóvão, Sergipe, Brazil.",
          "title": "Between resilience and extinction: Ecophysiology and tolerance limits of Caatinga Tropiduridae.",
          "desc": "My research aims to predict the future effects of global warming on the Caatinga by analyzing climate change impacts on tropidurid lizards in this morphoclimatic domain.",
          "formacao": "Degree in Biological Sciences"
        },
        "maria-eduarda-curie-menezes-melo": {
          "role": "Collaborating researcher",
          "affiliation": "Waiting for the Ecotav process to open in order to enroll in the master's program and become a graduate advisee",
          "formacao": "Teaching degree in Biology"
        },
        "thame-ferreira": {
          "role": "Mestrando (masters student)",
          "affiliation": "Postgraduate program in ecology: theories, application, and values; Biology Institute, Federal University of Bahia, Salvador, Brazil.",
          "title": "The Museum of Ceará Culture and ecology: toward an eco-art-educational approach.",
          "desc": "The research investigates, through an ecosophical articulation between ecology, art, culture, and museum education, how eco-art-education emerged from a pragmatic experience through the Educational Center linked to the Museum of Ceará Culture (Fortaleza, Ceará).",
          "formacao": "Bachelor's degree in Biological Sciences"
        },
        "andres-felipe-arana-aguilar": {
          "role": "Mestrando (masters student)",
          "affiliation": "Postgraduate program in zoology; State University of Santa Cruz, Ilhéus, Bahia, Brazil.",
          "title": "Tissue extraction protocol for sea turtle hatchlings",
          "desc": "This research aims to standardize an efficient and minimally invasive protocol for collecting biological tissue samples from sea turtle hatchlings, ensuring sample integrity for laboratory analyses and the safety of the specimens.",
          "formacao": "Bachelor of Science - Universidad del Valle"
        },
        "ju-neres": {
          "role": "Doutorando (phd student)",
          "affiliation": "Postgraduate program in ecology: theories, applications, and values; Biology Institute, Federal University of Bahia, Salvador, Bahia, Brazil.",
          "title": "Assessment of chlorophyll levels in the mangroves of Baía de Todos os Santos: an environmental diagnosis",
          "desc": "To assess mangrove health using in situ data and satellite imagery.",
          "formacao": "Teaching degree in Biology"
        },
        "maria-nogueira": {
          "role": "Mestrando (masters student)",
          "affiliation": "Postgraduate program in ecology: theories, applications, and values; Biology Institute, Federal University of Bahia, Salvador, Bahia, Brazil.",
          "title": "Bat community structure (Mammalia, Chiroptera) in areas of Boqueirão da Onça, Sento-Sé, Bahia",
          "desc": "Chiroptera ecology",
          "formacao": "Biologist"
        },
        "iris-amati-martins": {
          "role": "Collaborating researcher",
          "affiliation": "Collaborating Researcher on the project \"What Can Soundscapes Reveal About Biodiversity?\"; Center for Natural and Human Sciences, Federal University of ABC, São Paulo, Brazil",
          "formacao": "PhD and Master's in Ecology of Aquatic and Terrestrial Ecosystems from USP, and Bachelor's degree in Biological Sciences from UNESP"
        },
        "karoline-agostinho": {
          "role": "Pesquisador(a) de pós-doutorado (postdoctoral scholar)",
          "affiliation": "Postdoctoral researcher in the Graduate Program in Environmental Oceanography - Federal University of Espírito Santo; Human Ecology of the Ocean Research Group",
          "title": "Artisanal fishing and Climate Change: sustainability of the activity integrated with the Blue Economy and Ocean Literacy on the coast of Espírito Santo",
          "desc": "The proposal investigates the socioeconomic and sociocultural challenges of artisanal fishing in Espírito Santo in the face of coastal uses, climate change, and public policy failures, seeking to integrate traditional knowledge, Ocean Literacy, and the Blue Economy to support actions that ensure the activity's continuity.",
          "formacao": "Biological Sciences"
        }
      }
    }
  },
  pt: {
    brandSub: 'Laboratório de (bio)diversidade no Antropoceno',
    nav: { about: 'Sobre', research: 'Pesquisa', how: 'Como funciona', network: 'Rede', coord: 'Coordenação', contact: 'Contato' },
    labels: { about: 'Sobre o laboratório', mission: 'Missão', research: 'Linhas de pesquisa', how: 'Como funciona?', values: 'Valores', network: 'Rede colaborativa', coord: 'Coordenação', countries: 'Pelo mundo' },
    heroBefore: 'Um modelo descentralizado para uma ',
    heroColored: 'ciência da biodiversidade',
    heroAfter: ' colaborativa, sem fronteiras',
    heroCta: 'Conheça mais',
    about: {
      p1: 'O BioDivA Lab é uma rede de pesquisa descentralizada e colaborativa, criada para transformar como a ciência da biodiversidade é produzida, compartilhada e aplicada.',
      p2: 'O laboratório conecta pesquisadores de diferentes instituições, países e estágios de carreira para co-desenvolver projetos em ecologia, evolução e conservação.'
    },
    mission: 'Promover uma comunidade científica diversa, inclusiva e mais saudável, comprometida com a produção de uma ciência aberta, ética e transparente e com a construção de uma rede colaborativa e transdisciplinar para enfrentar os complexos desafios do Antropoceno.',
    research: [
      'Os impactos das atividades humanas nos sistemas naturais e humanos',
      'Governança Científica e Diplomacia',
      'Etnobiologia e relação Sociedade-Natureza: uma abordagem transdisciplinar para a conservação ambiental'
    ],
    principles: ['Flexibilidade', 'Comunicação', 'Apoio', 'Ambiente respeitoso', 'Paixão', 'Mentoria humanizada'],
    howHub: 'Ciência colaborativa',
    values: [
      'Interseccionalidade e sensibilidade social',
      'Colaboração Global e Transdisciplinaridade',
      'Inovação e Criatividade',
      'Educação e Divulgação Científica',
      'Inclusão e Igualdade de Oportunidades',
      'Compromisso com um Mundo Justo e Sustentável'
    ],
    win: {
      structure: 'Essa estrutura permite a integração de diversas expertises e perspectivas, promovendo inclusão científica, formação e participação equitativa na pesquisa.',
      outcomes: ['Melhores experiências de trabalho e aprendizado', 'Novas perspectivas de pesquisa', 'Melhores oportunidades para todas as pessoas envolvidas', 'Incentivo a mais pessoas para atuar com ciência'],
      center: 'TODOS GANHAM!',
      note: 'Para construir uma Ciência mais inclusiva, precisamos de redes de mentoria diversas.'
    },
    coord: {
      role: 'Coordenação',
      bio: 'Bióloga e pesquisadora em ecologia, conservação e biodiversidade no Antropoceno, e defensora de uma ciência aberta, inclusiva e diversa. Fundou e coordena o BioDiVa Lab e sua rede colaborativa de pesquisa.',
      cv: 'Ver currículo Lattes'
    },
    contact: { title: 'Contato' },
    footer: { line: 'BioDiVa Lab — (bio)diversidade no Antropoceno.' },
    countries: ['Brasil', 'Estados Unidos', 'Colômbia', 'Croácia', 'Guatemala', 'Canadá', 'Alemanha', 'Índia', 'Iraque', 'Camarões', 'México', 'Argentina', 'Chile', 'Porto Rico', 'Síria', 'África do Sul', 'Austrália', 'Portugal', 'Reino Unido', 'Paquistão'],
    team: {
      title: 'As pessoas da rede',
      filterAll: 'Todos',
      lines: ['Impactos Humanos', 'Governança Científica', 'Etnobiologia'],
      lattes: 'Currículo Lattes',
      empty: 'Nenhum pesquisador encontrado para esse filtro.',
      people: {
        "aida-p-giozza": {
          "affiliation": "Programa de graduação em Biodiversidade, Instituto de Biociências, Letras e Ciências Exatas, UNESP Câmpus de São José do Rio Preto, SP, Brasil. Laboratório de Ecologia e Evolução (LEEv), Instituto Butantan, São Paulo, SP, Brasil.",
          "title": "Efeitos das mudanças climáticas em viperídeos da América do Sul",
          "desc": "Estudo os efeitos das mudanças climáticas em viperídeos da América do Sul por meio de modelagem de nicho ecológico."
        },
        "ana-leticia-dos-santos-lima": {
          "role": "Doutorando (phd student)",
          "affiliation": "Programa de pós-graduação em ecologia: teorias, aplicações e valores; Instituto de Biologia, Universidade Federal da Bahia, Salvador, Bahia, Brasil.",
          "title": "Abelhas em áreas urbanas: a paisagem e sua influência sobre a estrutura das comunidades",
          "desc": "Analisar a influência da paisagem urbana sobre as comunidades de abelhas e sobre a estrutura das redes de interações entre abelhas e plantas.",
          "formacao": "Graduação em Ciências Biológicas, Mestrado em Ecologia e Evolução"
        },
        "andre-nunes": {
          "affiliation": "Bolsista de Pesquisa (DTI-B/CNPq); Laboratório de Ecologia e Conservação (LABECO), Instituto de Ciências Biológicas, Universidade Federal do Pará (UFPA), Belém, Pará, Brasil",
          "title": "Soluções de conservação para a herpetofauna na Pan-Amazônia: emergência climática e o futuro das espécies",
          "desc": "Esta pesquisa propõe soluções práticas e integradas de conservação para proteger a biodiversidade da herpetofauna pan-amazônica dos colapsos ambientais causados pela crise climática."
        },
        "beatriz-hormanseder": {
          "role": "Pesquisador(a) colaborador(a)",
          "desc": "Utiliza metodologias tridimensionais para pesquisa, curadoria e preservação digital do patrimônio geopaleontológico, integrando tecnologias 3D à comunicação científica em Paleontologia.",
          "formacao": "Bacharel em Ciências Biológicas"
        },
        "camila-sant-anna": {
          "role": "Pesquisador(a) colaborador(a)"
        },
        "caroline-tito": {
          "role": "Doutorando (phd student)",
          "affiliation": "Programa de pós-graduação em ecologia: teorias, aplicações e valores; Instituto de Biologia, Universidade Federal da Bahia, Salvador, Bahia, Brasil.",
          "title": "Estrutura das comunidades de abelhas e vespas solitárias (Hymenoptera: Aculeata) que nidificam em cavidades preexistentes, seus grupos funcionais e propriedades das relações antagonísticas com a caracterização desta comunidade ao longo de um gradiente de urbanização",
          "desc": "Analisar como a urbanização afeta a estrutura, as funções e as relações ecológicas de comunidades de abelhas e vespas solitárias que utilizam ninhos-armadilha."
        },
        "charles-vinicius-de-jesus-braga": {
          "role": "Pesquisador(a) colaborador(a)",
          "affiliation": "Departamento de Ciências Biológicas, Universidade Estadual de Santa Cruz, Ilhéus, Bahia, Brasil.",
          "formacao": "Bacharelando em Ciências Biológicas"
        },
        "damares-soares": {
          "role": "Doutorando (phd student)",
          "affiliation": "Programa de pós-graduação em ecologia: teorias, aplicações e valores; Instituto de Biologia, Universidade Federal da Bahia, Salvador, Bahia, Brasil.",
          "title": "Impacto das mudanças climáticas nas aves de rapina da mata atlântica, refúgio, migração e predação",
          "desc": "De que forma as mudanças climáticas impactam ou podem impactar as aves de rapina.",
          "formacao": "Ciências Biológicas"
        },
        "denis-bruno-santos-marques-nunes": {
          "role": "Pesquisador(a) colaborador(a)",
          "affiliation": "Inexistente, no momento",
          "title": "Em definição",
          "desc": "Em definição"
        },
        "fabiola-vieira": {
          "role": "Doutorando (phd student)",
          "affiliation": "Programa de Pós-graduação em Ciência Animal; Escola de Veterinária, Universidade Federal de Minas Gerais (UFMG), Belo Horizonte, Minas Gerais, Brasil. Foco de pesquisa: Saúde Única e conservação, comunidades indígenas e Chiroptera.",
          "title": "Potencial zoonótico viral em morcegos do CCZ-BH e cosmopercepção Maxakali: intersecções entre saúde, conservação e etnozoologia",
          "desc": "Minha pesquisa concentra-se nas interfaces entre Saúde Única, conservação e etnozoologia, explorando as relações entre morcegos, o povo Maxakali e a sociedade de modo geral."
        },
        "fernanda-melo-gomes": {
          "role": "Pesquisador(a) de pós-doutorado (postdoctoral scholar)",
          "affiliation": "Pesquisadora de pós-doutorado em Etnobotânica; Instituto de Biologia, Universidade Federal da Bahia, Salvador, Bahia, Brasil.",
          "title": "Etnobotânica de comunidades tradicionais do Brasil: estratégias frente às mudanças climáticas sob a ótica da educação básica",
          "desc": "Minha pesquisa investiga os conhecimentos e as práticas etnobotânicas de comunidades tradicionais, buscando compreender suas relações com a biodiversidade e as mudanças climáticas e contribuir para sua valorização no contexto da educação básica."
        },
        "hugo-andrade": {
          "role": "Pesquisador(a) de pós-doutorado (postdoctoral scholar)",
          "affiliation": "Pós-Doc Júnior da Universidade Federal de Sergipe, Sergipe, Brasil.",
          "title": "Quente demais para saltar: ecofisiologia térmica de anfíbios em cenários de mudanças climáticas",
          "desc": "Busco compreender os fatores determinantes para ocorrência e distribuição de répteis em diferentes escalas e cenários climáticos."
        },
        "joao-pedro-ramos-couto": {
          "role": "IC (undergraduate research)",
          "affiliation": "Graduando em Licenciatura em Biologia; Instituto de Biologia, Universidade Federal da Bahia, Salvador, Bahia, Brasil.",
          "title": "Rotas e Refúgios: Prevendo o Futuro das Aves Limícolas sob Mudanças Climáticas",
          "desc": "Definir refúgios climáticos para as aves limícolas migratórias através da modelagem de nicho.",
          "formacao": "Graduando em Licenciatura em Biologia"
        },
        "juliana-moraes": {
          "role": "Doutoranda",
          "affiliation": "Programa de pós-graduação em ecologia: teorias, aplicações e valores; Instituto de Biologia, Universidade Federal da Bahia, Salvador, Bahia, Brasil | Pesquisadora visitante, Ruđer Bošković Institut, Zagreb, Croácia",
          "title": "Efeitos das mudanças climáticas em aves migratórias",
          "desc": "Minha pesquisa busca compreender como diferentes pressões ambientais afetam a fisiologia, a ecologia e a sobrevivência das aves migratórias em seus diversos aspectos biológicos."
        },
        "karen-nascimento": {
          "role": "Pesquisador(a) colaborador(a)",
          "affiliation": "Graduanda em Ciências Biológicas; Instituto de Ciências Biológicas e da Saúde, Universidade Federal de Alagoas, Maceió, Alagoas, Brasil.",
          "title": "O custo da vida sob a superfície: ecofisiologia e modelagem de nicho ecológico de anfisbênias (Squamata: Amphisbaenia) diante de mudanças climáticas futuras",
          "desc": "Compreender os possíveis impactos das mudanças climáticas na herpetofauna fossorial neotropical.",
          "formacao": "Bacharelado em Ciências Biológicas"
        },
        "lavinia-conceicao-ribeiro": {
          "role": "Pesquisador(a) colaborador(a)",
          "affiliation": "Licenciada em Ciências Biológicas e bacharelanda em Ciências Biológicas pela Universidade Federal da Bahia (UFBA). Colaboradora do Laboratório de (Bio)diversidade no Antropoceno (BioDIVA), Instituto de Biologia, Universidade Federal da Bahia, Salvador, Bahia, Brasil.",
          "title": "Impacto da Instalação de Parques Eólicos na Herpetofauna: Análise da Comunidade em Ambientes de Caatinga no Nordeste Brasileiro.",
          "desc": "Investigar os impactos da instalação de parques eólicos na estrutura e composição da comunidade de lagartos na Caatinga.",
          "formacao": "Licenciada em Ciências Biológicas pela Universidade Federal da Bahia."
        },
        "lucca-izaguirres-souza": {
          "role": "Pesquisador(a) colaborador(a)",
          "affiliation": "Graduação de Ciências em Biológicas - Universidade Estadual de Santa Cruz, Ilhéus, Bahia, Brasil.",
          "formacao": "Estudante de Bacharelado em Ciências Biológicas"
        },
        "marcelle-heliopolis": {
          "role": "Pesquisador(a) colaborador(a)",
          "affiliation": "Graduada em Ciências Biológicas, Instituto de Ciências Biológicas e da Saúde, Universidade Federal de Alagoas, Maceió, Alagoas, Brasil",
          "title": "Os impactos das mudanças climáticas na ecofisiologia de espécies de anuros da Mata Atlântica em Alagoas, Brasil",
          "desc": "Investigar impacto de temperaturas médias sobre anuros da Mata Atlântica do Centro de Endemismo Pernambuco."
        },
        "maria-amazonas-mura": {
          "affiliation": "Programa de pós-graduação em antropologia; Faculdade de Filosofia e Ciências Humanas da UFBA, Universidade Federal da Bahia, Salvador, Bahia, Brasil.",
          "title": "O processo formativo de especialistas de cura dos povos em ressurgência étnica na região do Baixo Tapajós",
          "desc": "Entendimento da formação de especialistas de cura em comunidades indígenas."
        },
        "marina-sunshine-souza-lobo-dos-santos": {
          "role": "Mestrando (masters student)",
          "affiliation": "Programa de pós-graduação em ecologia: teorias, aplicações e valores; Instituto de Biologia, Universidade Federal da Bahia, Salvador, Bahia, Brasil.",
          "title": "Padrões filogenéticos e terapêuticos de plantas medicinais utilizadas por comunidades tradicionais brasileiras: Uma revisão sistemática",
          "formacao": "Bióloga"
        },
        "murillo-medeiros-carvalho": {
          "role": "Pesquisador(a) colaborador(a)",
          "title": "Mapeando estratégias trans para a crise climática"
        },
        "nolga-elia": {
          "role": "Mestrando (masters student)",
          "affiliation": "Programa de pós-graduação em ecologia: teorias, aplicações e valores; Instituto de Biologia, Universidade Federal da Bahia, Salvador, Bahia, Brasil.",
          "title": "Potencial da diversidade funcional de mamíferos como indicadora de integridade ecológica em fragmentos de Mata Atlântica do sul da Bahia.",
          "desc": "Avaliar o potencial da diversidade funcional de mamíferos de médio e grande porte como indicadora de integridade ecológica, verificando se ela varia em função da proximidade a áreas protegidas, da estrutura do habitat e do estoque de carbono, em fragmentos de Mata Atlântica do sul da Bahia.",
          "formacao": "Bacharelado em Ciências Biológicas"
        },
        "patricia-neves-pereira": {
          "role": "Pesquisador(a) colaborador(a)",
          "affiliation": "Professora da Educação Básica no Centro Educacional Municipal Wilson David Domingues e no Colégio Estadual de Tempo Integral Zuleide Freire de Abreu, Jacaraci, Bahia, Brasil."
        },
        "rafaela-da-silva-lampa": {
          "affiliation": "Programa de pós-graduação em ecologia: teorias, aplicações e valores; Instituto de Biologia, Universidade Federal da Bahia, Salvador, Bahia, Brasil.",
          "title": "Comportamento parental de golfinhos-rotadores do Arquipélago de Fernando de Noronha, PE, Brasil.",
          "desc": "Investigar o repertório comportamental de mães-filhotes na população de golfinhos-rotadores de Fernando de Noronha, Brasil."
        },
        "ricardo-santos-magalhaes": {
          "role": "Mestrando (masters student)",
          "affiliation": "Programa de pós-graduação em ecologia: teorias, aplicações e valores; Instituto de Biologia, Universidade Federal da Bahia, Salvador, Bahia, Brasil.",
          "title": "Fisiologia térmica e impactos das mudanças climáticas em populações de Corallus hortulana Linnaeus, 1758 (Squamata: Boidae) em diferentes biomas.",
          "desc": "Minha pesquisa visa investigar os efeitos das mudanças climáticas em uma espécie de jiboia arborícola."
        },
        "silvana-silva-dos-santos": {
          "affiliation": "Programa de Pós-graduação em ecologia: Aplicação, Teoria e Valores; Instituto de Biologia, Universidade Federal da Bahia",
          "title": "Impactos globais da invasão de Sonneratia apetala (Lythraceae) e a ameaça aos manguezais brasileiros",
          "desc": "Pesquisar sobre efeitos ecológicos do comportamento invasor de S. apetala em manguezais ao redor do mundo e no Brasil."
        },
        "thamyres-da-costa-freitas": {
          "role": "Doutorando (phd student)",
          "affiliation": "Doutorado em Alterações Climáticas e Políticas de Desenvolvimento Sustentável; Faculdade de Ciências, Universidade de Lisboa, Lisboa, Portugal.",
          "title": "Etnoespécies e sequestro de carbono: uma abordagem ecológica para a mitigação das alterações climáticas",
          "desc": "Avaliar o contributo das etnoespécies nos cenários futuros de emissões e consolidar estratégias de proteção e fortalecimento do seu papel no combate às alterações climáticas."
        },
        "thieres-almeida": {
          "role": "Pesquisador(a) colaborador(a)",
          "affiliation": "Programa de pós-graduação em ecologia e conservação; Universidade Federal de Sergipe, São Cristóvão, Sergipe, Brasil",
          "title": "Ferramentas computacionais para a conservação e restauração da Caatinga",
          "desc": "Desenvolver e aplicar ferramentas computacionais e dados diversos de forma inovadora na resolução de problemas de conservação e restauração na Caatinga."
        },
        "vitoria-ribeiro": {
          "role": "Doutorando (phd student)",
          "affiliation": "Pós-graduanda pela Rede de Biodiversidade e Biotecnologia da Amazônia Legal (Bionorte) na Universidade Estadual do Maranhão, São Luis, Maranhão, Brasil.",
          "title": "Efetividade das unidades de conservação na proteção de psitacídeos ameaçados no Brasil",
          "desc": "Avaliar o potencial de proteção que as Unidades de Conservação oferecem para os psitacídeos brasileiros ameaçados de extinção e determinar quais fatores ambientais determinam a sua distribuição passada, atual e futura.",
          "formacao": "Ciências biológicas"
        },
        "lais-doria": {
          "role": "IC (undergraduate research)",
          "affiliation": "Estudante de graduação em Ciências Biológicas na Universidade Federal da Bahia, Salvador, Bahia, Brasil",
          "formacao": "Graduanda em Ciências Biológicas - Bacharelado"
        },
        "lucas-araujo-faria": {
          "role": "IC (undergraduate research)",
          "affiliation": "Bacharelado em Ciências Biológicas; Instituto de Biologia, Universidade Federal da Bahia, Salvador, Bahia, Brasil",
          "title": "Impacto climático em plantas de manguezal: uma revisão sistemática",
          "desc": "Uma revisão sistemática dos impactos climáticos em gêneros selecionados de plantas de manguezal.",
          "formacao": "1º formação acadêmica"
        },
        "beatriz-de-jesus-garcia": {
          "role": "Pesquisador(a) colaborador(a)",
          "title": "Modelagem de nicho ecológico para Diphylla ecaudata na mata atlântica em cenários de mudanças climáticas.",
          "formacao": "Graduanda em Ciências Biológicas - UFBA"
        },
        "daniel-araujo": {
          "role": "Pesquisador(a) colaborador(a)",
          "affiliation": "Renova Mundo Soluções Ambientais",
          "desc": "Impacto do ruído provocado por parques eólicos na fauna e em humanos.",
          "formacao": "Biologia"
        },
        "lana-resende-de-almeida": {
          "role": "Pesquisador(a) colaborador(a)",
          "formacao": "Bacharel em Ciências Biológicas"
        },
        "luis-filipe-ribeiro-santos": {
          "role": "IC (undergraduate research)",
          "affiliation": "Licenciatura em Ciências Biológicas; Instituto de Biologia, Universidade Federal da Bahia, Salvador, Bahia, Brasil.",
          "title": "Etnozoologia ancestral e contemporânea de anuros: passado e futuro pela conservação.",
          "desc": "Utilizar a etnozoologia, por meio das distintas relações humanas com os anuros, como forma de sensibilizar as pessoas e incentivar a conservação de anuros.",
          "formacao": "Biologia"
        },
        "helena-rachel-da-mota-araujo": {
          "role": "Pesquisador(a) colaborador(a)",
          "affiliation": "Professora de magistério superior da Universidade Estadual do Sudoeste da Bahia, Campus Jequié; Programa de Pós-graduação em Relações Étnicas e Contemporanidade (PPGREC) e do Programa de Pós-graduação em Genética, Biodiversidade e Conservação (PPGGBC), Bahia, Brasil",
          "formacao": "Graduação em Ciências Biológicas - UFBA"
        },
        "soliene-teixeira-dos-santos": {
          "role": "IC (undergraduate research)",
          "affiliation": "Programa de graduação em biologia geral: Instituto de Biologia, Universidade Federal da Bahia, Salvador, Bahia, Brasil.",
          "formacao": "Licenciatura em Ciências Biológicas"
        },
        "gessica-f-assis": {
          "role": "IC (undergraduate research)",
          "affiliation": "Graduação em Ciências Biológicas; Instituto de Biologia, Universidade Federal da Bahia, Salvador, Bahia, Brasil.",
          "formacao": "Ciências biológicas - UFBA (em andamento)"
        },
        "pedro-vieira-de-carvalho": {
          "role": "Pesquisador(a) colaborador(a)",
          "affiliation": "Programa de Pós-graduação em Comunicação (PPGCOM), Universidade do Estado do Rio de Janeiro (UERJ). Áreas de pesquisa: gênero, representação, identidades trans, mídia e publicidade. Rio de Janeiro, Rio de Janeiro, Brasil.",
          "title": "A inclusão de pessoas trans em campanhas publicitárias: produção de sentidos, poder simbólico e os limites da representatividade na publicidade brasileira",
          "desc": "Analisar a representação de pessoas transgêneras em campanhas publicitárias brasileiras e compreender como essa representação contribuiu para a construção de percepções sociais sobre essa população, bem como para processos de exclusão e marginalização."
        },
        "deivide-almeida-dos-santos": {
          "role": "IC (undergraduate research)",
          "affiliation": "Graduando em Ciências Biológicas; Instituto de Biologia. Universidade Federal da Bahia, Salvador, Bahia, Brasil.",
          "title": "Impacto climático em plantas de manguezal: uma revisão sistemática",
          "desc": "Avaliar, por meio de uma revisão sistemática da literatura, os impactos das mudanças climáticas sobre as plantas de manguezal, sintetizando as evidências científicas disponíveis.",
          "formacao": "Ciências Biológicas"
        },
        "matheus-augusto-de-azevedo": {
          "role": "IC (undergraduate research)",
          "affiliation": "Universidade Federal da Bahia",
          "title": "Etnobotânica nas redes: os povos originários da Bahia em ação",
          "desc": "Minha pesquisa consiste em entender que comunidades indígenas baianas compartilham seus conhecimentos sobre plantas na internet e que plantas são essas.",
          "formacao": "Bacharel em Ciências Biológicas pela Universidade Federal da Bahia"
        },
        "mateus-santos": {
          "role": "Doutorando (phd student)",
          "affiliation": "Programa de pós-graduação em ecologia e conservação; Departamento de Biologia, Universidade Federal de Sergipe, São Cristóvão, Sergipe, Brasil.",
          "title": "Entre a resiliência e a extinção: ecofisiologia e limites de tolerância de Tropiduridae da Caatinga.",
          "desc": "Minha pesquisa visa prever os efeitos futuros do aquecimento global na Caatinga, analisando os impactos das mudanças climáticas em lagartos tropidurídeos nesse domínio morfoclimático.",
          "formacao": "Graduação em Ciências Biológicas"
        },
        "maria-eduarda-curie-menezes-melo": {
          "role": "Pesquisador(a) colaborador(a)",
          "affiliation": "Esperando o processo do Ecotav abrir para me inscrever no mestrado e ser orientanda",
          "formacao": "Licenciatura em Biologia"
        },
        "thame-ferreira": {
          "role": "Mestrando (masters student)",
          "affiliation": "Programa de pós-graduação em ecologia: teorias, aplicação e valores; Instituto de Biologia, Universidade Federal da Bahia, Salvador, Brasil.",
          "title": "O Museu da Cultura Cearense e a ecologia: por uma abordagem ecoarte-educadora.",
          "desc": "A pesquisa investiga por meio de uma articulação ecosófica entre ecologia, arte, cultura e educação museal como a ecoarte-educação emergiu de uma experiência pragmática através do Núcleo Educativo vinculada ao Museu da Cultura Cearense (Fortaleza, Ceará).",
          "formacao": "Bacharel em Ciências Biológicas"
        },
        "andres-felipe-arana-aguilar": {
          "role": "Mestrando (masters student)",
          "affiliation": "Programa de pós-graduação em zoologia; Universidade Estadual de Santa Cruz, Ilhéus, Bahia, Brasil.",
          "title": "Protocolo de extração de tecido de tartaruga marinha em filhotes",
          "desc": "Esta pesquisa visa padronizar um protocolo eficiente e minimamente invasivo para a coleta de amostras biológicas de tecido em filhotes de tartarugas marinhas, garantindo a integridade da amostra para análises laboratoriais e a segurança dos espécimes.",
          "formacao": "Bacharelado em Ciências - Universidad del Valle"
        },
        "ju-neres": {
          "role": "Doutorando (phd student)",
          "affiliation": "Programa de pós-graduação em ecologia: teorias, aplicações e valores; Instituto de Biologia, Universidade Federal da Bahia, Salvador, Bahia, Brasil.",
          "title": "Avaliação dos teores de clorofila nos manguezais da Baía de Todos os Santos: um diagnóstico ambiental",
          "desc": "Avaliar da saúde dos manguezais a partir de dados in situ e imagens de satélite.",
          "formacao": "Licenciatura em Biologia"
        },
        "maria-nogueira": {
          "role": "Mestrando (masters student)",
          "affiliation": "Programa de pós-graduação em ecologia: teorias, aplicações e valores; Instituto de Biologia, Universidade Federal da Bahia, Salvador, Bahia, Brasil.",
          "title": "Estrutura da comunidade de morcegos (Mammalia, Chiroptera) em áreas do Boqueirão da Onça, Sento-Sé, Bahia",
          "desc": "Ecologia de Chiroptera",
          "formacao": "Bióloga"
        },
        "iris-amati-martins": {
          "role": "Pesquisador(a) colaborador(a)",
          "affiliation": "Pesquisadora Colaboradora no projeto \"O que as Paisagens Sonoras podem revelar sobre a Biodiversidade?\"; Centro de Ciências Naturais e Humanas, Universidade Federal do ABC, São Paulo, Brasil",
          "formacao": "Doutorado e Mestrado em Ecologia de Ecossistemas Aquáticos e Terrestres pela USP e Graduação em Ciências Biológicas pela UNESP"
        },
        "karoline-agostinho": {
          "role": "Pesquisador(a) de pós-doutorado (postdoctoral scholar)",
          "affiliation": "Pós-doutoranda no programa de pós-graduação em Oceanografia Ambiental - Universidade Federal do Espírito Santo; Grupo de Pesquisa Ecologia Humana do Oceano",
          "title": "Pesca artesanal e Mudanças climáticas: sustentabilidade da atividade integrada à Economia do Mar e Cultura Oceânica na costa capixaba",
          "desc": "A proposta investiga os desafios socioeconômicos e socioculturais da pesca artesanal no Espírito Santo diante dos usos da costa, das mudanças climáticas e das falhas nas políticas públicas, buscando integrar saberes tradicionais, Cultura Oceânica e Economia do Mar para subsidiar ações que garantam a continuidade da atividade.",
          "formacao": "Ciências Biológicas"
        }
      }
    }
  }
};

const COUNTRY_FLAGS = ['🇧🇷', '🇺🇸', '🇨🇴', '🇭🇷', '🇬🇹', '🇨🇦', '🇩🇪', '🇮🇳', '🇮🇶', '🇨🇲', '🇲🇽', '🇦🇷', '🇨🇱', '🇵🇷', '🇸🇾', '🇿🇦', '🇦🇺', '🇵🇹', '🇬🇧', '🇵🇰'];

const STORAGE_KEY = 'biodiva-lang';

function resolvePath(obj, path) {
  return path.split('.').reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
}

function detectInitialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'pt' || saved === 'en') return saved;
  } catch (e) {}
  return (navigator.language || '').toLowerCase().startsWith('pt') ? 'pt' : 'en';
}

function renderCountries() {
  const list = document.getElementById('countries-list');
  if (!list || list.childElementCount) return;
  COUNTRY_FLAGS.forEach((flag, i) => {
    const chip = document.createElement('span');
    chip.className = 'country-chip';
    chip.innerHTML = `<span class="country-flag" aria-hidden="true">${flag}</span><span data-i18n="countries.${i}"></span>`;
    list.appendChild(chip);
  });
}

function applyLang(lang) {
  const dict = TRANSLATIONS[lang];
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = resolvePath(dict, el.getAttribute('data-i18n'));
    if (typeof value === 'string') el.textContent = value;
  });
  document.getElementById('lang-en').setAttribute('aria-pressed', String(lang === 'en'));
  document.getElementById('lang-pt').setAttribute('aria-pressed', String(lang === 'pt'));
  try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
}

function closeMobileMenu() {
  const nav = document.getElementById('nav-mobile');
  const toggle = document.getElementById('menu-toggle');
  nav.hidden = true;
  toggle.setAttribute('aria-expanded', 'false');
}

function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav-mobile');
  toggle.addEventListener('click', () => {
    const isOpen = !nav.hidden;
    nav.hidden = isOpen;
    toggle.setAttribute('aria-expanded', String(!isOpen));
  });
  document.querySelectorAll('[data-close-menu]').forEach((el) => {
    el.addEventListener('click', closeMobileMenu);
  });
}

const TEAM_PAGE_SIZE = 3;

function initTeamFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = Array.from(document.querySelectorAll('.team-card'));
  const empty = document.getElementById('team-empty');
  const prevBtn = document.getElementById('team-prev');
  const nextBtn = document.getElementById('team-next');
  const pageIndicator = document.getElementById('team-page-indicator');
  if (!buttons.length) return;

  let filter = 'all';
  let page = 0;

  function render() {
    const filtered = filter === 'all' ? cards : cards.filter((c) => c.getAttribute('data-line').split(' ').includes(filter));
    const totalPages = Math.max(1, Math.ceil(filtered.length / TEAM_PAGE_SIZE));
    if (page >= totalPages) page = totalPages - 1;
    if (page < 0) page = 0;
    const start = page * TEAM_PAGE_SIZE;
    const end = start + TEAM_PAGE_SIZE;

    cards.forEach((c) => { c.hidden = true; });
    filtered.forEach((c, i) => { c.hidden = !(i >= start && i < end); });

    empty.hidden = filtered.length !== 0;
    pageIndicator.textContent = `${page + 1} / ${totalPages}`;
    prevBtn.disabled = page <= 0;
    nextBtn.disabled = page >= totalPages - 1;
  }

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      filter = btn.getAttribute('data-filter');
      page = 0;
      render();
    });
  });

  prevBtn.addEventListener('click', () => { page--; render(); });
  nextBtn.addEventListener('click', () => { page++; render(); });

  render();
}

function initPhotoLightbox() {
  const lightbox = document.getElementById('photo-lightbox');
  const lightboxImg = document.getElementById('photo-lightbox-img');
  const closeBtn = document.getElementById('photo-lightbox-close');

  function open(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    lightbox.hidden = false;
  }
  function close() {
    lightbox.hidden = true;
    lightboxImg.src = '';
  }

  document.querySelectorAll('.team-avatar-photo').forEach((img) => {
    img.setAttribute('tabindex', '0');
    img.setAttribute('role', 'button');
    img.setAttribute('aria-label', 'Enlarge photo of ' + img.alt);
    img.addEventListener('click', () => open(img.src, img.alt));
    img.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(img.src, img.alt); }
    });
  });

  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });
  closeBtn.addEventListener('click', close);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !lightbox.hidden) close(); });
}

document.addEventListener('DOMContentLoaded', () => {
  renderCountries();
  applyLang(detectInitialLang());
  initMobileMenu();
  initTeamFilters();
  initPhotoLightbox();
  document.getElementById('lang-en').addEventListener('click', () => applyLang('en'));
  document.getElementById('lang-pt').addEventListener('click', () => applyLang('pt'));
});
