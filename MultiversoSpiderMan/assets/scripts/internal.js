/* Constantes */
const actor =['Tobey Maguire', 'Andrew Garfield', 'Tom Holland'];
const actor_dir = ['spiderman-tobey',  'spiderman-tom', 'spiderman-andrew'];

/* Id do ator e filme pela url */
const actor_id = new URLSearchParams(window.location.search).get('id');
const movie_id = new URLSearchParams(window.location.search).get('movie');

/* Movies details */
const movies_detail = [
    [ /* Tobey Maguire */
    {
    ano: 2002,
    diretor: 'Sam Raimi',
    trailer: 'https://www.youtube.com/watch?v=t06RUxPbp_c',
    video_bg: 'spiderman-2002-trailer.mp4',
    n_images: 3,
    description: "<p><strong>Sinopse:</strong>&nbsp;Depois de ser picado por uma aranha geneticamente modificada em uma \
                            demonstração científica, o jovem nerd Peter Parker ganha superpoderes. Inicialmente, ele pretende usá-los \
                            para para ganhar dinheiro, adotando o nome de Homem-Aranha e se apresentando em lutas de exibição. Porém, \
                            ao presenciar o assassinando de seu tio Ben e sentir-se culpado, Peter decide não mais usar seus poderes \
                            para proveito próprio e sim para enfrentar o mal, tendo como seu primeiro grande desafio o psicótico \
                            Duende Verde.</p>"
    },
    {
    ano: 2004,
    diretor: 'Sam Raimi',
    trailer: 'https://www.youtube.com/watch?v=1UAzz8ncM68',
    video_bg: 'spiderman2-2004-trailer.mp4',
    n_images: 3,
    description: "<p><strong>Sinopse:</strong>&nbsp;O Dr. Otto Octavius é transformado em Doutor Octopus quando uma falha \
                            em uma experiência de fusão nuclear resulta em uma explosão que mata sua esposa. Ele culpa o \
                            Homem-Aranha pelo acidente e deseja vingança. Enquanto isso, o alter ego do herói, Peter Parker, \
                            perde seus poderes. Para complicar as coisas, o seu melhor amigo odeia o Homem-Aranha e sua amada \
                            fica noiva.</p>"
    },
    {
    ano: 2007,
    diretor: 'Sam Raimi',
    trailer: 'https://www.youtube.com/watch?v=wPosLpgMtTY',
    video_bg: 'spiderman3-2007-trailer.mp4',
    n_images: 3,
    description: "<p><strong>Sinopse:</strong>&nbsp;O relacionamento entre Peter Parker e Mary Jane parece estar dando certo, \
                            mas outros problemas começam a surgir. A roupa de Homem-Aranha torna-se preta e acaba controlando \
                            Peter - apesar de aumentar seus poderes, ela revela e amplia o lado obscuro de sua personalidade. \
                            Com isso, os vilões Venom e Homem-Areia tentam destruir o herói.</p>"
    }
    ],
    [ /* Tom Holland */
    ],
    [ /* Andrew Garfield */
    {
        ano: 2012,
        diretor: 'Mark Webb',
        trailer: 'https://www.youtube.com/watch?v=-tnxzJ0SSOw',
        video_bg: 'amazing-spiderman-2014-trailer.mp4',
        n_images: 3,
        description: "<p><strong>Sinopse:</strong>&nbsp;O jovem Peter Parker quer saber mais sobre sua origem. Ele encontra uma \
                                pasta que pertenceu ao seu pai e tenta descobrir por que seus pais desapareceram. A sua busca o leva \
                                a Oscorp e ao dr. Curt Connors, que tem como alter ego o letal Lagarto.</p>"
    },
    {
        ano: 2014,
        diretor: 'Mark Webb',
        trailer: 'https://www.youtube.com/watch?v=nbp3Ra3Yp74',
        video_bg: 'amazing-spiderman2-2014-trailer.mp4',
        n_images: 3,
        description: "<p><strong>Sinopse:</strong>&nbsp;O jovem Peter Parker está fascinado com as habilidades que adquiriu como Homem-Aranha. \
                                Agora, ele precisa lidar com dois problemas: o retorno de um velho amigo, Harry Osborn, e a chegada de um vilão \
                                mais forte e poderoso, Electro.</p>"
    }
    ]
];

/* Functions */
/* Gera o html de description */
function descriptionHtlm (movie) {
    return `
        <div class="pills">
            <ul>
                <li>Ano: ${movie.ano}</li>
                <li>Diretor: ${movie.diretor}</li>
            </ul>
            </div>
            <div class="s-description__text">
            <p>${movie.description}</p>
        </div>
        `
}
/* Muda para página do filme ao clicar no botão */
function changeMovie (movie_id) {
    window.location.href = `./internal.html?id=${actor_id}&movie=${movie_id}`;
}

/* Atualizando o main container */
/* Paths */

const video_path = './assets/videos/';
const logo_path = `./assets/images/${actor_dir[actor_id-1]}/movie-0${movie_id}/logo.png`;
const gallery_path = `./assets/images/${actor_dir[actor_id-1]}/movie-0${movie_id}/gallery/`;
const gallery_full_path = `./assets/images/${actor_dir[actor_id-1]}/movie-0${movie_id}/gallery/`;

/* Mudando o video de fundo */

background_video = document.getElementsByTagName('video')[0];
background_video.src = video_path + movies_detail[actor_id-1][movie_id-1].video_bg;

/* Muddando o logo */
s_logo = document.getElementsByClassName('s-logo')[0];
s_logo.innerHTML = `<img src="${logo_path}" alt="Spider-Man logo">`; 

/* Mudando o link trailer */
movie = movies_detail[actor_id-1][movie_id-1]
s_trailer_link = document.querySelector('.s-links a');
s_trailer_link.href = movie.trailer;

/* Mudando o description */
description = document.getElementsByClassName('s-description')[0];
description.innerHTML = descriptionHtlm(movie);

/* Gerando a galeria */
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