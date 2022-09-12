Aula 11 - Como estilizar uma Interface da Web
dardoObjetivos:
Entender como escrever o código CSS, além de utilizar-lo junto do HTML;
Aprender como funciona o uso de escolhidos para aplicar o CSS em elementos da página;
Aprender e usar o método BEM para melhorar a nomenclatura das classes.
Tópicos
Fundamentos de CSS
Seletores
Método BEM
Fundamentos de CSS
O CSS (Cascading Style Sheets) é utilizado para personalizar os elementos que estruturamos a tela através do HTML. Ou seja, o código CSS descreve como os elementos HTML devem ser exibidos em tela (permitindo manipular outras posições, núcleos, fontes e vários aspectos visuais).

Sintaxe
A escrita do CSS consiste em utilizar Seletores e Propriedades para definir uma regra de personalização para um ou mais elementos.

Seletor: Definir quais elementos serão estilizados, ou quais serão, definimos "a localização" desses elementos em página. geralmente usa classes, id e tag para fazer essa localização.

Propriedades: São as informações de personalização que serão aplicadas nos elementos encontrados através de um Seletor . as propriedades são escritas no formato chave-valor, ou, elas começam com o tipo da estilização e finalizam com o valor dessa estilização. Por fim, vale a pena ressaltar que no fim da escrita de cada propriedade devemos adicionar um ;.

Veja uma lista completa das propriedades de CSS

Ou seja, no CSS nós escolhemos quais elementos vamos estilizar e, em seguida, definimos quais serão as estilizações aplicadas a esses elementos.

Exemplo: Usar texto branco e fundo preto em todos os elementos com a tag <button>, ou seja, os elementos com estrutura <button></button>.
button {
	background-color: #000000;
	color: #FFFFFF;
}
Comentários
É comum surgir a necessidade de adicionar comentários para documentar o código, sendo assim, é possível escrever comentários no código CSS.

Eles geralmente começam com um /*e terminam com um */, conforme pode ser visto no exemplo abaixo:

Exemplo: Comentário em código CSS
/*
	Esse é um comentário em um código CSS.
*/
Inserindo CSS na página
Diversas formas de inserir um código CSS existem na página. Nesse sentido, o ideal é entender como todas elas funcionam, visto que isso facilita a tomada de decisão sobre qual formato será usado quando você estiver em um site.

Marcação<style>
geralmente usa uma tag <style>dentro da tag headpara definir o código CSS dentro da página. Podemos usar diversas tags <style>para organizar melhor as estilizações.

Exemplo: Inserção de código CSS através da tag <style>dentro da tag <head>da página.
<head>
	<style>
		button {
			background-color: #000000;
			color: #FFFFFF;
		}
	</style>
</head>
Em linha
Podemos inserir uma estilização em um elemento fazendo uso do atributo style. O valor desse atributo como propriedades de estilização que foram aplicadas no elemento.

Exemplo: Inserção de código CSS diretamente em um elemento através do triuto style.
<button style="background-color: #000000; color: #FFFFFF">CLIQUE AQUI</button>
Arquivo Externo
Escrever todo o código CSS em um arquivo com extensão .csse fazer uma atribuição dele dentro do HTML Podemos para que a estilização seja aplicada dentro da página. nós fazemos uma cobrança de arquivos CSS na tag <head>.

*Obs: É mais comum usar esse formato, visto que ele nos permite organizar/estruturar melhor todas as estilizações. Além disso, ele pode ajudar no envio da parte principal da página, visto que cada arquivo é carregado.

Exemplo: Inserção de código CSS através de um arquivo externo.
Arquivostyles.css

button {
	background-color: #000000;
	color: #FFFFFF;
}
Importação do arquivo styles.cssdentro do código HTML

<head>
	<link rel="stylesheet" type="text/css" href="styles.css">
</head>
Seletores
Como escolher quais são, as páginas escolhidas nos definem serão estilizadas em uma definição. Ou seja, somos capazes de definir esses elementos dentro do CSS.

Veja uma lista completa com os padrões definidos

id, classe, etiqueta
A forma mais comum de selecionar quais elementos estilizar, está fazendo uso do atributo id, classou indicando o nome de uma tag.

Exemplo: Use a cor preta no texto dos elementos com a tag <h1>, ou seja, os elementos com estrutura <h1></h1>.
h1 {
	color: #000000;
}
Exemplo: Use a cor preta no texto dos elementos que usam a classe "title", ou seja, os elementos com o atributo class="title".
.title {
	color: #000000;
}
Exemplo: Use a cor preta no texto do elemento com id "title", ou seja, o elemento com o atributo id="title".
#title {
	color: #000000;
}
Combinação de Seletores
É possível criar que combinem. para centralizar regras de personalização além de resolver mais variadas para problemas

Exemplo: Reutilizar uma estilização em mais de um utilizado
Supondo que temos uma estilização igual para dois elementos

h1 {
	color: #000000;
}

h2 {
	color: #000000;
}
Podemos combinar os conjuntos selecionados, separando por uma seleção ,para reutilizar a mesma estilização de selecionados.

h1, h2 {
	color: #000000;
}
Exemplo: Especificar um elemento dentro do outro através de um elemento específico
header h1 {
	color: #000000;
}
No exemplo acima, estamos dizendo que todo <h1>o que estiver dentro de uma <header>será estilizado com color: #000000. Ou seja, na prática funcionará conforme o exemplo abaixo.

<header>
	<div>
		<!-- ✅ Será estilizado, pois está dentro da <header> -->
		<h1>TEXTO</h1>
	</div>

	<!-- ✅ Será estilizado, pois está dentro da <header> -->
	<h1>TEXTO</h1>
</header>

<!-- 🚫 Não será estilizado, pois não está dentro da <header> -->
<h1>TEXTO</h1>
Exemplo: Elemento com classe ou id especificados
h1.title {
	color: #000000;
}

h2#subtitle {
	color: #FFF000;
}
No exemplo acima, estamos dizendo que:

- Todo <h1>que possuir o atributo class="title"será estilizado com color: #000000.

- Todo <h2>que possuir o atributo id="subtitle"será estilizado com color: #FFF000.

Ou seja, na prática teríamos o seguinte comportamento:

<!-- 🚫 Não será estilizado, pois não possui classe 'title' -->
<h1>TEXTO</h1>
<!-- ✅ Será estilizado, pois possui classe 'title' -->
<h1 class="title">TEXTO</h1>

<!-- 🚫 Não será estilizado, pois não pois possui id 'subtitle' -->
<h2>TEXTO</h2>
<!-- ✅ Será estilizado, pois possui id 'subtitle' -->
<h2 id="subtitle">TEXTO</h2>
Padrões úteis de Seletores
Os elementos específicos, vários outros produtos, podem ser até mesmo para localizações que tenham um atributo determinado.

Por padrão, no CSS temos "pseudo-classes" que denotam um estado especial para um elemento (por exemplo, quando o mouse está sendo passado em cima do elemento). Essas "pseudo-classes" podem ser utilizadas juntas de selecionadas para criar novas lógicas.

Exemplo: Seletor que localiza o primeiro elemento dentro de outro
h1:first-child {
	background-color: #000000;
}
No exemplo acima, estamos dizendo que caso <h1>o primeiro elemento "filho" de outro elemento, terá background-color: #000000.

<div>
	<!-- ✅ Será estilizado, pois é o primeiro elemento 'filho' do <div> -->
	<h1>TEXTO</h1>

	<!-- 🚫 Não será estilizado, pois não é o primeiro elemento 'filho' do <div> -->
	<h1>TEXTO</h1>
</div>
Exemplo: Seletor que localize o último elemento "filho" dentro de outro
h2:last-child {
	background-color: #000000;
}
No exemplo acima, estamos dizendo que caso <h2>o último elemento "filho" de outro elemento, terá background-color: #000000.

<div>
	<!-- 🚫 Não será estilizado, pois não é o último elemento 'filho' do <div> -->
	<h2>TEXTO</h2>

	<!-- ✅ Será estilizado, pois é o último elemento 'filho' do <div> -->
	<h2>TEXTO</h2>
</div>
Exemplo: Seletor que localiza todos os elementos dentro de outro elemento
div > * {
	background-color: #000000;
}
No exemplo acima, estamos pensando que todos os elementos que estão dentro de um div, terão background-color: #000000.

<div>
	<!-- ✅ Será estilizado, pois é "filho" do <div> -->
	<h1>TEXTO</h1>

	<!-- ✅ Será estilizado, pois é "filho" do <div> -->
	<h2>TEXTO</h2>
</div>
Precedência de Seletores
Os elementos da página podem ser estilizados por diversas regras de personalização ao mesmo tempo.

Sendo assim, é comum essas regras sobre a ocorrência e, esta sobreposição de acordo com o nível de especificidade de um específico.

Hierarquia de Especificidade
A hierarquia da especificidade é a seguinte (da maior para a menor):

Quando utilizamos a estilização diretamente no elemento através do atributo style.

Quando você usa o atributo id.

Quando utilizamos o atributo classde classe (também chamado de classe).

Seletores de atributos e pseudo-classes também estão aqui.
Quando usamos o elemento de tag(também chamado de elemento)

Seletores de pseudo elementos também estão aqui.
Além da regra de hierarquia, quanto mais informações fornecermos para tornar-se mais específico, ele se tornará mais específico.

Exemplo: Usar um de sua mesma quantidade mas mais específico
/* Seletor de 'tag' menos específico */
h1 {
	background-color: #FF0000;
}

/* Seletor de 'tag' mais específico */
div h1 {
	background-color: #FFF111;
}
Na prática, teremos o seguinte comportamento:

<div>
	<!-- Será estilizado com o seletor 'div h1' que é mais específico -->
	<h1>TEXTO</h1>
</div>
Exemplo : Especificidade igual de escolhidos
Quando temos de definir uma última estilização, a regra de definição será definida.

/* É ignorado por ter sido definido primeiro */
h1 {
	background-color: #FF0000;
}

/* É aplicado por ter sido definido por último */
h1 {
	background-color: #FFF111;
}
Sobreposição de Importância (avisoNão recomendado)
Uma propriedade prática não recomendada, é um suplemento de uma regra de estilização que é capaz de ignorar qualquer outra regra que tenha sido feita anteriormente.

Ou seja, isso faz com que a hierarquia de "perca" seu funcionamento.

Levando em consideração o exemplo anterior, o selecionado em 'div h1' é mais específico e portanto é aplicado:

h1 {
	background-color: #FF0000;
}

div h1 {
	background-color: #FFF111;
}
Porém, caso usemos uma propriedade de importância, é possível "ignorar" qualquer regra de especificidade existente:

h1 {
	/*
		A propriedade '!important' faz com que agora
		a estilização de 'background-color: #FF0000'
		seja aplicada independente do fato do seletor
		'h1' ser menos específico que o 'div h1'.
	*/
	background-color: #FF0000 !important;
}

div h1 {
	background-color: #FFF111;
}
Método BEM
Dar tudo o que está ao nosso redor é algo extremamente difícil, visto que facilita o nome para muito entendimento.

O mesmo ocorre com a ocorrência de outras classes, que podem ser consideradas como sendo que lidam com o mesmo código.

Nesse sentido, surge o método BEM (Block, Element, Modifier) ​​que traz uma proposta de nomenclatura que divide e pensa a arquitetura da interface em blocos, elementos e modificadores.

Arquitetura de Interface
Bloco
É único e independente, ou seja, não se repete. Além disso, geralmente é o primeiro componente idealizado/construído que carrega os comportamentos e estilos mais genéricos. Por fim, um bloco pode conter elementos ou outros blocos.

*Obs: O nome da classe de um Bloco geralmente descreve seu propósito (menu, formulário, etc.) e não o seu estilo/estado (branco, padding, etc.).


Elemento
Ele está diretamente relacionado a um bloco, ou seja, não pode ser utilizado sem a existência de um bloco.

*Obs: O nome da classe de um Elemento geralmente descreve seu propósito (texto, input, etc.) e não o seu estilo/estado (preto, padding, etc.).


Modificador
Carrega características específicas de aparência, estado e comportamento. Além disso, é opcional e pode estar atrelado tanto a um Bloco quanto a um Elemento .

*Obs: O nome da classe de um modificador sempre descreve características, por exemplo disabled(estado), color-white(aparência), fade-to-below(comportamento).


Nomenclatura
Dessa forma, uma nomenclatura do método BEM utiliza essa divisão de arquitetura de interface de Blocos, Elementos e Modificadores , propondo a utilização do seguinte padrão:

Bloco__Elemento_Modificador

Caso o nome do Bloco, Elemento ou Modificador para composto, o mais comum é usar um hífen -para separar como palavras.

Exemplo: Nomenclatura de um elemento de entrada com estado desabilitado dentro de um bloco de formulário de pesquisa

search-form__content-input_disabled

Aula 12 - Gerando espaçamento e posicionando os elementos de uma interface
dardoObjetivos:
Ter noções de quais são as principais unidades de medida no CSS;
Aprender como diversas formas de criar espaçamentos entre os elementos;
Entender as melhores maneiras de posicionar os elementos ao longo da página;
Tópicos
Espaçamentos
Posicionamentos
Espaçamentos
Quando acessamos os elementos apresentados, é possível entender que existe um espaço entre eles, para garantir que as informações mais organizadas e melhores de entender.

Nesse sentido, temos um conjunto de informações personalizadas para o CSS que são dedicados ao lidar com os espaços de elementos que estão apenas presentes na tela.

Unidades de medida
Para criar espaçamentos, precisamos usar medidas para definir o "tamanho" desses espaçamentos. Sendo assim, existem dois tipos de medidas: Abosluto e Relativo.

Veja mais informações sobre todas as unidades de medida

Medidas Absolutas
São medidas que não são referenciadas a nenhuma outra medida, ou não dependem de um valor de referência. Podemos considerar nesse caso unidades pela física.

Nesse sentido, existem várias unidades que podem ser utilizadas, porém o mais comum será utilizado:

Pixel (px)
Medidas Relativas
Diferente das medidas absolutas, como dependentes de uma outra unidade de medida como base.

Os tipos de medidas relativas mais comuns de uso são:

REM (rem): muito útil para criar páginas responsivas, ele utiliza como base um valor definido na raiz da página.

Porcentagem (%): geralmente essa é relativa ao tamanho do elemento pai filho que estamos estilizando.

Viewport Width (vw): utiliza como base o tamanho da tela como um todo.

Viewport Height (vh): utiliza como base o tamanho da altura da tela como um todo.

Preenchimento
O preenchimento é utilizado para dizer qual a distância que um elemento quer ter com relação a outros elementos que estão dentro dele.

O valor pode ser definido em todas as regras do padding (cima, direita esquerda).


Nessa imagem, é possível visualizar que o elemento é a delimitação laranja, logo, a delimitação verde é a distância entre o próprio elemento e outros elementos que estão dentro dele.

Exemplo: Aumentando a distância entre um botão e o texto dentro em 8px para todas as fontes deletadas
button {
	/* 1ª Forma (segue a ordem: cima, direita, baixo, esquerda) */
	padding: 8px 8px 8px 8px;

	/* 2ª Forma (utiliza uma propriedade para cada direção) */
	padding-top: 8px;
	padding-right: 8px;
	padding-bottom: 8px;
	padding-left: 8px;

	/* 3ª Forma (todas as direções com um valor) */
	padding: 8px;
}
Veja mais informações sobre o preenchimento

Margem
O margin é utilizado para dizer qual a distância um elemento quer ter relação com outros elementos que estão ao seu redor.

O valor pode ser definido em todas as margens (cima, direita, esquerda, esquerda).


Nessa imagem, é possível entender que temos dois elementos: um delimitado pela cor verde e outro pela cor laranja. O espaço que existe entre eles é uma configuração de margem.

Exemplo: Aumentando a distância entre um título e outros elementos ao seu redor em 8px para todas as distâncias.
h1 {
	/* 1ª Forma (segue a ordem: cima, direita, baixo, esquerda) */
	margin: 8px 8px 8px 8px;

	/* 2ª Forma (utiliza uma propriedade para cada direção) */
	margin-top: 8px;
	margin-right: 8px;
	margin-bottom: 8px;
	margin-left: 8px;

	/* 3ª Forma (todas as direções com um valor) */
	margin: 8px;
}
Veja mais informações sobre a margem

Depurar sem Devtools
Podemos usar o Devtools para depurar ou espaçamento de determinados elementos da tela.

Para isso, basta abrir a aba de Elements do Devtools, em seguida, selecionar um elemento na página.

Na lateral direita do Devtools será possível ver um conjunto de informações de estilização desse elemento. Nessa lateral, basta abrir uma aba Computed que mostrará os detalhes sobre o espaçamento do elemento selecionado (margin, padding, border).


Posicionamentos
Ao acessar um site, é possível notar que os elementos ocupam diferentes posições em cada área da tela, seja para organizar a UI ou até mesmo para melhorar a interação do usuário com ela.

Nesse sentido, o CSS oferece a alteração do posicionamento de um elemento, algumas são comuns de serem utilizadas e outras formas diversas apenas em casos mais específicos.

Tamanho de Elementos
Para personalizar ou usar o tamanho de um elemento, podemos como propriedades width(largura) e height(altura) com o seu valor sendo uma unidade de medida.

Exemplo: Botão com altura e altura
button {
	/* 
		Como estamos usando uma porcentagem (%) que é uma unidade
		relativa, isso significa que a largura do botão será uma
		porcentagem em cima do valor total da largura do um elemento
		no qual ele está inserido.
	*/
	width: 100%;

	/* 
		Nesse caso, como estamos usando a unidade de pixels (px) que
		é uma unidade absoluta, significa que o botão terá uma altura
		de 18 pixels.
	*/
	height: 18px;
}
Exibição
A utilizada atualmente no CSS para lidar com o posicionamento é o display, com ele é mais capaz de definir diversos tipos de posicionamento com o problema que estamos resolvendo.

Mostrar nenhum
Podemos usar uma propriedade display: noneem um elemento para escondê-lo.

Exibir em linha
Podemos usar uma propriedade display: inlinepara mostrar todos os elementos em apenas uma linha.


*Obs: Na imagem acima, aplicamos a propriedade display: inlineem todos os elementos de cor amarela.

Bloco de exibição
Podemos usar uma propriedade display: blockpara mostrar todos os elementos com quebras de linha.


*Obs: Na imagem acima, aplicamos a propriedade display: blockem todos os elementos de cor amarela.

Exibir bloco embutido
Usar uma propriedade display: inline-blockpara mostrar todos os elementos de uma linha, porém, a altura da linha pode ser relativa ao tamanho do elemento maior.


*Obs: Na imagem acima, aplicamos a propriedade display: inline-blockem todos os elementos de cor amarela.

Tabela de exibição
Essa propriedade é utilizada para lidar com os elementos seguindo a ideia de construção de uma tabela, que geralmente é feita com uma tag <table>, porém, com o que display: tablenão precisamos usar essa tag diretamente.

Flexbox
Antes do advento do Flexbox, era comum usarmos a propriedade displayda seguinte maneira:

Bloco: para definir seções em uma página

Inline: para definir textos

Tabela: para definir dados multidimensionais em tela (como acontece em uma tabela)

No entanto, esses formatos antigos eram tão complexos de serem usados ​​para construir como páginas. Sendo assim, o Flexbox foi criado com o intuito de tornar mais fácil a criação de interfaces bem estruturadas e responsivas.

Para usar o Flexbox basta usar uma propriedade display: flexno elemento "pai" que engloba os elementos "filhos" que serão exibidos. A partir daí, temos algumas propriedades principais que são utilizadas para manipular esses elementos "filhos":

- flex-direction: controla a direção em que os elementos serão posicionados no Flexbox (em linha, ou coluna)

- alinham os elementos da direção dos elementos no eixo contrário ao eixo flex (caso considerado uma o eixo X, ele mudará o considerado os elementos controlados no eixo Y casomos uma coluna como o eixo Y, ele mudará o eixo Y, indicado dos elementos no eixo X)

- justificar-conteúdo: controle o alinhamento dos elementos no eixo igual a do Flebox (caso consideramos uma linha como o eixo X, ele mudará a orientação dos elementos no eixo X, caso consideremos uma coluna como o eixo Y, ele mudará a direção dos elementos no eixo Y)

Veja mais informações sobre o Flexbox

Exemplo: Alinhando elementos "filhos" um abaixo do outro no centro de um elemento "pai"
.container-cinza {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

*Obs: Na imagem acima, aplicamos as propriedades no elemento de cor cinza.

Exemplo: Alinhando elementos "filhos" um ao lado do outro no centro de um elemento "pai"
.container-cinza {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
}

*Obs: Na imagem acima, aplicamos as propriedades no elemento de cor cinza.

Rede
Através do Grid, somos capazes de delimitar uma parte da tela xadrez. Ou podemos definir linhas e colunas que formam pequenas áreas, nas quais podemos definir elementos.

Para usar o grid, basta adicionarmos a propriedade display: gridno elemento "pai" de um conjunto de elementos "filhos". A partir daí, temos algumas propriedades principais que são utilizadas para manipular esses elementos "filhos":

- grid-template-columns: a largura de cada coluna (o valor é uma unidade de medida)

- grid-template-rows: a altura de cada linha (o valor é uma unidade de medida)

- grid-gap: a distância entre as linhas e colunas que separam os elementos (valor é uma unidade de medida)

Veja mais informações sobre o Grid

Exemplo3 área de grade 3x3 (3 ilustrações completas) área: Uma e 3 linhas completas
.container-cinza {
	display: grid;
	grid-template-columns: 80px 80px 80px;
	grid-template-rows: 80px 80px 80px;
	grid-gap: 8px;
}

*Obs: Na imagem acima, aplicamos as propriedades no elemento de cor cinza.

Posição
Podemos dizer que existem dois tipos de posicionamentos: relativo e estático . Eles são a partir da propriedade position.

O posicionamento estático já é o padrão que temos nos elementos da nossa página, ou seja, em teoria é como todo elemento já com uma propriedade position: staticativa.

O posicionamento relativo é feito com base em alguma outra informação, seja o próprio elemento, um elemento "pai" ou até mesmo com relação à tela como um todo.

Quando estamos usando o posicionamento relativo (relativo, absoluto, fixo), é possível usarmos as propriedades para manipular a posição desses elementos:

- top: à que distância o elemento deve ficar do topo relativo

- right: à que distância o elemento deve ficar da direita relativa

- inferior: à que distância o elemento deve ficar do fundo relativo

- esquerda: à que distância o elemento deve ficar da esquerda relativa

Posição relativa
Quando usamos position: relativeem algum elemento, estamos movendo o espaço do seu posicionamento normal, usando que ele utiliza o elemento mesmo.

Exemplo: Movendo o bloco amarelo para cima do vermelho sem mudar a posição do bloco vermelho
.bloco-amarelo {
	position: relative;
	top: 10px;
}

Posição Absoluta
Quando o usarmos com o posicionamento mais próximo position: absolute, estamos movendo, ele não ocupa espaço ao posicionamento normal, ocupando mais o espaço ao lado e o elemento "pai" mais próximo - que está sendo posicionado ao lado.

Exemplo: Mudando posicionamento do bloco amarelo de acordo com o elemento "pai", desocupando o espaço que utilizava anteriormente.
.container-cinza {
	position: relative;
}

.bloco-amarelo {
	position: absolute;
	top: 10px;
}

Posição fixa
Quando usarmos position: fixedem algum lugar, estamos movendo, ele não ocuparemos o seu posicionamento normal, ocupamos anteriormente e como um todo o seu posicionamento é feito com relação a todo o seu posicionamento é feito com relação à tarefa.

Exemplo: Mudando posicionamento do bloco amarelo de acordo com a tela, desocupando o espaço que utilizava anteriormente.
.bloco-amarelo {
	position: fixed;
	top: 10px;
}