const avaliacoes = [
    {
        titulo: 'gris',
        nota: 5
    },
    {
        titulo: 'gris2',
        nota: 5
    },
    {
        titulo: 'NFSCarbon',
        nota: 4
    },
    {
        titulo: 'portal',
        nota: 5
    }   
]
const previewTemplate = function(avaliacao){
    return `
    <div id="${capitalizeFirstLetter(avaliacao.titulo)}" class="previewJogo">
        <img id="img${avaliacao.titulo}" src="ibages/${avaliacao.titulo}.jpg" alt="Imagem do jogo ${capitalizeFirstLetter(avaliacao.titulo)}">
        <div class="previewDetalhes">
            <div class="tituloPrev">
                <span>${capitalizeFirstLetter(avaliacao.titulo)}</span>
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
function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
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
        let elem = document.querySelector("#"+ capitalizeFirstLetter(avaliacao.titulo));
        console.log(elem);
        let fis = elem.querySelector('.avaliacaoPrev').children;
        console.log(fis);
        let aux = 0;
        while (aux < avaliacao.nota){
            fis[aux].style.color = "yellow";
            aux++;
        }
    });
}
render();
fillStars();