import Link from "next/link";
import Image from "next/image";

const FooterHomePage: React.FC = (): JSX.Element => {
  return (
    <footer className="py-10 px-6 bg-gray-200 mt-10 ">
      <div className="flex flex-col items-center justify-center">
        <div className="text-center">
          <h2 className="font-semibold text-3xl">
            Quer publicar seu quadrinho no{" "}
            <span className="text-purple-600 font-extrabold text-4xl">
              FUNKTOON?
            </span>
          </h2>
          <p className="mt-2">
            Se você também gosta de contar suas histórias, o{" "}
            <span className="uppercase text-purple-600">Funktoon</span> é o
            lugar perfeito para você estourar! Já pensou ficar famoso com seu
            quadrinho?
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between mt-2">
        <div className="text-center md:text-left">
          <h1 className="font-semibold uppercase">
            Baixe o Aplicativo e leia as histórias onde quiser
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex justify-center md:justify-start mt-4 space-x-2 items-center">
          <Link
            href="https://apps.apple.com/us/app/funktoon/id6444811852"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/apple.svg"
              alt="Baixar funktoon na apple"
              width={150}
              height={45}
            />
          </Link>
          <Link
            href="https://play.google.com/store/apps/details?id=com.funktoon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/google.png"
              alt="Baixar funktoon no Google"
              width={150}
              height={45}
            />
          </Link>
        </div>
        <Image
          src="/images/logo-funktoon.svg"
          alt="Funktoon"
          width={300}
          height={100}
        />
        <div id="socialMediaContainer" className="flex flex-row gap-1">
          <Link
            href="https://www.facebook.com/funktoonapp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/facebook.svg"
              alt="Funktoon"
              width={50}
              height={50}
            />
          </Link>
          <Link
            href="https://www.universoguara.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/logo-guara.svg"
              alt="Funktoon"
              width={60}
              height={50}
              style={{ objectFit: "scale-down", aspectRatio: "1.1" }}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/company/universo-guara/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/linkedin.svg"
              alt="Funktoon"
              width={50}
              height={50}
            />
          </Link>
          <Link
            href="https://twitter.com/funktoonapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/twitter.svg"
              alt="Funktoon"
              width={50}
              height={50}
            />
          </Link>
          <Link
            href="https://www.instagram.com/funktoonapp/?hl=pt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/instagram.svg"
              alt="Funktoon"
              width={50}
              height={50}
            />
          </Link>
        </div>
        <div className="mt-6 space-y-1.5 underline flex flex-col">
          <Link href="https://funktoon.com/termos-e-privacidade?type=policy">
            Política de privacidade e Cookies
          </Link>
          <Link href="https://funktoon.com/termos-e-privacidade?type=terms">
            Termos de Uso
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterHomePage;
