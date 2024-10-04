import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

function Card({data}) {
  return (
    <div className="relative w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden">
      <FaFileAlt size="2em" />

      <p className="text-sm leading-tight mt-5 font-semibold">
        {data.dec}
      </p>

      <div className=" footer absolute bottom-0 w-full left-0">

        <div className="flex items-center justify-between px-8 py-3 mb-3">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? <IoClose /> :  <AiOutlineDownload size=".7em" color="#fff" /> }
            {/* we pass true or pass . if close is true then show close icon or ya show download icon  */}
          </span>
        </div>


      {
        data.tag.isOpen && (
        <div className="tag w-full py-4 bg-green-600 flex items-center  justify-center">
          <h3 className="text-sm font-semibold"> Download Now </h3>
        </div>
      )}

      </div>

    </div>
  );
}

export default Card;
