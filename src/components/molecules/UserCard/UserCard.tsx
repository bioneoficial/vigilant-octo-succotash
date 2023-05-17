import React from "react";
import Image from "next/image";

interface Props {
  name: string | undefined;
  isSubscriber: boolean;
}

const UserCard: React.FC<Props> = ({ name = "Nome", isSubscriber }) => {
  return (
    <div className="border border-red-400 flex flex-col items-center w-1/2 mx-auto">
      <div className="relative w-24 h-24 rounded-full overflow-hidden">
        <Image
          src="https://www.gravatar.com/avatar/000?d=mp&amp;f=y"
          className="image-user"
          width={150}
          height={150}
          alt="userProfileImage"
        />
      </div>
      <h2 className="text-center mt-5 mb-3">{name}</h2>
      <div className="text-center">
        <span className="inline-block px-3 py-1 text-sm font-semibold text-green-900 bg-green-300 rounded-full">
          Usuário
        </span>
        <h4 className="mt-5">
          {isSubscriber ? (
            <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-blue-500 rounded-full">
              Assinante
            </span>
          ) : (
            <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-red-500 rounded-full">
              Não assinante
            </span>
          )}
        </h4>
      </div>
    </div>
  );
};

export default UserCard;
