<template>
  <div class="w-full absolute bottom-0" id="app">
    <vue-particles
      color="#dedede"
      :particleOpacity="0.1"
      :particlesNumber="80"
      shapeType="edge"
      :particleSize="2"
      linesColor="#dedede"
      :linesWidth="0.1"
      :lineLinked="true"
      :lineOpacity="0.5"
      :linesDistance="150"
      :moveSpeed="1"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
  </div>
  <body class="w-full h-full bg-black flex items-center justify-center">
    <div
      class="container h-screen bg-black relative py-20 mx-auto w-full max-w-4xl"
    >
      <img
        class="absolute opacity-60 xl:top-3 w-[260px] right-0"
        src="/reyNge.png"
        alt=""
      />
      <div class="">
        <nav class=" ">
          <ul class="text-[#00ff00] flex gap-5 text-xl">
            <button class="border-b-[1px] border-[#00ff00] ]">
              <li class=""><a href="#">Home</a></li>
            </button>
            <button class="border-b-[1px] border-[#00ff00]">
              <li class=""><a href="#">Projects</a></li>
            </button>
            <button class="border-b-[1px] border-[#00ff00]">
              <li class=""><a href="#">Social</a></li>
            </button>
          </ul>
        </nav>
      </div>
      <br />
      <br />

      <div className="grid grid-cols-4  gap-x-2 gap-y-3">
        <div className="border-white   shadow-xl min-h-[50px] col-span-4">
          <div class="txt-animado flex">
            <p class="text-white"></p>
            <span
              class="text-[#00ff00] text-4xl tracking-widest font-medium italic"
            >
            </span>
          </div>
        </div>

        <div
          className="border-[#008000] border-2 px-2   shadow-xl max-w-[205px] max-h-[144px]"
        >
          <h1 class="text-[#00ff00] text-xl mt-2"><i>CONTATO</i></h1>
          <div class="py-1 -mt-2 px-10 border-b-[1px] border-[#008000]"></div>

          <ul class="list-disc mt-2 px-10 text-base leading-5 text-[#CCFF6F]">
            <li class="list-style-position: inside">
              <a href=""> <u>github</u></a>
            </li>
            <li class="list-style-position: inside">
              <a href=""> <u>github</u></a>
            </li>
            <li class="list-style-position: inside">
              <a href=""> <u>github</u></a>
            </li>
            <li class="list-style-position: inside">
              <a href=""> <u>github</u></a>
            </li>
          </ul>
        </div>

        <div
          className="border-[#008000] border-2 px-2   shadow-xl min-h-[294px] min-w-[675px] row-span-2 col-span-3"
        >
          <h1 class="text-[#00ff00] text-2xl mt-2"><i>SOBRE</i></h1>
          <div class="py-1 -mt-2 border-b-[1px] border-[#008000]"></div>
          <div class="py-2 text-[#00ff00]/80 px-2 text-base">
            <p class="leading-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
              doloremque quod iusto ipsam, hic esse nihil porro adipisci tempora
              molestias reprehenderit expedita sapiente, optio similique fugiat.
              Possimus ipsa deserunt nisi.
            </p>
            <p class="mt-2 leading-5">
              não há muito sobre mim porém aqui vai algumas coisas:
            </p>
            <ul
              class="list-disc py-2 px-10 tracking-widest text-base leading-4 text-[#00ff00]/80"
            >
              <li class="list-style-position: inside">
                eu moro em Lins, interior de SP.
              </li>
              <li class="list-style-position: inside">
                eu utilizo mais o JavaScript, eu amo o Tailwind CSS, e estou
                aprendendo Vue.js
              </li>
              <li class="list-style-position: inside">
                eu toco teclado, faço academia, gosto de jogar alguns jogos e
                faço sites.
              </li>
              <li class="list-style-position: inside">
                também me considero nivel intermediário no inglês, mas não sei
                se meu parâmetro é confiavel :).
              </li>
            </ul>
          </div>
        </div>
        <div
          className="border-[#008000] border-2 px-2   shadow-xl max-w-[205px] max-h-[144px]"
        >
          <h1 class="text-[#00ff00] text-xl mt-2"><i>PROJETOS</i></h1>
          <div class="py-1 -mt-2 px-10 border-b-[1px] border-[#008000]"></div>

          <ul class="list-disc mt-2 px-10 text-base leading-5 text-[#CCFF6F]">
            <li class="list-style-position: inside">
              <a href=""> <u>github</u></a>
            </li>
            <li class="list-style-position: inside">
              <a href=""> <u>github</u></a>
            </li>
            <li class="list-style-position: inside">
              <a href=""> <u>github</u></a>
            </li>
            <li class="list-style-position: inside">
              <a href=""> <u>github</u></a>
            </li>
          </ul>
        </div>
        <div
          className="border-[#008000] border-2 px-2   shadow-xl max-w-[205px] max-h-[144px]"
        >
          <div class="px-4 py-2 text-center">
            <p class="text-[#00ff00]">total visitas:</p>
            <p class="text-[#00ff00]">online agora:</p>
          </div>
        </div>
        <div
          className=" rounded-lg shadow-xl min-h-[294px] min-w-[675px] row-span-2 col-span-3"
        >
          <div
            className="border-[#008000] border-2 px-2   shadow-xlmin-h-[294px] min-w-[675px] row-span-2 col-span-3"
          >
            <h1 class="text-[#00ff00] text-2xl mt-2"><i>#</i></h1>
            <div class="py-1 -mt-2 border-b-[1px] border-[#008000]"></div>
            <div class="py-2 text-[#00ff00]/80 px-2 text-base">
              <p class="leading-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                voluptates autem sint dolorem eveniet ex, quisquam unde quod
                repellendus quaerat deserunt consequuntur libero? Dignissimos
                assumenda itaque odit aut earum recusandae?
              </p>
              <p class="mt-2 leading-5">
                não há muito sobre mim porém aqui vai algumas coisas:
              </p>
              <ul
                class="list-disc py-2 px-10 tracking-widest text-base leading-4 text-[#00ff00]/80"
              >
                <li class="list-style-position: inside">
                  eu moro em Lins, interior de SP.
                </li>
                <li class="list-style-position: inside">
                  eu utilizo mais o JavaScript, eu amo o Tailwind CSS, e estou
                  aprendendo Vue.js
                </li>
                <li class="list-style-position: inside">
                  eu toco teclado, faço academia, gosto de jogar alguns jogos e
                  faço sites.
                </li>
                <li class="list-style-position: inside">
                  também me considero nivel intermediário no inglês, mas não sei
                  se meu parâmetro é confiavel :).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<style>
.txt-animado {
  font-size: 22px;
}

.txt-animado span {
  position: relative;
}
.txt-animado span::before {
  content: "";
  animation: palavras 20s infinite;
}

.txt-animado span::after {
  content: "";
  position: absolute;
  height: 100%;
  border-left: 2px solid #00ff00;
  right: -5px;
  opacity: 1;
  animation: cursor 0.8s infinite, digita 10s steps(20) infinite;
  width: calc(100% + 15px);
  background-color: black;
}

@keyframes cursor {
  0% {
    border-left: 2px solid black;
  }
}

@keyframes digita {
  10%,
  15%,
  30%,
  35%,
  50%,
  55%,
  70%,
  75%,
  90%,
  95% {
    width: 0;
  }
  5%,
  20%,
  25%,
  40%,
  45%,
  60%,
  65%,
  80%,
  85% {
    width: calc(100%+18px);
  }
}

@keyframes palavras {
  0%,
  50% {
    content: "bem-vindo ao";
  }
  51%,
  100% {
    content: "potfolioretro.com";
  }
}
</style>
<script setup></script>
