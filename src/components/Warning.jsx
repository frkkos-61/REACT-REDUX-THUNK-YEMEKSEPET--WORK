import React from "react";
import { Link } from "react-router-dom";

const Warning = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      Sepette herhangi bir ürün yok
      <Link to={"/"} className="border p-2 shadow rounded hover:bg-red-100">
        Ürünlere Gözat
      </Link>
    </div>
  );
};

export default Warning;
