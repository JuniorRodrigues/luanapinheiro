module.exports = {
    schema: [
        {
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
                "streetAddress" : "Rua Benjamin Constant, 1269 Sobreloja - Centro",
                "addressLocality" : "Suzano",
                "addressRegion" : "SP",
                "addressCountry" : "Brasil",
                "postalCode" : "08674-010"
            },
            "url" : "https://luanapinheiro.com.br/",
            "priceRange": "$$"
        },
        {
            "@context" : "http://schema.org",
            "@type" : "FAQPage",
            "url": "https://luanapinheiro.com.br/duvidas",
            "image": "https://luanapinheiro.com.br/assets/images/hero-duvidas.jpg",
            "mainEntity" : [
                {
                    "@type" : "Question",
                    "name" : "Quais os benefícios da dança?",
                    "text" : "A dança fortalece a musculatura e articulações, aumenta a frequência cardíaca, melhora a flexibilidade e a postura, ajuda a perder peso, melhora a capacidade respiratória, a coordenação motora e a circulação sanguínea. A dança traz um equilíbrio emocional, auxilia a concentração e a memória, alivia o estresse, a ansiedade. Aumenta a autoestima, estimula a criatividade. E quando praticada em grupo, a dança proporciona socialização e maior interação entre os indivíduos.",
                    "acceptedAnswer" : {
                        "@type" : "Answer",
                        "text" : "A dança fortalece a musculatura e articulações, aumenta a frequência cardíaca, melhora a flexibilidade e a postura, ajuda a perder peso, melhora a capacidade respiratória, a coordenação motora e a circulação sanguínea. A dança traz um equilíbrio emocional, auxilia a concentração e a memória, alivia o estresse, a ansiedade. Aumenta a autoestima, estimula a criatividade. E quando praticada em grupo, a dança proporciona socialização e maior interação entre os indivíduos."
                    }
                },
                {
                    "@type" : "Question",
                    "name" : "Posso fazer uma aula experimental?",
                    "text" : "Sim, agende sua aula experimental conosco, ela é gratuita.",
                    "acceptedAnswer" : {
                        "@type" : "Answer",
                        "text" : "Sim, agende sua aula experimental conosco, ela é gratuita."
                    }
                },
                {
                    "@type" : "Question",
                    "name" : "O que devo usar nas aulas de Dança do Ventre?",
                    "text" : "Você pode usar um top ou uma blusa que seja mais justa, para que seus movimentos fiquem visíveis na dança. Utilize uma calça ou bermuda de ginástica que seja confortável, permitindo a amplitude dos movimentos e que modele seu corpo. Use um lenço de quadril ou xale. Você pode dançar descalça ou de sapatilha de dança.",
                    "acceptedAnswer" : {
                        "@type" : "Answer",
                        "text" : "Você pode usar um top ou uma blusa que seja mais justa, para que seus movimentos fiquem visíveis na dança. Utilize uma calça ou bermuda de ginástica que seja confortável, permitindo a amplitude dos movimentos e que modele seu corpo. Use um lenço de quadril ou xale. Você pode dançar descalça ou de sapatilha de dança."
                    }
                },
                {
                    "@type" : "Question",
                    "name" : "O que devo usar nas aulas de Ballet ou Contemporâneo?",
                    "text" : "Para as aulas de ballet, as mulheres e meninas usam collant, meia calça com saia ou short e sapatilha. Os homens e meninos usam calças de malha, regata e sapatilha. Se for uma aula experimental, caso você não tenha as roupas específicas, use uma roupa confortável, um pouco mais justa para que não atrapalhe os movimentos.",
                    "acceptedAnswer" : {
                        "@type" : "Answer",
                        "text" : "Para as aulas de ballet, as mulheres e meninas usam collant, meia calça com saia ou short e sapatilha. Os homens e meninos usam calças de malha, regata e sapatilha. Se for uma aula experimental, caso você não tenha as roupas específicas, use uma roupa confortável, um pouco mais justa para que não atrapalhe os movimentos."
                    }
                },
                {
                    "@type" : "Question",
                    "name" : "Por que usamos lenço no quadril?",
                    "text" : "O lenço no quadril além de embelezar a dança do ventre, destaca os movimentos dessa região do corpo, facilitando o aprendizado na dança. Você pode escolher o modelo de sua preferência, com moedas ou sem elas, e pode adquirir o seu na escola.",
                    "acceptedAnswer" : {
                        "@type" : "Answer",
                        "text" : "O lenço no quadril além de embelezar a dança do ventre, destaca os movimentos dessa região do corpo, facilitando o aprendizado na dança. Você pode escolher o modelo de sua preferência, com moedas ou sem elas, e pode adquirir o seu na escola."
                    }
                },
                {
                    "@type" : "Question",
                    "name" : "Dança do ventre dá barriga?",
                    "text" : "Não, isso é um mito! A prática de dança do ventre acelera o metabolismo, tonifica a musculatura do abdômen e afina a cintura. O que aumenta o volume da barriga é gordura localizada e sedentarismo!",
                    "acceptedAnswer" : {
                        "@type" : "Answer",
                        "text" : "Não, isso é um mito! A prática de dança do ventre acelera o metabolismo, tonifica a musculatura do abdômen e afina a cintura. O que aumenta o volume da barriga é gordura localizada e sedentarismo!"
                    }
                },
                {
                    "@type" : "Question",
                    "name" : "Posso fazer dança do ventre se estiver grávida?",
                    "text" : "Antes de praticar qualquer atividade física, é de suma importância consultar o médico. Mulheres que dançaram durante a gestação com acompanhamento médico comentam os seguintes benefícios: redução de inchaço, enjoos e fadiga, controle de peso, controle da bexiga, controle da pressão arterial, alívio de dores proporcionando relaxamento, entre outros.",
                    "acceptedAnswer" : {
                        "@type" : "Answer",
                        "text" : "Antes de praticar qualquer atividade física, é de suma importância consultar o médico. Mulheres que dançaram durante a gestação com acompanhamento médico comentam os seguintes benefícios: redução de inchaço, enjoos e fadiga, controle de peso, controle da bexiga, controle da pressão arterial, alívio de dores proporcionando relaxamento, entre outros."
                    }
                },
                {
                    "@type" : "Question",
                    "name" : "Na escola tem aulas de especialização?",
                    "text" : "Sim, periodicamente proporcionamos as nossas alunas e demais interessados a participação nos Workshops com profissionais renomados da dança.",
                    "acceptedAnswer" : {
                        "@type" : "Answer",
                        "text" : "Sim, periodicamente proporcionamos as nossas alunas e demais interessados a participação nos Workshops com profissionais renomados da dança."
                    }
                },
                {
                    "@type" : "Question",
                    "name" : "Tem formação para profissionalização?",
                    "text" : "Sim, nós temos uma metodologia de formação continuada. A aluna que desejar se profissionalilzar, deve passar por todos os níveis do curso e receberá sua formação mediante prova avaliativa. Temos na escola professoras que se formaram conosco e fizeram carreira na dança. Periodicamente, temos cursos de aperfeiçoamento para professores.",
                    "acceptedAnswer" : {
                        "@type" : "Answer",
                        "text" : "Sim, nós temos uma metodologia de formação continuada. A aluna que desejar se profissionalilzar, deve passar por todos os níveis do curso e receberá sua formação mediante prova avaliativa. Temos na escola professoras que se formaram conosco e fizeram carreira na dança. Periodicamente, temos cursos de aperfeiçoamento para professores."
                    }
                },
                {
                    "@type" : "Question",
                    "name" : "A escola promove apresentações de dança?",
                    "text" : "Sim, frequentemente levamos nossas alunas para se apresentarem em diversos lugares, inclusive em eventos beneficentes. Além disso, temos os espetáculos anuais ao final de cada ano. As apresentações não são obrigatórias, mas incentivamos as alunas a se apresentarem pois a alegria de estar no palco dançando tudo que você aprendeu e se esforçou ao longo do ano é algo contagiante e de se apaixonar!",
                    "acceptedAnswer" : {
                        "@type" : "Answer",
                        "text" : "Sim, frequentemente levamos nossas alunas para se apresentarem em diversos lugares, inclusive em eventos beneficentes. Além disso, temos os espetáculos anuais ao final de cada ano. As apresentações não são obrigatórias, mas incentivamos as alunas a se apresentarem pois a alegria de estar no palco dançando tudo que você aprendeu e se esforçou ao longo do ano é algo contagiante e de se apaixonar!"
                    }
                },
                {
                    "@type" : "Question",
                    "name" : "Nunca dancei será que consigo aprender?",
                    "text" : "No começo os movimentos são totalmente novos para o corpo e por mais simples que um movimento pareça, às vezes encontraremos dificuldades em executá-lo. Por isso tenha paciência e determinação, pratique muito, seja dedicado, pois com o tempo os movimentos serão mais fluídos.",
                    "acceptedAnswer" : {
                        "@type" : "Answer",
                        "text" : "No começo os movimentos são totalmente novos para o corpo e por mais simples que um movimento pareça, às vezes encontraremos dificuldades em executá-lo. Por isso tenha paciência e determinação, pratique muito, seja dedicado, pois com o tempo os movimentos serão mais fluídos."
                    }
                },
                {
                    "@type" : "Question",
                    "name" : "Sou muito tímida, estou acima do peso, não tenho gingado, estou na melhor idade... será que eu consigo dançar?",
                    "text" : "A dança do ventre não requer um corpo ideal! Até pessoas que são cadeirantes, ou sofreram AVC praticam a dança do ventre. Não existe limite de idade para dançar se você possui o vigor físico para isso. Além disso, a dança te auxiliará a perder a timidez e promove a interação social. E não se preocupe, a leveza e a naturalidade serão adquiridas com a prática da dança. O mesmo serve para os iniciantes de ballet adulto tenham paciência e persitência que vocês conseguirão dançar!",
                    "acceptedAnswer" : {
                        "@type" : "Answer",
                        "text" : "A dança do ventre não requer um corpo ideal! Até pessoas que são cadeirantes, ou sofreram AVC praticam a dança do ventre. Não existe limite de idade para dançar se você possui o vigor físico para isso. Além disso, a dança te auxiliará a perder a timidez e promove a interação social. E não se preocupe, a leveza e a naturalidade serão adquiridas com a prática da dança. O mesmo serve para os iniciantes de ballet adulto tenham paciência e persitência que vocês conseguirão dançar!"
                    }
                },
                {
                    "@type" : "Question",
                    "name" : "Dança do ventre é para crianças?",
                    "text" : "Com certeza! A dança permite a vivência de outra cultura, estimula a memória, aprimora a consciência corporal, a flexibilidade, a noção de lateralidade, a coordenação motora das pequeninas, além de promover as interações sociais. A Dança do Ventre cuida, cura e transforma a vida das crianças.",
                    "acceptedAnswer" : {
                        "@type" : "Answer",
                        "text" : "Com certeza! A dança permite a vivência de outra cultura, estimula a memória, aprimora a consciência corporal, a flexibilidade, a noção de lateralidade, a coordenação motora das pequeninas, além de promover as interações sociais. A Dança do Ventre cuida, cura e transforma a vida das crianças."
                    }
                },
                {
                    "@type" : "Question",
                    "name" : "Minha filha só tem 2 anos posso colocá-la no Baby Ballet?",
                    "text" : "Sim, nossa escola tem um trabalho diferenciado com Baby Ballet possibilitando a inicialização de “gente muito miúda” nas aulas de Ballet, dividimos as turmas em 3 níveis: 2 e 3 anos, 4 e 5 anos e 6 e 7 anos, assim cada turminha tem o aprendizado específico para sua idade.",
                    "acceptedAnswer" : {
                        "@type" : "Answer",
                        "text" : "Sim, nossa escola tem um trabalho diferenciado com Baby Ballet possibilitando a inicialização de “gente muito miúda” nas aulas de Ballet, dividimos as turmas em 3 níveis: 2 e 3 anos, 4 e 5 anos e 6 e 7 anos, assim cada turminha tem o aprendizado específico para sua idade."
                    }
                },
            ]
        }
    ],
    duvidas: [
        {
            question: 'Quais os benefícios da dança?',
            answer: 'A dança fortalece a musculatura e articulações, aumenta a frequência cardíaca, melhora a flexibilidade e a postura, ajuda a perder peso, melhora a capacidade respiratória, a coordenação motora e a circulação sanguínea. A dança traz um equilíbrio emocional, auxilia a concentração e a memória, alivia o estresse, a ansiedade. Aumenta a autoestima, estimula a criatividade. E quando praticada em grupo, a dança proporciona socialização e maior interação entre os indivíduos.'
        },
        {
            question: 'Posso fazer uma aula experimental?',
            answer: 'Sim, agende sua aula experimental conosco, ela é gratuita.'
        },
        {
            question: 'O que devo usar nas aulas de Dança do Ventre?',
            answer: 'Você pode usar um top ou uma blusa que seja mais justa, para que seus movimentos fiquem visíveis na dança. Utilize uma calça ou bermuda de ginástica que seja confortável, permitindo a amplitude dos movimentos e que modele seu corpo. Use um lenço de quadril ou xale. Você pode dançar descalça ou de sapatilha de dança.'
        },
        {
            question: 'O que devo usar nas aulas de Ballet ou Contemporâneo?',
            answer:' Para as aulas de ballet, as mulheres e meninas usam collant, meia calça com saia ou short e sapatilha. Os homens e meninos usam calças de malha, regata e sapatilha. Se for uma aula experimental, caso você não tenha as roupas específicas, use uma roupa confortável, um pouco mais justa para que não atrapalhe os movimentos.'
        },
        {
            question: 'Posso fazer mais de uma aula por semana?',
            answer: 'Sim, fique à vontade para fazer mais aulas durante a semana e participar de outras modalidades!'
        },
        {
            question: 'Quanto tempo leva para aprender a dançar?',
            answer: 'Não é possível especificar o tempo que demorará, pois temos que levar em conta fatores como: condicionamento físico, intimidade com os movimentos da dança, frequência de aulas, dedicação à dança fora do ambiente de aula, frequência de ensaios e treinos além das aulas!'
        },
        {
            question: 'Por que usamos lenço no quadril?',
            answer: 'O lenço no quadril além de embelezar a dança do ventre, destaca os movimentos dessa região do corpo, facilitando o aprendizado na dança. Você pode escolher o modelo de sua preferência, com moedas ou sem elas, e pode adquirir o seu na escola.'
        },
        {
            question: 'Dançar emagrece?',
            answer: 'Sim, por ser uma atividade física, quando praticada em alta intensidade é possível gastar até 400 calorias por hora!'
        },
        {
            question: 'Dança do ventre dá barriga?',
            answer: 'Não, isso é um mito! A prática de dança do ventre acelera o metabolismo, tonifica a musculatura do abdômen e afina a cintura. O que aumenta o volume da barriga é gordura localizada e sedentarismo!  '
        },
        {
            question: 'Posso fazer dança do ventre se estiver grávida?',
            answer: 'Antes de praticar qualquer atividade física, é de suma importância consultar o médico. Mulheres que dançaram durante a gestação com acompanhamento médico comentam os seguintes benefícios:  redução de inchaço, enjoos e fadiga, controle de peso, controle da bexiga, controle da pressão arterial, alívio de dores proporcionando relaxamento, entre outros.'
        },
        {
            question: 'Na escola tem aulas de especialização?',
            answer: 'Sim, periodicamente proporcionamos as nossas alunas e demais interessados a participação nos Workshops com profissionais renomados da dança.'
        },
        {
            question: 'Tem formação para profissionalização?',
            answer: 'Sim, nós temos uma metodologia de formação continuada. A aluna que desejar se profissionalilzar, deve passar por todos os níveis do curso e receberá sua formação mediante prova avaliativa. Temos na escola professoras que se formaram conosco e fizeram carreira na dança. Periodicamente, temos cursos de aperfeiçoamento para professores.'
        },
        {
            question: 'A escola promove apresentações de dança?',
            answer: 'Sim, frequentemente levamos nossas alunas para se apresentarem em diversos lugares, inclusive em eventos beneficentes. Além disso, temos os espetáculos anuais ao final de cada ano. As apresentações não são obrigatórias, mas incentivamos as alunas a se apresentarem pois a alegria de estar no palco dançando tudo que você aprendeu e se esforçou ao longo do ano é algo contagiante e de se apaixonar!'
        },
        {
            question: 'Nunca dancei será que consigo aprender?',
            answer: 'No começo os movimentos são totalmente novos para o corpo e por mais simples que um movimento pareça, às vezes encontraremos dificuldades em executá-lo. Por isso tenha paciência e determinação, pratique muito, seja dedicado, pois com o tempo os movimentos serão mais fluídos.'
        },
        {
            question: ' Sou muito tímida, estou acima do peso, não tenho gingado, estou na melhor idade... será que eu consigo dançar?',
            answer: 'A dança do ventre não requer um corpo ideal! Até pessoas que são cadeirantes, ou sofreram AVC praticam a dança do ventre. Não existe limite de idade para dançar se você possui o vigor físico para isso. Além disso, a dança te auxiliará a perder a timidez e promove a interação social. E não se preocupe, a leveza e a naturalidade serão adquiridas com a prática da dança. O mesmo serve para os iniciantes de ballet adulto tenham paciência e persitência que vocês conseguirão dançar! '
        },
        {
            question: 'Dança do ventre é para crianças?',
            answer: 'Com certeza! A dança permite a vivência de outra cultura, estimula a memória, aprimora a consciência corporal, a flexibilidade, a noção de lateralidade, a coordenação motora das pequeninas, além de promover as interações sociais. A Dança do Ventre cuida, cura e transforma a vida das crianças.'
        },
        {
            question: 'Minha filha só tem 2 anos posso colocá-la no Baby Ballet?',
            answer: 'Sim, nossa escola tem um trabalho diferenciado com Baby Ballet possibilitando a inicialização de “gente muito miúda” nas aulas de Ballet, dividimos as turmas em 3 níveis: 2 e 3 anos, 4 e 5 anos e 6 e 7 anos, assim cada turminha tem o aprendizado específico para sua idade.'
        },
        {
            question: 'Quantos alunos são por turma?',
            answer: 'Temos turmas com quantidade reduzida de alunos, para que os professores consigam dar mais atenção individualizada.'
        },
        {
            question: 'Já fiz aula antes em outro lugar, posso avançar de nível?',
            answer: 'O ideal é que você faça uma aula experimental, para que possa ser avaliado em qual nível você está apto a fazer aula.'
        },
        {
            question: 'Tem reposição de aula?',
            answer: 'Sim, caso o aluno precise faltar deve reagendar a reposição de aula em um dos horários já existentes com a recepção da escola.'
        },
    ]
};
