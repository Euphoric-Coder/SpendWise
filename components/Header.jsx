import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="p-5 flex justify-between items-center border shadow-sm">
      <Image
        src={"./logo.svg"}
        alt="Logo of Spend Wise"
        width={160}
        height={100}
      />
      <Button>Get Started</Button>
    </div>
  );
};

export default Header;
