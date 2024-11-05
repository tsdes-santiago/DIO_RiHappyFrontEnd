<h1>
<a href="https://www.dio.me/">
     <img align="center" width="40px" src="https://hermes.digitalinnovation.one/assets/diome/logo-minimized.png"></a>
    <span> Ri Happy - Front-end do Zero</span>
</h1>

# :computer: Desafio de projeto:Multiverso Spider-Man: Criando um Site com HTML, CSS e JavaScript

Aprenda a trabalhar com os principais efeitos de CSS e explore o máximo das animações para construir um Layout Rico baseado no multiverso do spiderman, vá além aprendendo mais sobre posicionamento de elementos em tela, construção baseada em sobreposição de blocos e domine a arte de compor itens em tela.

[Github instrutor](https://github.com/micheleambrosio/spider-man-multiverses-dio)

[Figma - Multiverso Spider-Man: Criando um Site com HTML, CSS e JavaScript](https://www.figma.com/file/GjvdE0uob68X6pEHqw2pY8/Multiverse-Spider-Man?type=design&node-id=1-17&mode=design)


# :bulb: Solução do desafio

A página foi recriada seguindo as aulas dos instrutores.

<p align='center'>
    <img src="homepage.png">
</p>

## Modificação adicional

As páginas internas (`internal.html`) foram geradas dinamicamente com javascript (`scripts/internal.js`), em que utilizei variáveis pela url:

```html
<a href="./internal.html?id=1&movie=1" class="s-card" id="spider-man-01">
```

Avariável `id` representa o ator, e abre a página interna do primeiro filme.

<p align='center'>
    <img src="ator03.png">
</p>

Adicionei os dados para os filmes do Tobey Maguire e do Andrew Garfield. Os botões no menu de navegação e as imagens na galeria são adicionados conforme os dados passados na variável `movies_detail` do script.

```javascript
/* Gerando a galeria */
movie = movies_detail[actor_id-1][movie_id-1]
n_images = movie.n_images

for (let i = 1; i <= n_images; i++) {
    document.querySelector('.gallery ul').innerHTML += `
                <li>
                    <a data-fancybox href="${gallery_path}image-0${i}-full.png">
                        <img src="${gallery_path}image-0${i}.png" alt="">
                    </a>
                </li>
    `;
}

/* Atualizando a coluna de navegacão */
/* Obtendo o numero de filmes */
n_movies = movies_detail[actor_id-1].length

for (let i = 1; i <= n_movies; i++) {
    document.querySelector('nav ul').innerHTML += `
        <li><a onclick="changeMovie(${i})" href="#0${i}">${i}</a></li>
    `;
}
```