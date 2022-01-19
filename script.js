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
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
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
function fillStars(){
    avaliacoes.forEach((avaliacao) =>{
        let elem = document.querySelector("#"+avaliacao.titulo);
        let fis = elem.querySelector('.avaliacaoPrev').children;
        let aux = 0;
        while (aux < avaliacao.nota){
            fis[aux].style.color = "yellow";
            aux++;
        }
    });
}
render();
fillStars();