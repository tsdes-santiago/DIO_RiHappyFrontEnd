<h1>
<a href="https://www.dio.me/">
     <img align="center" width="40px" src="https://hermes.digitalinnovation.one/assets/diome/logo-minimized.png"></a>
    <span> Ri Happy - Front-end do Zero</span>
</h1>

# :computer: Desafio de projeto: Construindo uma Landing Page no Mundo Invertido com HTML e CSS

Agora é a sua hora de brilhar e construir um perfil de destaque na DIO! Explore todos os conceitos explorados até aqui e replique (ou melhore, porque não?) este projeto prático. 

[Github instrutor](https://github.com/digitalinnovationone/semana-frontend-mundo-invertido)

[Figma - Construindo uma Landing Page no Mundo Invertido](https://www.figma.com/file/I3Q42CcVUziRN3iMfTrbfb/Stranger-Things?type=design&mode=design)

-------

Uma jornada para quem não tem medo do desconhecido. O caminho para o Mundo Invertido é incerto, repleto de obstáculos e perigos. Porém, a recompensa é grande: salvar Hawkings e o mundo todo das garras de Vecna. Você está preparado(a)? 

## 💻 Tecnologias
- HTML
- CSS
- JavaScript

## 💬 Assuntos abordados
- HTML
    - Estruturação da página 
    - Semântica
    - Acessibilidade
    - Web Scraping
    - SEO
- CSS
    - Posicionamentos
    - Pseudo-elementos
    - Pseudo-classes
    - Flexbox
    - Animações 
- JavaScript
    - Introdução ao JavaScript
    - Manipulação do DOM
    - Introdução ao Firebase
    - Integração com o Firebase


# :bulb: Solução do desafio

Adicionei uma imagem para [favicon](https://br.pinterest.com/pin/647814727665219898/)

```html
<!-- favicon -->
<link rel="icon" type="image/x-icon" href="./assets/images/banner/favicon.jpeg">
```

Música variando de acordo com o tema.

```html
<audio id="music" autoplay loop>
      <source src="./assets/musics/normal-world.mpeg" type="audio/mpeg">
    </audio>  
    
 <script>
    window.addEventListener('click', function() {
        const audio = document.getElementById('music');
        audio.play();
        audio.volume = 0.2;
      })

      function switchTheme() {
        document.body.classList.toggle('dark-theme');
        document.body.classList.toggle('light-theme');

        const theme = document.body.classList[0];
        const music = theme === 'light-theme' ? 'normal-world.mpeg' : 'inverted-world.mpeg'

        const audio = document.getElementById('music');
        audio.src = `assets/musics/${music}`;
        audio.play();
        audio.volume = 0.2;
      }
    </script>
````

Troquei o vídeo para o trailer oficial mudando a fonte do iframe

```html
src="https://www.youtube.com/embed/otutSrxYpa4?si=AJz80wsnHq-r4jJ6"
```

Preview das páginas:

<p aligin=center>
<img src="normal.png" width=40.2%/> 
<img src="inverted.png" width=40%/>
</p>