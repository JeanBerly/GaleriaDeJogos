const avaliacoes = [
    {
        titulo: 'Gris',
        nota: 5
    },
    {
        titulo: 'Gris2',
        nota: 5
    },
    {
        titulo: 'NFSCarbon',
        nota: 4
    },
    {
        titulo: 'Portal',
        nota: 5
    }
]
const previewTemplate = function(avaliacao){
    return `
    <div id="${avaliacao.titulo}" class="previewJogo">
        <img id="img${avaliacao.titulo}" src="ibages/${avaliacao.titulo}.jpg" alt="Imagem do jogo ${avaliacao.titulo}">
        <div class="previewDetalhes">
            <div class="tituloPrev">
                <span>${avaliacao.titulo}</span>
            </div>
            <div class="avaliacaoPrev">
                <span class="star star1">★</span>
                <span class="star star2">★</span>
                <span class="star star3">★</span>
                <span class="star star4">★</span>
                <span class="star star5">★</span>
            </div>
            <div class="linkPrev">
                <a href="${avaliacao.titulo}Review.html">Review</a>
            </div>
        </div>
    </div>
    `;
}
function render(){
    const grid = document.querySelector('#gridJogos');
    grid.innerHTML = avaliacoes.map((avaliacao) =>{
        console.log(previewTemplate(avaliacao));
        return previewTemplate(avaliacao);
    }).join('');
}
render();
console.log('deu certo?');