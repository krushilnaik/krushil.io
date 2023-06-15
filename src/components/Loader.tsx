import Image from "next/image";
import React from "react";

interface Props {}

function Loader(props: Props) {
  const {} = props;

  return (
    <div className="grid place-content-center">
      <Image
        src={"/images/spinner.png"}
        width={50}
        height={50}
        alt="loader"
        className="animate-spin"
      />
    </div>
  );
}

export default Loader;
