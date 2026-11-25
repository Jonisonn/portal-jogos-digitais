# Jogos Digitais — IFMS Campus Dourados · V5

Portal estático de graduação, preparado para GitHub Pages. Não exige instalação de dependências, banco de dados nem servidor de aplicação.

## Publicação
1. Extraia o ZIP e envie seu conteúdo (inclusive `.nojekyll`) à raiz de um repositório público.
2. No GitHub, abra Settings → Pages → Deploy from a branch → main → /(root) → Save.
3. Confira todas as páginas no endereço fornecido pelo GitHub, especialmente o organizador e seus downloads. Não publique dados pessoais de estudantes no repositório.

## Páginas
- `index.html`: apresentação, notícia de destaque, atalhos, formação e portfólio.
- `curso.html`: graduação e matriz curricular.
- `projetos.html`: jogos e GameLab, sem as fotos antigas do laboratório.
- `noticias.html`: registro da visita técnica ao Pantanal Game Show (texto e foto fornecidos pela coordenação; confirmar autorização de divulgação antes de publicar).
- `estudante.html`: avisos, regras de atividades complementares, cursos e documentos.
- `atividades.html`: registro pessoal, estimativa de pontos, ficha Word e backup.
- `links.html`: central de acessos; os demais links semestrais e canais estão na Linktree existente.

## Atualização
Edite `data/conteudo.js` para cursos e avisos, com prazos no formato AAAA-MM-DD. Ofertas e avisos vencidos deixam de aparecer por padrão. Notícias permanentes são publicadas em `noticias.html`; para trocar o destaque, edite a seção `.v5-feature` de `index.html`. Use imagens próprias autorizadas em `assets/img/`, com texto alternativo. Não distribua fontes comerciais sem licença.

## Organizador de atividades
A lógica em `assets/atividades.js` implementa os 20 itens do Anexo I do ROD (Resolução Cosup/IFMS nº 15, de 12/02/2026) e os dois itens específicos do PPC (3.7 e 3.8, seção 5.5). Meta: 160 pontos/horas. Tetos: item/semestre, categoria/semestre e categoria/curso. O cálculo distribui pontos cronologicamente por semestre, data final e ordem de registro. Não limita o total geral a 160: mostra todo o aproveitamento estimado e o restante até a meta. Atividades anteriores à data de ingresso ficam fora da estimativa (transferência/reingresso exigem análise). O estudante informa meses completos ou participações comprovados. A interpretação de 4.5 é 5 pontos por publicação. Semestres sugeridos por data final civil, com edição manual conforme calendário. Para atividades que atravessam semestres, o estudante deve lançar parcelas comprovadas distintas sem duplicação. Não há validação oficial nem integração com SUAP. A ficha .docx é uma reprodução editável dos campos do Anexo II, não uma cópia gráfica idêntica: carga conferida, situação, carga total oficial e assinaturas ficam em branco; o demonstrativo auxiliar contém pontos estimados e limites. O PDF original segue disponível.

Dados pessoais e atividades são armazenados apenas no navegador (chave `jd-dourados-atividades-v5`). O backup JSON pode conter dados pessoais: guarde-o com segurança. Não use computadores compartilhados sem limpar os dados ao terminar. Registros V1 são disponibilizados para exportação separada, pois não têm datas e categorias suficientes para migração automática. Ao usar arquivo local, o comportamento do armazenamento depende do navegador; recomenda-se testar no GitHub Pages.

## Referências
- PPC dezembro/2025, seção 5.5 — `documentos/ppc-2025.pdf`.
- ROD, Resolução Cosup/IFMS nº 15/2026 — `documentos/rod-2026.pdf`, arts. 100–108, Anexo I e II.
- ROD institucional: https://www.ifms.edu.br/centrais-de-conteudo/documentos-institucionais/regulamentos/regulamento-da-organizacao-didatico-pedagogica-2025
- Manual de identidade visual Jogos Digitais (2020): roxo #7459DC, #3C2F8C, cinza #494949, preto #1D1D1A e branco. Marca original vetorial. Fontes de sistema na interface por ausência dos arquivos de fontes licenciados para web.
- Referências de organização de conteúdo: PUC-SP (https://www.pucsp.br/graduacao/jogos-digitais), Centro Universitário Senac (https://www.sp.senac.br/graduacao/bacharelado-em-jogos-digitais), DigiPen (https://www.digipen.edu/academics/game-design-and-development-degrees/ba-in-game-design), NYU Game Center (https://gamecenter.nyu.edu/academics/game-design-bfa/). Inspiração na apresentação da formação, projetos, produção estudantil e comunidade, sem copiar seus layouts.

## Testes
11 casos de cálculo em Node.js, incluindo limites simultâneos e acúmulo entre semestres; sete páginas renderizadas no Chromium; cadastro de cinco atividades e exportação .docx testados. Documento aberto e renderizado pelo LibreOffice. O ambiente bloqueou navegação local/HTTP, então os recursos foram inseridos diretamente no navegador de testes e o armazenamento foi simulado. Persistência real e restauração de backup devem ser confirmadas na hospedagem. Revisar enquadramento e fluxo de entrega com o docente responsável antes do lançamento.
