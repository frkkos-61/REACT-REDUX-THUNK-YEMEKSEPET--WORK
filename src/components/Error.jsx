import React from "react";

const Error = ({ info, retry }) => {
  return (
    <div>
      <div className="bg-red-100 mt-10 p-10 rounded-md text-lg text-center">
        <p>Üzgünüz bir hata</p>
        <p className="font-bold">{info}</p>
      </div>

      {retry && (
        <div className="flex justify-center my-10">
          <button
            className="font-bold border py-2 px-4 rounded-md hover:bg-zinc-100 transition "
            onClick={retry}
          >
            Tekrar Dene
          </button>
        </div>
      )}
    </div>
  );
};

export default Error;
