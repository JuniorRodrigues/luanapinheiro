module.exports = {
    base: '/',
    assets: './assets',
    pathImg: './assets/images',

    siteName: 'Luana Pinheiro',
    title: 'Luana Pinheiro',
    description: 'Aprenda a dançar com aulas de dança do ventre em Suzano ou online do nível básico ao avançado. Conheça também as aulas de Baby Ballet, e Street kids 😍',
    share: {
        title: 'Luana Pinheiro',
        description: 'Aprenda a dançar com aulas de dança do ventre em Suzano ou online do nível básico ao avançado. Conheça também as aulas de Baby Ballet, e Street kids 😍',
        image: 'assets/images/share/facebook.jpg',
        width: 680,
        height: 680
    },

    traking: {
        UA: 'UA-143546791-1',
    },

    theme: {
        background: '#ff3399',
        // foreground: '#ff3399',
        foreground: '#fff',
    },

    address: `
        Av. Mogi das Cruzes, 51<br />
        Parque Suzano, Suzano - SP<br />
        CEP 08673-010
    `,

    menu: [
        {
            id: 'home',
            text: 'Home',
            url: './'
        },
        {
            id: 'aulas',
            text: 'Aulas',
            url: 'aulas'
        },
        {
            id: 'sobre',
            text: 'Sobre',
            url: 'sobre-a-escola-de-danca'
        },
        {
            id: 'duvidas',
            text: 'Dúvidas',
            url: 'duvidas'
        },
        {
            id: 'contato',
            text: 'Contato',
            url: 'contato'
        },
    ],

    network: [
        {
            id: 'youtube',
            name: 'youtube',
            url: 'https://www.youtube.com/channel/UCzgodg7z4NiRigePmQJPM0g/videos',
            title: 'Se inscreva em nosso canal no Youtube'
        },
        {
            id: 'instagram',
            name: 'instagram',
            url: 'https://instagram.com/luanapinheiroespacoartistico',
            title: 'Siga-nos no Instagram'
        },
        {
            id: 'facebook',
            name: 'facebook',
            url: 'https://www.facebook.com/espacoartisticoluanapinheiro/',
            title: 'Curta nossa página no Facebook'
        },
        {
            id: 'whatsapp',
            name: 'whatsapp',
            url: 'https://api.whatsapp.com/send?phone=5511973013389&text=Ol%C3%A1%20Luana%20Pinheiro%20gostaria%20de%20saber%20mais%20sobre%20',
            title: 'Envie-e nos uma mensagem'
        },
    ],

    aulas: {
        id: 'aulas',
        title: 'Aulas de dança',
        titleExtension: 'para quem só quer dançar <br class="hide-mobile">ou se profissionalizar',
        mainDescription: '',
        photos: [
            // {
            //     id: 'contemporaneo',
            //     title: 'Contemporâneo',
            //     resume: 'Cuide de sua postura, equilíbrio, força, flexibilidade e consciência corporal nas aulas de Contemporâneo',
            //     imgSrc: 'aulas/contemporaneo.jpg',
            //     imgAlt: 'Contemporâneo',
            //     url: 'aula/contemporaneo',

            //     titleHightlight: 'Dança <span class="highlight">Contemporânea</span>',
            //     srcHero: 'aulas/hero_contemporaneo.jpg',
            //     altHero: 'Contemporâneo',
            //     description: '<p>A dança contemporânea pode ser praticada por todos os tipos de pessoas. Traz uma consciência corporal e do movimento. Criada na  década de 1950, com o intuito de romper com o estilo clássico e desenvolver sua própria linguagem, a dança não possui uma única técnica estabelecida, dando autonomia ao bailarino para construir sua própria leitura musical. Essa dança moderna tirou as amarras com o estereótipo de bailarinos que controlam excessivamente o peso e dançam sem as sapatilhas. É uma dança que inova nas temáticas, tem várias referências de outras artes e espaços.</p><p>Faça uma <a href="contato" title="Contato">aula experimental</a>, sinta a liberdade de poder expressar-se através dos movimentos e da música.</p>',
            //     requirements: `
            //         <ul>
            //             <li>• roupas confortáveis</li>
            //             <li>• meia soquete ou descalço</li>
            //         </ul>
            //     `
            // },
            // {
            //     id: 'ballet-classico',
            //     title: 'Ballet Clássico',
            //     resume: 'Conheça a elegância, a leveza e a flexibilidade dessa dança clássica',
            //     imgSrc: 'aulas/ballet-classico.jpg',
            //     imgAlt: 'Ballet Clássico',
            //     url: 'aula/ballet-classico',

            //     titleHightlight: 'Ballet <span class="highlight">Clássico</span>',
            //     srcHero: 'aulas/hero_ballet-classico.jpg',
            //     altHero: 'Ballet Clássico',
            //     description: '<p>Para você que sonha em ser uma bailarina profissional ou apenas quer praticar o Ballet para usufruir dos seus benefícios, oferecemos turmas de formação para todas as idades e turmas específicas para adultos que desejam iniciar nessa arte.</p>',
            //     requirements: `
            //         <ul>
            //             <li>• uniforme da escola composto por collant preto</li>
            //             <li>• meia calça</li>
            //             <li>• sapatilha rosa</li>
            //             <li>• cabelos presos em coque.</li>
            //         </ul>
            //     `
            // },
            {
                id: 'danca-do-ventre-infantil',
                title: 'Belly Dance Kids',
                resume: 'Traga sua pequena para uma aula lúdica e educativa que cuida e transforma, através do método Sasaki.',
                imgSrc: 'aulas/danca-do-ventre-infantil.jpg',
                imgAlt: 'Dança do Ventre Infantil',
                url: 'aula/danca-do-ventre-infantil',

                titleHightlight: '<span class="highlight">Belly Dance Kids</span>',
                srcHero: 'aulas/hero_danca-do-ventre-infantil.jpg',
                altHero: 'Dança do Ventre Infantil',
                description: `
                    <p>Traga sua pequena para ser uma Belly Kids, se divertir, fazer novas amizades através de aulas ministradas por professoras credenciada no método Sasaki, seguindo uma cuidadosa didática lúdica e educativa com as crianças.</p>
                    <p>Benefícios da Belly Dance Kids:</p>
                    <ul>
                        <li>treina o ouvido musical e a memória</li>
                        <li>desenvolve a concentração</li>
                        <li>melhora a força e flexibilidade</li>
                        <li>desenvolve a atenção</li>
                        <li>aumenta a autoconfiança</li>
                        <li>melhora as habilidades sociais</li>
                        <li>desenvolve perseverança</li>
                        <li>aumenta a criatividade</li>
                        <li>dá noção de improviso</li>
                    </ul>
                `,
                requirements: `
                    <ul>
                        <li>• sapatilha ou descalça</li>
                        <li>• blusa ou top</li>
                        <li>• calça legging</li>
                        <li>• lenço no quadril</li>
                    </ul>
                `
            },
            {
                id: 'danca-do-ventre',
                title: 'Dança do Ventre',
                resume: 'Desperte sua feminilidade, tenha um momento só seu! Venha dançar!',
                imgSrc: 'aulas/danca-do-ventre-adulto.jpg',
                imgAlt: 'Dança do Ventre',
                url: 'aula/danca-do-ventre',

                titleHightlight: 'Dança <span class="highlight">do Ventre</span>',
                srcHero: 'aulas/hero_danca-do-ventre-adulto.jpg',
                altHero: 'Dança do Ventre',
                description: `
                    <p>
                        A <strong>dança do ventre</strong> é umas das primeiras <strong>danças femininas</strong> que se tem registro.
                        Entre as danças é o estilo que mais expressa feminilidade.
                    </p>
                    <p>O estilo foi criada por mulheres e sua pratica pode trazer diversos benefícios ao corpo e mente, tais como:</p>
                    <ul>
                        <li>• melhora da auto-estima</li>
                        <li>• coordenação motora</li>
                        <li>• elasticidade</li>
                        <li>• musicalidade</li>
                        <li>• estimula a criatividade</li>
                        <li>• aumenta a disciplina</li>
                        <li>• E com uma dieta balanceada auxilia a perda de peso</li>
                    </ul>
                    <p>Que tal saber mais agendando uma <a href="contato" title="Agende uma aula experimental de dança do ventre">aula de Dança do Ventre</a> numa das melhores escolas da região, o <b>Espaço Luana Pinheiro</b>.</p>
                `,
                requirements: `
                    <ul>
                        <li>• descalça ou de sapatilha</li>
                        <li>• top ou blusinha</li>
                        <li>• calça legging</li>
                        <li>• lenço de quadril</li>
                    </ul>
                `
            },
            // {
            //     id: 'danca-do-ventre-juvenil',
            //     title: 'Dança do Ventre Juvenil',
            //     resume: 'Venha participar da turma de dança do ventre juvenil. Aulas diferenciadas, dinâmicas e muito divertidas',
            //     imgSrc: 'aulas/danca-do-ventre-juvenil.jpg',
            //     imgAlt: 'Dança do Ventre Juvenil',
            //     url: 'aula/danca-do-ventre-juvenil',

            //     titleHightlight: 'Dança <span class="highlight">do Ventre Juvenil</span>',
            //     srcHero: 'aulas/hero_danca-do-ventre-juvenil.jpg',
            //     altHero: 'Dança do Ventre Juvenil',
            //     description: `
            //         <p>Traga sua filha para participar de uma <a href="contato" title="Contato">aula experimental</a>. As aulas de <strong>dança do ventre juvenil</strong> são diferenciadas e dinâmicas.</p>
            //         <p>As aulas são destinadas ao público infantojuvenil (de 11 à 13 anos) e ministrada por professores credenciados no método Sasaki de ensino.</p>
            //         `,
            //     requirements: `
            //         <ul>
            //             <li>• sapatilha ou descalça</li>
            //             <li>• blusa ou top</li>
            //             <li>• calça legging</li>
            //             <li>• lenço no quadril</li>
            //         </ul>
            //     `
            // },
            {
                id: 'baby-ballet',
                title: 'Baby Ballet',
                resume: 'Conheça nossas aulas de Baby Ballet. Traga sua pequena, ela vai se apaixonar!',
                imgSrc: 'aulas/baby-ballet.jpg',
                imgAlt: 'Baby Ballet',
                url: 'aula/baby-ballet',

                titleHightlight: 'Baby <span class="highlight">Ballet</span>',
                srcHero: 'aulas/hero_baby-ballet.jpg',
                altHero: 'Baby Ballet',
                description: `<p>Aulas cuidadosamente preparadas para cada faixa etária das pequenas!!!</p>
                   <p>Estes são apenas alguns dos benefícios que sua pequena terá com as aulas de Baby Ballet:</p>
                   <ul>
                        <li>• Expressão corporal</li>
                        <li>• Coordenação motora</li>
                        <li>• Lateralidade</li>
                        <li>• Equilíbrio</li>
                        <li>• Noção espacial</li>
                        <li>• Memorização</li>
                        <li>• Musicalidade e ritmo</li>
                        <li>• Sonhos</li>
                        <li>• Disciplina</li>
                        <li>• Respeito ao próximo</li>
                        <li>• Sociabilidade</li>
                        <li>• Combate a timidez</li>
                        <li>• Sensibilidade</li>
                        <li>• Interação com a arte</li>
                   </ul>
                `,
                requirements: `
                    <p>Uniforme da escola composto por:</p>
                    <ul>
                        <li>- collant com sainha preta</li>
                        <li>- meia calça</li>
                        <li>- sapatilha rosa</li>
                        <li>- cabelos presos em coque.</li>
                        <ul>
                    `
            },
            {
                id: 'street-dance-kids',
                title: 'Street Kids',
                resume: 'Cuide da sua saúde e bem estar! Aumente sua autoestima combatendo a depressão dançando e de forma segura',
                imgSrc: 'aulas/street-dance-kids.jpg',
                imgAlt: 'Street Kids',
                url: 'aula/street-dance-kids',

                titleHightlight: 'Street <span class="highlight">Kids</span>',
                srcHero: 'aulas/hero_street-dance-kids.jpg',
                altHero: 'Street Kids',
                description: `<p>Aulas cuidadosamente preparadas para cada faixa etária das pequenas!!!</p>
                   <p>Aprenda a dança do ventre em Suzano do nível básico ao avançado profissional. Conheça também as aulas de Belly Dance Kids, Baby Ballet e Street Kids para a criançada.</p>
                `,
                requirements: false
            },
            // {
            //     id: 'pilates',
            //     title: 'Pilates',
            //     resume: 'Tenha o corpo saudável, cuide do seu bem-estar e gaste até 400 calorias/hr praticando Pilates',
            //     imgSrc: 'aulas/pilates.jpg',
            //     imgAlt: 'Pilates',
            //     url: 'aula/pilates',

            //     titleHightlight: 'Pilates',
            //     srcHero: 'aulas/hero_pilates.jpg',
            //     altHero: 'Pilates',
            //     description: '<p>O Pilates é um método de exercício físico que possui princípios de concentração, respiração, fluidez, ativação dos músculos do centro do corpo (abdome, transverso, assoalho pélvico e glúteo).</p><p>Todos os exercícios sejam eles de fortalecimento ou alongamento partem desses princípios.</p><p>Os exercícios do Pilates auxiliam na melhora da postura e tonificação da musculatura, coordenação e flexibilidade. Além de serem extremamente eficientes no tratamento e prevenção de dores na coluna.</p>',
            //     requirements: '<p>Vestimenta para aula: Roupas de ginástica e meia.</p>'
            // },
        ]
    },

    professores: {
        id: 'professores',
        title: 'Professores',
        singularTitle: 'Professor',
        photos: [
            {
                id: 'luana-pinheiro',
                classes: ['danca-do-ventre-infantil', 'danca-do-ventre'],
                title: 'Luana Pinheiro',
                imgSrc: 'professores/luana-pinheiro.jpg',
                imgAlt: 'Luana Pinheiro',
                resume: 'Diretora artística, professora, coreógrafa, bailarina de dança do ventre e ballet clássico. Certificada com o selo Khan El Kalili, selo Duna\'s e credenciada no método Sasaki',
                url: 'professor/luana-pinheiro',

                titleHightlight: 'Professora <span class="highlight">Luana Pinheiro</span>',
                srcHero: 'professores/luana-pinheiro_cover.jpg',
                altHero: 'Luana Pinheiro',
                description: `
                    <p>Proprietária do <strong>Espaço Luana Pinheiro</strong> inaugurado em 2001. Diretora artística, professora, coreógrafa e bailarina de <a href="http://luanapinheiro.com.br/aula/danca-do-ventre/" title="Dança do Ventre">dança do ventre</a> e <a href="http://luanapinheiro.com.br/aula/ballet-classico/" title="Ballet Clássico">ballet clássico</a>.</p>
                    <p>Certificada com padrão de qualidade <strong>Khan El Khalili</strong> desde 2005. <strong>Bailarina Noites no Harém Khan El Khalili</strong> desde 2010. Bailarina <strong>Selo Duna's</strong> desde 2017. Bailarina Clássica formada pela Escola Municipal de Bailado de SP desde 1998.</p>
                    <p>Idealizadora e Organizadora do evento anual <a href="https://www.facebook.com/Belly-Dance-Outubro-Rosa-351900235381255/?ref=nf&hc_ref=ARS0tTRU-1fS2t-y6IKUbsjJvJq3QHQjZuL257Dv3TEv-Clrhii6zSwGZfZfPHuUOMU" title="Bellydance Outubro Rosa" target="_blank" rel="noopener">Bellydance Outubro Rosa</a> em Suzano desde 2017. Idealizadora e Organizadora em parceria com Karin Calil do evento anual <a href="https://www.facebook.com/orientstarfestival/" title="Orient Star Festival" target="_blank" rel="noopener">Orient Star Festival</a> em Suzano desde 2017. Idealizadora e Organizadora em parceria com Fabiana Suhayla do evento anual <a href="https://www.facebook.com/Encontro-S%C3%A3o-Paulo-Belly-Dance-377166579474435/?eid=ARB_D2nX2DpXxd0JbuWQ7dn9r89AYCJCsHWJFjwXNjUOajgnDuvaYhv0PrRdr5Xx7fw6E4gWrOkGU7k3" title="Encontro São Paulo Bellydance Itaim Paulista" target="_blank" rel="noopener">Encontro São Paulo Bellydance Itaim Paulista</a> desde 2018.</p>
                    <p>Diretora dos espetáculos anuais do Espaço Luana Pinheiro. Possui especialização para professora de <a href="https://luanapinheiro.com.br/aula/baby-ballet/" title="Baby Class">Baby Class</a> e credenciada pelo método Sasaki para <a href="https://luanapinheiro.com.br/aula/danca-do-ventre-infantil/" title="Belly Dance Kids">Belly Dance Kids</a>.</p>
                    <p>Já trabalhou em mais de 20 escolas/academias com aulas de ballet clássico e dança do ventre para crianças e adultos. Bailarina nível internacional por realizar workshops e shows em Punta del Este e Montevideo no Uruguay. Mais de 20 anos de experiência na arte de ensinar, vive em constante estudo se reciclando com workshops e cursos para aprimoramento de suas aulas e dança.</p>
                `,
            },
            {
                id: 'fabiano-ponce',
                classes: ['ritmos-arabes'],
                title: 'Fabiano Ponce',
                imgSrc: 'professores/fabiano-ponce.jpg',
                imgAlt: 'Fabiano Ponce',
                resume: 'Estuda percussão árabe desde 2015 com o mestre do derback George Mouzayek. Integrante da banda árabe de Mohamad Azra realizando shows pelo Brasil',
                url: 'professor/fabiano-ponce',

                titleHightlight: 'Professor <span class="highlight">Fabiano Ponce</span>',
                srcHero: 'professores/fabiano-ponce_cover.jpg',
                altHero: 'Fabiano Ponce',
                description: `
                    <p>Empresário casado com Luana Pinheiro, iniciou seus estudos de percussão árabe em 2015 e mantém seus estudos com  o grande mestre do derback George Mouzayek.</p>
                    <p>Faz parte da banda árabe de Mohamad Azra realizando shows por todo o Brasil.</p>
                    <p>Realiza um trabalho ao lado de sua esposa Luana Pinheiro, auxiliando nas aulas de ritmos nas turmas dos níveis de intermediário e avançado, complementando assim o ensino e o método da escola.</p>
                `,
            },
            {
                id: 'claudinea-rodrigues',
                classes: ['danca-do-ventre'],
                title: 'Claudinea Rodrigues',
                imgSrc: 'professores/claudinea-rodrigues.jpg',
                imgAlt: 'Claudinea Rodrigues',
                resume: 'Iniciou seus estudos  de dança aos 26 anos em 2007. Formada pelo Espaço Luana Pinheiro desde 2015 e integrante do Grupo Especial Luana Pinheiro',
                url: 'professor/claudinea-rodrigues',

                titleHightlight: 'Professora <span class="highlight">Claudinea Rodrigues</span>',
                srcHero: 'professores/claudinea-rodrigues_cover.jpg',
                altHero: 'Claudinea Rodrigues',
                description: `
                    <p>Iniciou seus estudos  de dança aos 26 anos em 2007. Se formou pelo Espaço Luana Pinheiro em 2015 e a partir daí iniciou uma carreira profissional para trabalhar com aulas de dança do ventre!!!</p>
                    <p>Faz parte do Grupo Especial Luana Pinheiro participando e levando muitas premiações e destaques em festivais de dança!</p>
                    <p>Tem uma parceria ímpar com sua filha Karyn Aisha que também é uma bailarina em destaque no mundo da dança, juntas transmitem toda a paixão que sentem ao dançar nos palcos!</p>
                    <p>Clau tem um estilo diferenciado na dança, leve e delicado!</p>
                    <p>Hoje faz parte do grupo de professoras do EALP para poder transmitir as outras mulheres tudo o que a dança tem para lhes oferecer!</p>
                `,
            },
            {
                id: 'leticia-rosa',
                classes: ['baby-ballet'],
                title: 'Letícia Rosa',
                imgSrc: 'professores/leticia-rosa.jpg',
                imgAlt: 'Letícia Rosa',
                resume: 'Professora desde 2016, iniciando sua carreira junto a Secretaria de Cultura de Suzano',
                url: 'professor/leticia-rosa',

                titleHightlight: 'Professora <span class="highlight">Letícia Rosa</span>',
                srcHero: 'professores/leticia-rosa_cover.jpg',
                altHero: 'Letícia Rosa',
                description: '<p>Letícia Rosa iniciou seus estudos de ballet clássico em 2008 no Espaço artístico Luana Pinheiro, em 2016 iniciou como professora no Programa Vivências culturais juntamente com a Secretaria de Cultura de Suzano.</p>',
            },
            {
                id: 'larissa-auletta',
                classes: ['street-dance-kids'],
                title: 'Larissa Auletta',
                imgSrc: 'professores/larissa-auletta.jpg',
                imgAlt: 'Larissa Auletta',
                resume: 'Formada em Pedagogia e Libras avançada. Iniciou seus estudos na modalidade em 2009 hoje dá aulas e continua se aperfeiçoando.',
                url: 'professor/larissa-auletta',

                titleHightlight: 'Professora <span class="highlight">Larissa Auletta</span>',
                srcHero: 'professores/larissa-auletta_cover.jpg',
                altHero: 'Larissa Auletta',
                description: `
                    <p>Iniciei meus estudos na Cia de Artes Corpu's Dance no ano 2009 nas modalidades de Street Dance, Dança Contemporânea e Ballet Clássicos. No ano de 2012 fui contemplada com uma bolsa de estudo com duração de um ano na Cia Estável Promodança de São Paulo, como o compromisso de participar em todos os espetáculos e apresentações na grande São Paulo juntamente com seu elenco principal.</p>
                    <p>Logo dei continuidade nos estudos pelo Studio Dança e Cultura Márcia Belarmino e Escola livres para Dançar.</p>
                    <p>Desde então tive oportunidades de continuar aperfeiçoar minha técnica por meio de workshops, no h2district, mapa cultural, CDU, casa dança entre outros com profissionais nacionais e internacionais.</p>
                    <p>No ano de 2019 direção artística do espetáculo Mundo mágico (Colégio Kemp Mogi ) e espetáculo Em busca dos sonhos ( Colégio Alicerce do saber Suzano)</p>
                    <p>Formada também em Pedagogia e libras avançada visando o trabalho com o coletivo infantil, capaz de aprender a lidar com as diferenças e com o desafio de lidar com uma sala heterogênea.</p>
                `,
            },
            // {
            //     id: 'vanessa-oliveira',
            //     classes: ['danca-do-ventre', 'danca-do-ventre-infantil', 'danca-do-ventre-juvenil'],
            //     title: 'Vanessa Oliveira',
            //     imgSrc: 'professores/vanessa-oliveira.jpg',
            //     imgAlt: 'Vanessa Oliveira',
            //     resume: 'Professora desde 2003, formada em magistério, credenciada no método Sasaki e Integrante do Grupo 1001 Noites',
            //     url: 'professor/vanessa-oliveira',

            //     titleHightlight: 'Professora <span class="highlight">Vanessa Oliveira</span>',
            //     srcHero: 'professores/vanessa-oliveira_cover.jpg',
            //     altHero: 'Vanessa Oliveira',
            //     description: '<p>Iniciou seus estudos em 1999 com a professora Luana Pinheiro. Participou de vários workshops com profissionais como Ju Marconato, Ana Cláudia Borges, Kahina Alika Hanan e Mahaila El Helwa.</p><p>Integrante do Grupo 1001 Noites desde 2008, onde participa de inúmeros eventos levando a cultura árabe através da dança.</p><p>É professora desde 2003 e já lecionou aulas para adultos e crianças. Formada em magistério e credenciada no método Sasaki, se dedicou especialmente a Belly Dance Kids e juvenil.<br>Suas aulas são criativas e apaixonantes, uma professora amorosa com suas pequenas bellydancers.</p>',
            // },
            // {
            //     id: 'luciana-hadarah',
            //     classes: ['danca-do-ventre'],
            //     title: 'Luciana Hadarah',
            //     imgSrc: 'professores/luciana-hadarah.jpg',
            //     imgAlt: 'Luciana Hadarah',
            //     resume: 'Professora de dança à mais de 10 anos. Com um estilo delicado e suave. Possui um mega shimmie apreciado por todos que a conhecem',
            //     url: 'professor/luciana-hadarah/',

            //     titleHightlight: 'Professora <span class="highlight">Luciana Hadarah</span>',
            //     srcHero: 'professores/luciana-hadarah_cover.jpg',
            //     altHero: 'Luciana Hadarah',
            //     description: '<p>Iniciou seus estudos na dança em 1999 com Wal Sanches. Em 2000, começou a estudar com Luana Pinheiro na academia Rose Fittness onde trabalhou como professora de dança por 10 anos.</p><p>Foi integrante do Grupo Especial Luana Pinheiro de 2001 até 2012. Faz parte da equipe de professores do Espaço Luana Pinheiro desde 2002.</p><p>Seu estilo é delicado e suave, possui um mega shimmie apreciado por todos que a conhecem. É uma professora dedicada, amiga e muito comprometida com o aprendizado e bem estar de suas alunas!</p>',
            // },
            // {
            //     id: 'ingrid-catarine',
            //     classes: ['baby-ballet', 'ballet-classico'],
            //     title: 'Ingrid Catarine',
            //     imgSrc: 'professores/ingrid-catarine.jpg',
            //     imgAlt: 'Ingrid Catarine',
            //     resume: 'Fisioterapeuta e bailarina, formada em Ballet Clássico, Jazz Dance e Sapateado Americano pela Escola de Dança Fernanda Moretti',
            //     url: 'professor/ingrid-catarine',

            //     titleHightlight: 'Professora <span class="highlight">Ingrid Catarine</span>',
            //     srcHero: 'professores/ingrid-catarine_cover.jpg',
            //     altHero: 'Ingrid Catarine',
            //     description: '<p>Fisioterapeuta, bailarina e professora de "gente miúda!"</p><p>Formada em Ballet Clássico, Jazz Dance e Sapateado Americano pela Escola de Dança Fernanda Moretti Arte do Movimento.</p><p>Em 2015, foi bailarina no musical Natal Mágico, onde fez turnê pelo nordeste e sul do país. Atualmente, é bailarina e intérprete criadora da Cia Jovem Rumos de SP.</p><p>Realizou o Vocational Graded Examination in Ballet: Intermediate Foundation em 2016, onde conquistou Distinction. Possui cursos de especialização em Ballet Infantil: Como ensinar e encantar as crianças pelo Ballet; Psicomotricidade e Neurociência aplicados ao Baby Class para crianças de 2 à 7anos.</p><p>As crianças são apaixonadas por essa professora que ensina o ballet com tanto comprometimento e amor!</p>',
            // },
            // {
            //     id: 'louyze-chacon',
            //     classes: ['ballet-classico'],
            //     title: 'Louyze Chacon',
            //     imgSrc: 'professores/louyze-chacon.jpg',
            //     imgAlt: 'Louyze Chacon',
            //     resume: 'Formada em Ballet Clássico em 2018 no Espaço Luana Pinheiro. Estudou método vaganova com francês e estuda o método cubano',
            //     url: 'professor/louyze-chacon',

            //     titleHightlight: 'Professora <span class="highlight">Louyze Chacon</span>',
            //     srcHero: 'professores/louyze-chacon_cover.jpg',
            //     altHero: 'Louyze Chacon',
            //     description: '<p>Formada em Ballet Clássico em 2018 no Espaço Luana Pinheiro.</p><p>Estudou método vaganova com francês e estuda o método cubano. Atuou como professora de dança voluntária na Escola Estadual Roberto Bianchi em 2014.</p><p>Atua como professora de ballet clássico no Espaço Luana Pinheiro</p>',
            // },
            // {
            //     id: 'maria-fernanda',
            //     classes: ['baby-ballet'],
            //     title: 'Maria Fernanda Dorta',
            //     imgSrc: 'professores/maria-fernanda.jpg',
            //     imgAlt: 'Maria Fernanda Dorta',
            //     resume: 'Formada em Ballet Clássico desde 2016. Foi Demi Solista Jr Capezio e Demi Solista Sênior. Possui cursos de especialização em Técnica Russa',
            //     url: 'professor/maria-fernanda',

            //     titleHightlight: 'Professora <span class="highlight">Maria Fernanda Dorta</span>',
            //     srcHero: 'professores/maria-fernanda.jpg',
            //     altHero: 'Maria Fernanda Dorta',
            //     description: '<p>Formada em Ballet Clássico desde 2016 pelo Studio Márcia Belarmino. Atualmente participa da Cia jovem Tentáculo Dança. Foi Demi Solista Jr Capezio e Demi Solista Sênior Promodança nos anos de 2012/2013</p><p>Fez cursos de especialização em técnica russa como "Conteúdo Programático - Ballet Clássico Baseado na Técnica Russa" por Felipe Camarotto e "Introdução ao Método Vaganova" pela Escola do Teatro Bolshoi no Brasil</p>',
            // },
            // {
            //     id: 'tamiris-amirah',
            //     classes: ['danca-do-ventre'],
            //     title: 'Tamiris Amirah',
            //     imgSrc: 'professores/tamiris-amirah.jpg',
            //     imgAlt: 'Tamiris Amirah',
            //     resume: 'Formada em Educação Física Licenciatura. No ano de 2018 entrou para Selo Duna\'s e estagia desde então. Participa do grupo Folclórico Árabe Hawara Dabke',
            //     url: 'professor/tamiris-amirah',

            //     titleHightlight: 'Professora <span class="highlight">Tamiris Amirah</span>',
            //     srcHero: 'professores/tamiris-amirah_cover.jpg',
            //     altHero: 'Tamiris Amirah',
            //     description: `
            //         <p>Formada em Educação Física Licenciatura, iniciou seus estudos na Dança do Ventre em 2010 com a professora Luciana Hadarah, e continuou com seus estudos com Fabiana Suhayla, desde então não parou. Sempre em busca de aprimoramento fazendo cursos e workshops com profissionais como Ju Marconato, Karina, Márcio Mansur, Esmeralda Colabone, Luana Pinheiro, Dana el Farida, Priscilla Belle, Fabiana Brito, entre outros grandes nomes.</p>
            //         <p>No ano de 2018 entrou para Selo Duna's e estagia desde então. Participa do grupo Folclórico Árabe Hawara Dabke, faz inúmeros eventos levando a cultura árabe através da dança. Integrante da Cia Suhayla aonde teve várias premiações como no corpo de baila e coreógrafa.</p>
            //         <p>Leciona aula desde 2014 para crianças, jovens e adultos. Professora com o credenciamento método Sasaki.</p>
            //     `,
            // },
            // {
            //     id: 'marilia-nicacio',
            //     classes: false,
            //     title: 'Marília Nicácio',
            //     imgSrc: 'professores/marilia-nicacio.jpg',
            //     imgAlt: 'Marília Nicácio',
            //     resume: 'Em 2000 iniciou seus estudos na dança do ventre. Estudou em diversas escolas, integrou o Grupo Especial Luana Pinheiro. Atualmente integra a Cia Shey',
            //     url: 'professor/marilia-nicacio',

            //     titleHightlight: 'Professora <span class="highlight">Marília Nicácio</span>',
            //     srcHero: 'professores/marilia-nicacio_cover.jpg',
            //     altHero: 'Marília Nicácio',
            //     description: '<p>Iniciou seus estudos no ano 2000, na academia Phisical com a Bailarina Fátima, aos 12 anos de idade onde fez aulas por 2 anos e se apaixonou pela Arte da Dança do Ventre.</p><p>Em 2003 estudou no Espaço Luana Pinheiro e participou do espetáculo “O sonho de Amira”.</p><p>Em 2012 após se formar na faculdade de Administração de Empresas, retomou seus estudos na dança , pois sua vontade de dançar era maior do que qualquer coisa. Fez aulas na Escola Arte e Dança por 2 anos.</p><p>Foi para o Centro de Artes Lilian Gumieiro em 2014 permanecendo até o final do ano de 2015, onde integrou o Grupo Nureen.</p><p>Em 2017 voltou para o Espaço Luana Pinheiro, participou do Grupo Especial Espaço Luana Pinheiro, se formou na escola em 2018, onde ministra aulas de Dança do Ventre. Atualmente integra a Cia Shey.</p>',
            // },
            // {
            //     id: 'cleiton-costa',
            //     classes: ['ballet-classico'],
            //     title: 'Cleiton Costa',
            //     imgSrc: 'professores/cleiton-costa.jpg',
            //     imgAlt: 'Cleiton Costa',
            //     resume: 'Bailarino e coreógrafo, formado em Ballet Clássico no Ballet Danielle Bittencourt. Atuou como bailarino na rede de resorts Magic Life na Turquia',
            //     url: 'professor/cleiton-costa',

            //     titleHightlight: 'Professor <span class="highlight">Cleiton Costa</span>',
            //     srcHero: 'professores/cleiton-costa_cover.jpg',
            //     altHero: 'Cleiton Costa',
            //     description: '<p>Professor de Ballet Clássico no Espaço Luana Pinheiro. Formado em Ballet Clássico em 2008 no Ballet Danielle Bittencourt e em Jazz Dance em 2011 no Centro de Arte Lilian Gumieiro.</p><p>Fez várias especializações nestas modalidades incluindo: Contemporâneo, Dança Afro e Dança do Ventre com grandes nomes da dança.</p><p>Já se apresentou em diversos estados brasileiros e atuou como bailarino na rede de resorts Magic Life na Turquia.</p><p>Desenvolve um trabalho diferenciado na direção de musicais que levam seu nome. Atua como professor, bailarino e coreógrafo desde 2005.</p>',
            // },
            // {
            //     id: 'giovana-campos',
            //     classes: ['contemporaneo'],
            //     title: 'Giovana Campos',
            //     imgSrc: 'professores/giovana-campos.jpg',
            //     imgAlt: 'Giovana Campos',
            //     resume: 'Formada em dança contemporânea pela escola Livres para Dançar, estudante de fisioterapia, bailarina e professora de dança contemporânea',
            //     url: 'professor/giovana-campos',

            //     titleHightlight: 'Professora <span class="highlight">Giovana Campos</span>',
            //     srcHero: 'professores/giovana-campos.jpg',
            //     altHero: 'Giovana Campos',
            //     description: `
            //         <p>Formada em dança contemporânea pela escola Livres para Dançar, com a professora Jéssica Fadul (bailarina do Balé da cidade de São Paulo).</p>
            //         <p>Iniciou seus estudos aos 12 anos, e durante seu percurso participou de diversos festivais e competições como Abba dance, Arte e movimento, Passo de Arte e Alliance Dance, conquistando vários prêmios em dinheiro e troféus para sua escola.</p>
            //         <p>Além da sua formação em dança contemporânea, já realizou aulas em outras modalidades como balé clássico e jazz, e outras vivencias durante o período em que estudou no curso técnico de dança na Etec de artes em SP.</p>
            //         <p>Atualmente é bailarina do Coletivo Bordas, o primeiro coletivo de dança contemporânea da cidade de Mogi das Cruzes, participando da montagem e circulação do espetáculo A(MOR)TE a partir do Programa de Fomento à Arte e Cultura – PROFAC.</p>
            //     `,
            // },
            // {
            //     id: 'jaqueline-felix',
            //     classes: ['ballet-classico', 'contemporaneo'],
            //     title: 'Jaqueline Felix',
            //     imgSrc: 'professores/jaqueline-felix.jpg',
            //     imgAlt: 'Jaqueline Felix',
            //     resume: 'Iniciou seus estudos em Ballet Clássico no ano de 2000. Formada em Técnico em Dança na ETEC de Artes em SP',
            //     url: 'professor/jaqueline-felix',

            //     titleHightlight: 'Professora <span class="highlight">Jaqueline Felix</span>',
            //     srcHero: 'professores/jaqueline-felix.jpg',
            //     altHero: 'Jaqueline Felix',
            //     description: 'Iniciou seus estudos em Ballet Clássico no ano de 2000, na antiga Escola Municipal de Bailado de Itaquaquecetuba de SP, onde também cursou oficina de dança moderna. Participou de cursos de dança com os professores Geiza Moreira, Guivalde de Almeida, Vera Aragão, Katia Rocha, Joseph Lopes, entre outros. Em 2008, participou do Núcleo de Artes Cênicas de SESI - Brás Cubas. Em 2009, integrou o corpo de voluntários do Centro Comunitário Anunciata Cocchetti, onde atuou como professora de Ballet Clássico e na organização de espetáculos de dança. Em 2017, formou-se em Gestão de Políticas Públicas pela Universidade de São Paulo - USP e participou do curso livre de Ballet Clássico da Escola de Dança do Teatro Municipal de São Paulo. Atualmente, cursa Técnico em Dança na ETEC de Artes em SP, participa do grupo de "Estudos em Corpo e Arte" do programa de mestrado da Each-USP e é professora de dança no programa Vivências Culturais da secretaria municipal de cultura de Suzano. Faz parte da equipe de professores do Espaço Luana Pinheiro com aulas de Ballet Clássico e Dança Contemporânea.',
            // }
        ]
    },

    schedules: [
        {
            class       : 'todas',
            srcCover    : 'schedule/professores-luana-pinheiro.jpg',
            srcCoverLg  : 'schedule/professores-luana-pinheiro_large.jpg',
            altCover    : 'Professores do Espaço Luana Pinheiro',
            url         : 'assets/downloads/horarios-das-aulas_espaco-artistico-luana-pinheiro.pdf',
            description : '<p>Faça o download de nossa grade de turmas e horários. Entre em contato conosco para tirar suas dúvidas <br>e <a href="contato" title="Contato">agende sua aula experimental</a>.</p><p>Esperamos por você!</p>',
        },
        {
            class       : 'danca-do-ventre-infantil',
            srcCover    : 'schedule/danca-do-ventre-infantil.jpg',
            srcCoverLg  : 'schedule/professores-luana-pinheiro_large.jpg',
            altCover    : 'Professores Danca do Ventre Infantil',
            url         : false,
            description : '<p>Faça o download de nossa grade de turmas e horários. Entre em contato conosco para tirar suas dúvidas <br>e <a href="contato" title="Contato">agende sua aula experimental</a>.</p><p>Esperamos por você!</p>'
            // levels: [

            //     {
            //         name: 'Baby 3 e 4 anos',
            //         schedules: [
            //             '<span>SEG</span> 18h15 às 19h Vanessa Oliveira',
            //         ]
            //     },
            //     {
            //         name: 'Infantil de 5 à 7 anos',
            //         schedules: [
            //             '<span>SÁB</span> 10h30 às 11h30 Vanessa Oliveira',
            //         ]
            //     },
            //     {
            //         name: 'Infantil de 8 à 10 anos',
            //         schedules: [
            //             '<span>TER</span> 18h às 19h Vanessa Oliveira',
            //         ]
            //     },
            // ]
        },
        {
            class       : 'danca-do-ventre-juvenil',
            srcCover    : 'schedule/danca-do-ventre-juvenil.jpg',
            srcCoverLg  : 'schedule/professores-luana-pinheiro_large.jpg',
            altCover    : 'Professores Danca do Ventre Juvenil',
            url         : false,
            description : '<p>Faça o download de nossa grade de turmas e horários. Entre em contato conosco para tirar suas dúvidas <br>e <a href="contato" title="Contato">agende sua aula experimental</a>.</p><p>Esperamos por você!</p>',
            // levels: [
            //     {
            //         name: 'Infantojuvenil 11 à 13 anos',
            //         schedules: [
            //             '<span>TER</span> 19h às 20h30 Vanessa Oliveira',
            //         ]
            //     },
            // ]
        },

        {
            class       : 'baby-ballet',
            srcCover    : 'schedule/baby-ballet.jpg',
            srcCoverLg  : 'schedule/professores-luana-pinheiro_large.jpg',
            altCover    : 'Professores de Baby Ballet',
            url         : '',
            description : '<p>Faça o download de nossa grade de turmas e horários. Entre em contato conosco para tirar suas dúvidas <br>e <a href="contato" title="Contato">agende sua aula experimental</a>.</p><p>Esperamos por você!</p>',
            // levels: [
            //     {
            //         name: '2 e 3 anos',
            //         schedules: [
            //             '<span>SÁB</span> 11h30 às 12h30 Maria Fernanda',
            //        ]
            //     },
            //     {
            //         name: '4 e 5 anos',
            //         schedules: [
            //             '<span>SÁB</span> 10h30 às 11h30 Maria Fernanda',
            //         ]
            //     },
            //     {
            //         name: '6 e 7 anos (pré Ballet)',
            //         schedules: [
            //             '<span>SÁB</span> 12h às 13h Ingrid Catarine',
            //         ]
            //     },
            // ]
        },

        {
            class       : 'danca-do-ventre',
            srcCover    : 'schedule/danca-do-ventre.jpg',
            srcCoverLg  : 'schedule/professores-luana-pinheiro_large.jpg',
            altCover    : 'Professores de Danca do Ventre',
            url         : '',
            description : '<p>Faça o download de nossa grade de turmas e horários. Entre em contato conosco para tirar suas dúvidas <br>e <a href="contato" title="Contato">agende sua aula experimental</a>.</p><p>Esperamos por você!</p>',
            // levels: [
            //     {
            //         name: 'Iniciante',
            //         schedules: [
            //             '<span>SEG</span> 19h às 20h30 Tamiris Amirah*',
            //             '<span>SÁB</span> 8h às 9h30 Claudinea Rodrigues',
            //         ]
            //     },
            //     {
            //         name: 'Básico 1 (6 meses à 1 ano)',
            //         schedules: [
            //             '<span>TER</span> 18h30 às 20h Claudinea Rodrigues',
            //             '<span>SÁB</span> 14h às 15h30 Luciana Hadarah',
            //         ]
            //     },
            //     {
            //         name: 'Básico 2 (2º ano)',
            //         schedules: [
            //             '<span>QUI</span> 19h30 às 21h Luana Pinheiro',
            //         ]
            //     },
            //     {
            //         name: 'Intermediário 1 (3º ano)',
            //         schedules: [
            //             '<span>SEG</span> 19h às 20h30 Vanessa Oliveira',
            //             // '<span>TER</span> 14h às 15h30 Luana Pinheiro',
            //             '<span>QUI</span> 19h30 às 21h Luciana Hadarah',
            //             '<span>SÁB</span> 9h às 10h30 Luana Pinheiro',
            //         ]
            //     },
            //     {
            //         name: 'Intermediário 2 (4º ano)',
            //         schedules: [
            //             '<span>TER</span> 20h às 21h30 Luana Pinheiro',
            //             '<span>QUA</span> 18h30 às 20h Luciana Hadarah',
            //         ]
            //     },
            //     {
            //         name: 'Intermediário 3 (5º ano)',
            //         schedules: [
            //             '<span>QUA</span> 18h às 19h30 Luana Pinheiro',
            //         ]
            //     },
            //     {
            //         name: 'Avançado 1 e 2 (a partir do 6º ano)',
            //         schedules: [
            //             '<span>QUA</span> 19h30 às 21h Luana Pinheiro',
            //             '<span>SEX</span> 19h às 20h30 Luana Pinheiro',
            //             '<span>SÁB</span> 13h30 às 15h Luana Pinheiro',
            //         ]
            //     },
            // ]
        },

        {
            class       : 'ballet-classico',
            srcCover    : 'schedule/ballet-classico.jpg',
            srcCoverLg  : 'schedule/professores-luana-pinheiro_large.jpg',
            altCover    : 'Professores de Ballet Classico',
            url         : '',
            description : '<p>Faça o download de nossa grade de turmas e horários. Entre em contato conosco para tirar suas dúvidas <br>e <a href="contato" title="Contato">agende sua aula experimental</a>.</p><p>Esperamos por você!</p>',
            // levels: [
            //     {
            //         name: 'Básico 1º ano',
            //         schedules: [
            //             '<span>QUI</span> 19h30 às 20h30 Jaqueline Felix',
            //             '<span>SÁB</span> 9h30 às 10h30 Ingrid Catarine',
            //         ]
            //     },
            //     {
            //         name: 'Básico 2º e 3º ano',
            //         schedules: [
            //             '<span>QUA</span> 18h30 às 20h Maria Fernanda',
            //             '<span>SÁB</span> 10h30 às 12h Ingrid Catarine',
            //         ]
            //     },
            //     {
            //         name: 'Intermediário 4º e 5º ano',
            //         schedules: [
            //             '<span>QUA</span> 20h às 21h30 Maria Fernanda',
            //             '<span>SÁB</span> 13h às 14h30 Ingrid Catarine',
            //         ]
            //     },
            //     {
            //         name: 'Avançado 6º e 7º ano',
            //         schedules: [
            //             '<span>QUI</span> 18h às 19h30 Jaqueline Felix',
            //             '<span>SÁB</span> 8h às 9h30 Maria Fernanda',
            //         ]
            //     },
            //     {
            //         name: 'Adulto Básico',
            //         schedules: [
            //             '<span>TER</span> 19h às 20h Louyze Chacon',
            //             '<span>SÁB</span> 9h30 às 10h30 Louyze Chacon',
            //         ]
            //     },
            // ]
        },

        // {
        //     class       : 'pilates',
        //     srcCover    : 'schedule/pilates.jpg',
        //     srcCoverLg  : 'schedule/professores-luana-pinheiro_large.jpg',
        //     altCover    : 'Professores de Pilates',
        //     url         : '',
        //     levels: [
        //         {
        //             name: 'Pilates Solo',
        //             schedules: [
        //                 '<span>SÁB</span> 9h30 às 10h30 Ingrid Catarine',
        //             ]
        //         },
        //     ]
        // },
        {
            class       : 'contemporaneo',
            srcCover    : 'schedule/contemporaneo.jpg',
            srcCoverLg  : 'schedule/professores-luana-pinheiro_large.jpg',
            altCover    : 'Professores de Contemporâneo',
            url         : '',
            description : '<p>Faça o download de nossa grade de turmas e horários. Entre em contato conosco para tirar suas dúvidas <br>e <a href="contato" title="Contato">agende sua aula experimental</a>.</p><p>Esperamos por você!</p>',
            levels: [
                {
                    name: 'Contemporâneo Iniciante e Básico',
                    schedules: [
                        '<span>SEX</span> 19h às 20h Giovanna Campos',
                    ]
                },
                {
                    name: 'Contemporâneo Intermediário',
                    schedules: [
                        '<span>SÁB</span> 13h às 14h Giovanna Campos',
                    ]
                },
            ]
        },
    ],

    schema: {
        "@id" : "https://luanapinheiro.com.br",
        "@context" : "http://schema.org",
        "@type" : "LocalBusiness",
        "name" : "Espaço Luana Pinheiro",
        "logo" : "https://luanapinheiro.com.br/assets/images/favicon/apple-touch-icon.png",
        "image" : [
            "https://luanapinheiro.com.br/assets/images/favicon/apple-touch-icon.png",
            "https://luanapinheiro.com.br/assets/images/favicon/4x3.jpg",
            "https://luanapinheiro.com.br/assets/images/favicon/16x9.jpg"
        ],
        "telephone" : "+551147433688",
        "email" : "luanaealp@hotmail.com",
        "address" : {
            "@type" : "PostalAddress",
            "streetAddress" : "Av. Mogi das Cruzes, 51 - Parque Suzano",
            "addressLocality" : "Suzano",
            "addressRegion" : "SP",
            "addressCountry" : "Brasil",
            "postalCode" : "08673-010"
        },
        "sameAs" : [
           "https://twitter.com/luanacpinheiro",
           "https://www.facebook.com/espacoartisticoluanapinheiro/",
           "https://www.instagram.com/luanapinheiroespacoartistico/",
           "https://www.youtube.com/channel/UCzgodg7z4NiRigePmQJPM0g"
        ],
        "url" : "https://luanapinheiro.com.br/",
        "priceRange": "$$",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "5"
        }
        // "reviewRating": {
        //     "@type": "Rating",
        //     "ratingValue": "5"
        // }
    },
};
