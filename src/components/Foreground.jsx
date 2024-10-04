import React, {useRef} from "react";
import Card from "./Card";


function Foreground() {

  const ref = useRef(null);


  const data = [
    {
      decs: "hlo my name is sagar and i am from nepal",
      filesize: ".9mb",
      close: "false", 
      tag: { isOpen: false, tagTitle: "Download now", tagColor: "green" },
    },
    {
      decs: "hlo my name is sagar and i am from nepal",
      filesize: ".5mb",
      close: "true", 
      tag: { isOpen: true, tagTitle: "Download now", tagColor: "blue" },
    },
    {
      decs: "hlo my name is sagar and i am from nepal",
      filesize: ".10mb",
      close: "true", 
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },
    },
  ];

  return (
    <>
      {/* giving z-index so it will come up and we can't select the background text */}
      <  div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
        {data.map((item, index) =>(
          <Card data={item} reference={ref}/>
      ))}
      </div>
    </>
  );
}

export default Foreground;
