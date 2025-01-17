import React from "react";

// Founding
import danielvega from "../assets/members/founding/danielvega.jpg";
import marc from "../assets/members/founding/marc.JPG";
import nikesh from "../assets/members/founding/nikesh.jpg";
import nolan from "../assets/members/founding/nolan.jpg";
import stefani from "../assets/members/founding/stefani.JPG";

const foundingData = [
  {
    id: 1,
    name: "Daniel Vega",
    photo: danielvega,
    link: "https://www.linkedin.com/in/daniel-r-vega/",
  },
  {
    id: 2,
    name: "Marc Villafuerte",
    photo: marc,
    link: "https://www.linkedin.com/in/marcadriel/",
  },
  {
    id: 3,
    name: "Nikesh Poudel",
    photo: nikesh,
    link: "https://www.linkedin.com/in/nikesh-raj-poudel/",
  },
  {
    id: 4,
    name: "Nolan Carroll",
    photo: nolan,
    link: "https://www.linkedin.com/in/nolancarroll/",
  },
  {
    id: 5,
    name: "Stefani Rios",
    photo: stefani,
    link: "https://www.linkedin.com/in/stefanirios/",
  },
];

function Founding() {
  return (
    <div data-theme="black" className="text-center">
      <h1 className="font-semibold text-[56pt] text-white pt-[96px]">
        Founding
      </h1>
      <div className="grid justify-center grid-cols-[repeat(auto-fill,minmax(250px,1fr))] lg:gap-x-[150px] lg:gap-y-[100px] gap-[100px] pl-[100px] pr-[100px] pt-[30px] pb-[50px]">
        {foundingData.map((member) => (
          <div key={member.id} className="flex flex-col items-center">
            <a href={member.link} target="_blank" rel="noopener noreferrer">
              <img
                src={member.photo}
                alt={member.name}
                loading="lazy"
                effect="blur"
                className="w-[300px] h-[400px] rounded-[20px] object-cover"
              />
            </a>
            <div className="font-normal text-[18pt] mt-[10px] text-white">
              {member.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Founding;
