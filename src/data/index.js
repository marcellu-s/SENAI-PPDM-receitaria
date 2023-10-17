class Receita {

    constructor(
        id,
        title,
        about,
        author,
        image,
        duration,
        difficult,
        portion,
        additionalInformation,
        ingredients,
        methodPreparation,
        categories,
        stars
    ) {

        this.id = id;
        this.title = title;
        this.about = about;
        this.author = author;
        this.image = image;
        this.duration = duration;
        this.difficult = difficult;
        this.portion = portion;
        this.additionalInformation = additionalInformation;
        this.ingredients = ingredients;
        this.methodPreparation = methodPreparation;
        this.categories = categories;
        this.stars = stars;

    }
}

const receita1 = new Receita(
    1,
    'Bolo de Aipim',
    'A receita de bolo de aipim simples é um clássico da culinária brasileira que combina muito bem com aquele cafezinho da tarde. Descubra como fazer bolo de aipim!',
    'Rebecca Corrêa',
    'https://receitinhas.com.br/wp-content/uploads/2016/12/Bolo_de_aipim_com_coco-730x365.jpg',
    '1h',
    'Médio',
    15,
    'Espere esfriar para desenformar! Desenformar o bolo de aipim muito cedo ou muito tarde pode acabar com ele bem na reta final. Assim que você retirar o bolo do forno, espere uns 20 minutos e desenforme. E essa receita de bolo de aipim é tão versátil que pode ser encontrada de outras maneiras. Tente preparar o bolo de aipim cremoso e o bolo de aipim cozido!',
    ['1,5 kg de aipim (ou mandioca) ralado', '3 xícaras de leite', '2 colheres (sopa) de margarina ou manteiga', '1 coco pequeno ralado (ou 100 g de coco ralado industrializado)', '3 ovos inteiros', '3 xícaras de açúcar', '1 pitada de sal', '6 gotas de baunilha (opcional)'],
    ['Misture todos os ingredientes em uma bacia grande com a ajuda de um fouet ou uma colher de pau.', 'Leve para assar em forma retangular untada (utilize manteiga para untar e uma folha de papel-toalha para te ajudar) e enfarinhada por, aproximadamente, 45 minutos, em forno previamente aquecido a 180º C.', 'Fica cremoso por dentro e com a casquinha crocante.', 'É delicioso'],
    ['Bolo e tortas doces', 'Bolo de liquidificador', 'Cupcake', 'Bolo de chocolagte', 'Bolo simples', 'Bolo integral', 'Bolo de coco', 'Torta holandesa'], 
    2
    );

const receita2 = new Receita(
    2,
    'Arroz doce',
    'Receita de arroz doce deliciosa e simples, ótima para um almoço em familia que combina com qualquer coisa!',
    'Verusca',
    'https://receitinhas.com.br/wp-content/uploads/2023/03/maxresdefault-44-730x365.jpg',
    '30 min',
    'Fácil',
    '6 Porções',
    'Incorpore o leite condensado e a canela na quantidade de sua preferência e vá mexendo até engrossar. Desligue o fogo, adicione o creme de leite e misture por mais alguns minutos. Está pronto para servir!',
    ['1 xícara de arroz', '600 ml de leite quente', '200 g de creme de leite', '500 ml de água quente para cozinhar o arroz', '1 caixa de leite condensado (1/2 para quem não gosta do arroz muito doce)', 'canela em pó a gosto'],
    ['Cozinhe o arroz em fogo baixo até ficar macio.','Aqueça o leite separadamente em uma panela até ferver.','Quando o arroz estiver cozido, acrescente o leite quente e vá mexendo para não grudar no fundo da panela.', 'Incorpore o leite condensado e a canela na quantidade de sua preferência e vá mexendo até engrossar.', 'Desligue o fogo, adicione o creme de leite e misture por mais alguns minutos.', 'Está pronto para servir.'],
    ['Arroz', 'Doce', 'Arroz Doce', 'Simple', 'Fácil'],
    4
);

const receita3 = new Receita(
    3,
    'Caldo verde',
    'Um caldo prático e cremoso: veja como fazer essa maravilhosa receita de caldo verde! Ele é perfeito para os dias frios de inverno e é cheio de sabor. Não deixe de experimentar aí na sua casa!',
    'TudoGostoso',
    'https://receitinhas.com.br/wp-content/uploads/2022/09/Caldo-verde-com-batata-doce-730x365.png',
    '30 min',
    'Fácil',
    '5 Porções',
    '',
    ['4 batatas médias', '1 colher (sopa) de óleo', '5 xícaras (chá) de água', '1 lingüiça calabresa defumada cortada em rodelas', '1 tablete de caldo de galinha', '1 colher (sopa) rasa de sal ou a gosto', '1 xícara (chá) de couve manteiga cortada em tiras'],
    ['Na panela de pressão, coloque a batata, o caldo de galinha, o óleo, a água e sal.', 'Cozinhe por cerca de 10 minutos (começar a contar o tempo depois que a panela começar a chiar) até a batata desmanchar.', 'Em seguida, bata tudo no liquidificador.', 'Acrescente as rodelas de calabresa e ferva.', 'Desligue o fogo e adicione a couve-manteiga.', 'Na hora de servir, coloque um fio de azeite ou croutons'],
    ['Caldos', 'Vegetariano', 'Caldo Verde', 'Simples'],
    4
);

const receita4 = new Receita(
    4,
    'Pavê de Bis',
    'Uma receita deliciosa de Pavê, ou pra comê, de rápido preparo e fácil realização',
    'Denice Vacari',
    'https://receitinhas.com.br/wp-content/uploads/2022/05/Pave-de-bis-com-morango-1-1024x512.jpg',
    '1h',
    'Média',
    '8 Porções',
    '',
    ['1 lata de leite condensado', '4 colheres (sopa) de amido de milho', '2 caixas de chocolate Bis picado', '1 lata de creme de leite', '1 litro de leite', '2 ovos separados', '1 xícara de açúcar'],
    ['Misture o leite condensado, o leite, a maisena, as gemas e leve ao fogo.', 'Mexa sempre até engrossar e reserve.', 'Forre o fundo de uma forma refratária grande com metade do creme.', 'Forme uma camada com o chocolate picado e complete com o restante do creme.', 'Bata as claras em neve e acrescente o açúcar, aos poucos, batendo sempre, até obter um suspiro firme.', 'Junte o creme de leite e mexa bem.', 'Coloque essa mistura por cima do creme e leve à geladeira até a hora de servir.'],
    ['Pavê', 'Doces', 'Sobremesa'],
    3
);

const receitas = [
    receita1,
    receita2,
    receita3,
    receita4
];

export default receitas;