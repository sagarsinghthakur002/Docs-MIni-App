import React from "react";
import Card from "./Card";

function Foreground() {
  const data = [
    {
      dec: "hlo my name is sagar iam from nepal",
      filesize: ".9mb",
      close: "true", 
      tag: { isOpen: true, tagTitle: "Download now", tagColor: "green" },
    },
  ];

  return (
    <>
      {/* giving z-index so it will come up and we can't select the background text */}
      <div className="fixed top-0 left-0 z-[3] w-full h-full">
        {data.map((item, index) =>(
          <Card data={item}/>

        ))}
      </div>
    </>
  );
}

export default Foreground;
