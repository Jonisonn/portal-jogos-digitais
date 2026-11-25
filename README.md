# Jogos Digitais | Portal Acadêmico

Protótipo funcional v1.0 — IFMS Campus Dourados. Site estático, sem servidor, sem dependências externas e sem coleta de dados. Não representa publicação ou aprovação institucional.

## Testar localmente

Extraia todos os arquivos e abra `index.html` no navegador. Para comportamento de armazenamento mais previsível, use VS Code + Live Server ou `python -m http.server 8000` e acesse `http://localhost:8000`.

## Publicar no GitHub Pages

1. Crie um repositório público chamado `portal-jogos-digitais` (preferencialmente em uma organização vinculada ao curso, com autorização institucional).
2. Envie **o conteúdo** desta pasta, não a pasta externa. `index.html`, `assets/`, `data/` e `.nojekyll` devem ficar na raiz.
3. Em Settings → Pages → Build and deployment, escolha Deploy from a branch, branch `main`, pasta `/(root)` e Save.
4. O GitHub exibirá a URL publicada; o padrão é `https://USUARIO.github.io/portal-jogos-digitais/`.
5. Confirme se o site funciona no celular, se os links institucionais estão corretos e se a identidade está autorizada, antes de divulgar.

Documentação: https://docs.github.com/en/pages/getting-started-with-github-pages/quickstart

## Atualizar os conteúdos

- `data/conteudo.js`: cursos, plataformas, avisos e data de revisão. O arquivo é JavaScript com objetos de dados, para permitir abrir o site localmente sem servidor HTTP. Mantenha os identificadores únicos e a estrutura dos registros. Não use datas fictícias. Use `prazo: null` para conteúdo permanente; datas AAAA-MM-DD expiram após o fim daquele dia no horário de Campo Grande. As ofertas encerradas podem ser consultadas pelo filtro; avisos vencidos deixam de aparecer.
- `index.html`: textos, seções, links fixos, FAQ e rodapé.
- `assets/style.css`: cores e layout responsivo.
- `assets/app.js`: busca, filtros, registro e exportação de atividades.
- `assets/icon.svg`: marca gráfica provisória, criada para o protótipo (não é o logotipo oficial do IFMS).

Exemplo de novo aviso (inserir na lista `avisos`, com vírgulas entre objetos):
```js
{tipo:'EVENTO',titulo:'Nome do evento',descricao:'Informações confirmadas',prazo:'2027-03-20',url:'https://endereco-real-do-evento',rotulo:'Consultar programação'}
```

## Revisão institucional antes da divulgação

- A meta de 160 horas vem do PPC de 2025, seção 5.5, páginas impressas 120–121 de 166, consultado na biblioteca do projeto. Confirmar a matriz aplicável a cada turma, o PPC oficialmente vigente e o RODP atualizado. A meta também aparece no HTML; caso mude, altere `PORTAL.metaHoras` e as menções fixas no HTML. O controle não simula fatores de conversão nem limites por categoria. Somente horas já validadas entram no progresso; o estudante declara essa condição manualmente.
- Confirmar links, procedimentos de envio de comprovantes, prazos e contato oficial da coordenação. Não inventamos e-mail ou horário de atendimento. A página oficial do curso serve de referência.
- Verificar marca/identidade visual, titularidade do repositório e autorização de divulgação; o portal é complementar e não substitui SUAP, Moodle nem o site institucional.
- As ofertas 2026.2 foram registradas a partir da notícia de 03/09/2026 (inscrições até 05/12, conclusão até 17/12): https://www.ifms.edu.br/noticias/2026/confira-lista-de-cursos-livres-disponiveis/ . Cada cartão tem fonte e link para catálogo. As condições de certificado gratuito dependem da conclusão e aprovação conforme a instituição. Plataformas sem comprovação confirmada são marcadas para consulta; material autônomo não implica certificação.
- Revisar mensalmente links e oportunidades. Nenhum evento, vaga ou bolsa sem fonte foi incluído. O mural começa com aviso real e links permanentes de consulta.
- O navegador armazena registros no LocalStorage; não há login ou sincronização. Exporte o CSV para backup. Evite dados sensíveis e nomes de terceiros; o CSV é local e não envia informações para a instituição. Limpar os dados do navegador apaga os registros.
