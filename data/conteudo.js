/* Edite este arquivo para atualizar o portal. Não é necessário alterar o HTML.
   Datas no formato AAAA-MM-DD. Use null quando não houver prazo fixo.
   Não publique dados pessoais, certificados ou notas. */
const PORTAL = {
  revisao: '2026-11-25',
  metaHoras: 160,
  cursos: [
    // As ofertas abaixo usam o catálogo e a notícia institucional de 2026.2.
    ...[
      ['unity','Desenvolvimento de Jogos 2D com Unity','Desenvolvimento de jogos',40,'Fundamentos de jogos, Unity, scripts em C# e animações.'],
      ['ia','Introdução a Inteligência Artificial','Programação e tecnologia',30,'Amplie seus conhecimentos sobre inteligência artificial.'],
      ['animacao','Luz, Câmera e Animação: stop motion na ciência','Arte e narrativa',30,'Explore a produção de animação por stop motion.'],
      ['marketing','Marketing Digital','Mercado e gestão',60,'Conheça estratégias de comunicação e divulgação digital.'],
      ['empreendedorismo','Iniciação ao Empreendedorismo','Mercado e gestão',20,'Conceitos de empreendedorismo e inovação.'],
      ['logica','Introdução à Lógica','Programação e tecnologia',45,'Desenvolva fundamentos do raciocínio lógico.'],
      ['dados','Introdução a Ciência de Dados','Programação e tecnologia',45,'Primeiros passos na área de ciência de dados.'],
      ['modelagem','Modelagem 3D de Sólidos: Básico','Arte e narrativa',32,'Introdução à modelagem tridimensional de sólidos.'],
      ['arduino','Introdução a Lógica de Programação com Arduino','Programação e tecnologia',30,'Pratique lógica de programação com Arduino.'],
      ['historias','Narrativas Históricas de Mato Grosso do Sul','Arte e narrativa',20,'Conheça narrativas regionais para ampliar repertório cultural.'],
      ['libras','Libras Básico','Idiomas e formação geral',40,'Introdução à Língua Brasileira de Sinais.'],
      ['etica','Ética e Integridade na Pesquisa','Idiomas e formação geral',20,'Conheça princípios de ética na pesquisa.']
    ].map(([id,titulo,area,horas,descricao])=>({id,titulo,area,horas,descricao,instituicao:'IFMS',tipo:'curso',certificado:'gratuito',prazo:'2026-12-05',conclusao:'2026-12-17',url:'https://ava.cursoslivres.ifms.edu.br/local/catalogocursos/index.php?lang=pt_br',fonte:'https://www.ifms.edu.br/noticias/2026/confira-lista-de-cursos-livres-disponiveis/'})),
    {id:'ifms',titulo:'Cursos Livres IFMS',instituicao:'IFMS',area:'Multidisciplinar',tipo:'plataforma',horas:null,certificado:'gratuito',descricao:'Catálogo institucional de cursos livres em tecnologia, idiomas, gestão e outras áreas.',url:'https://cursoslivres.ifms.edu.br/',fonte:'https://www.ifms.edu.br/noticias/2026/confira-lista-de-cursos-livres-disponiveis/'},
    {id:'aprenda',titulo:'Aprenda Mais',instituicao:'MEC / Rede Federal',area:'Multidisciplinar',tipo:'plataforma',horas:null,certificado:'gratuito',descricao:'Cursos abertos de formação profissional, idiomas, tecnologia e gestão.',url:'https://aprendamais.mec.gov.br/',fonte:'https://aprendamais.mec.gov.br/mod/page/view.php?id=100&lang=pt_br'},
    {id:'ifrs',titulo:'Cursos Abertos IFRS',instituicao:'IFRS',area:'Multidisciplinar',tipo:'plataforma',horas:null,certificado:'gratuito',descricao:'Cursos on-line em diferentes áreas, com certificado para concluintes aprovados.',url:'https://moodle.ifrs.edu.br/',fonte:'https://moodle.ifrs.edu.br/mod/page/view.php?id=286116'},
    {id:'bradesco',titulo:'Escola Virtual',instituicao:'Fundação Bradesco',area:'Programação e tecnologia',tipo:'plataforma',horas:null,certificado:'gratuito',descricao:'Cursos de informática, desenvolvimento de software e formação profissional.',url:'https://www.ev.org.br/',fonte:'https://www.ev.org.br/FAQ'},
    {id:'evg',titulo:'Escola Virtual de Governo',instituicao:'ENAP',area:'Mercado e gestão',tipo:'plataforma',horas:null,certificado:'consultar',descricao:'Explore gestão de projetos, inovação e tecnologia. Consulte a ficha de cada curso.',url:'https://www.escolavirtual.gov.br/',fonte:'https://escolavirtual.gov.br/programa/350'},
    {id:'sebrae',titulo:'Cursos on-line Sebrae',instituicao:'Sebrae',area:'Mercado e gestão',tipo:'plataforma',horas:null,certificado:'consultar',descricao:'Empreendedorismo, marketing e gestão de negócios. Selecione as opções gratuitas.',url:'https://loja.sebrae.com.br/cursos/cursos-online',fonte:'https://loja.sebrae.com.br/'},
    {id:'unitylearn',titulo:'Unity Learn',instituicao:'Unity',area:'Desenvolvimento de jogos',tipo:'plataforma',horas:null,certificado:'consultar',descricao:'Tutoriais e trilhas de aprendizagem para desenvolver jogos. Verifique o tipo de comprovação disponível.',url:'https://learn.unity.com/',fonte:'https://learn.unity.com/'},
    {id:'godot',titulo:'Documentação Godot',instituicao:'Godot Engine',area:'Desenvolvimento de jogos',tipo:'plataforma',horas:null,certificado:'consultar',descricao:'Material gratuito para estudo autônomo de motores de jogos. Não é um curso certificado.',url:'https://docs.godotengine.org/pt-br/stable/',fonte:'https://docs.godotengine.org/pt-br/stable/'}
  ],
  avisos:[
    {tipo:"VISITA TÉCNICA",titulo:"IFMS Dourados no Pantanal Game Show 2026",descricao:"21 estudantes participam do evento em Campo Grande nos dias 25 e 26 de novembro.",prazo:"2026-11-26",url:"noticias.html#pantanal",rotulo:"Ler notícia"},
    {tipo:'CURSOS LIVRES',titulo:'Inscrições IFMS · 2026.2',descricao:'Inscrições até 5 de dezembro e conclusão até 17 de dezembro de 2026. Confira os cursos e as condições na notícia institucional.',prazo:'2026-12-05',url:'https://www.ifms.edu.br/noticias/2026/confira-lista-de-cursos-livres-disponiveis/',rotulo:'Ver comunicado'},
    {tipo:'ORIENTAÇÃO',titulo:'Organize suas atividades complementares',descricao:'Reserve parte dos períodos disponíveis para participar de atividades formativas e guardar os comprovantes. Confira os critérios do PPC antes de solicitar aproveitamento.',prazo:null,url:'#formacao',rotulo:'Ver orientações'}
  ]
};
