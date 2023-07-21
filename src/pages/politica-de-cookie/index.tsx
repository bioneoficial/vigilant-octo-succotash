import React from "react";

function PoliticaDeCookie(): JSX.Element {
  return (
    <div className="flex flex-col items-center fold:gap-0 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5">
      <h1 className="text-4xl font-bold mt-6">POLÍTICA DE COOKIES</h1>
      <div className="w-full max-w-3xl mt-10">
        <h2 className="text-2xl font-bold mb-4">CONTEÚDO</h2>
        <p className="mb-4">
          Este site Funktoon utiliza cookies para trazer uma experiência
          personalizada para o usuário, entender suas preferências e tendências
          de navegação...
        </p>
        <h2 className="text-2xl font-bold mt-10 mb-4">O QUE SÃO COOKIES?</h2>
        <p className="mb-4">
          Um cookie é um pequeno bloco de dados enviado para o seu navegador
          (“browser”) por um site de internet, sempre que visita o site...
        </p>
        <h2 className="text-2xl font-bold mt-10 mb-4">
          USO DE COOKIES PELA FUNKTOON
        </h2>
        <p className="mb-4">
          Estes cookies são necessários para que o site Funktoon funcione
          corretamente e não podem ser desligados nos nossos sistemas. Estes
          cookies não armazenam qualquer informação pessoal identificável...
        </p>
      </div>
    </div>
  );
}

export default PoliticaDeCookie;
