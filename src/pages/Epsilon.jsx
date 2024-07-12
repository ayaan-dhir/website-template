import React from "react";

// Epsilon
import antonio from "../assets/members/epsilon/antonio.JPG";
import ariel from "../assets/members/epsilon/ariel.JPG";
import ariya from "../assets/members/epsilon/ariya.JPG";
import caleb from "../assets/members/epsilon/caleb.JPG";
import delphine from "../assets/members/epsilon/delphine.JPG";
import elisa from "../assets/members/epsilon/elisa.JPG";
import felix from "../assets/members/epsilon/felix.JPG";
import jessicahu from "../assets/members/epsilon/jessicahu.JPG";
import jessicatam from "../assets/members/epsilon/jessicatam.JPG";
import joseph from "../assets/members/epsilon/joseph.JPG";
import pahel from "../assets/members/epsilon/pahel.JPG";
import samantha from "../assets/members/epsilon/samantha.JPG";

const epsilonData = [
    {
      id: 1,
      name: "Antonio Li",
      photo: antonio,
    },
  
    {
      id: 2,
      name: "Ariel Tjandra",
      photo: ariel,
    },
  
    {
      id: 3,
      name: "Ariya Gowda",
      photo: ariya,
    },
  
    {
      id: 4,
      name: "Caleb Chung",
      photo: caleb,
    },
  
    {
      id: 5,
      name: "Delphine Tai-Beauchamp",
      photo: delphine,
    },
  
    {
      id: 6,
      name: "Elisa Yan",
      photo: elisa,
    },
  
    {
      id: 7,
      name: "Felix Toffaneto-Werner",
      photo: felix,
    },
  
    {
      id: 8,
      name: "Jessica Hu",
      photo: jessicahu,
    },
  
    {
      id: 9,
      name: "Jessica Tam",
      photo: jessicatam,
    },
  
    {
      id: 10,
      name: "Joseph Marquez",
      photo: joseph,
    },
  
    {
      id: 11,
      name: "Pahel Srivastava",
      photo: pahel,
    },
  
    {
      id: 12,
      name: "Samantha Gibbons",
      photo: samantha,
    },
  ];

  function Epsilon() {
    return (
        <div data-theme="black" className="text-center">
          <h1 className="font-semibold text-[56pt] text-white pt-[96px]">
          Epsilon
          </h1>
          <div className="grid justify-center grid-cols-[repeat(auto-fill,minmax(250px,1fr))] lg:gap-x-[150px] lg:gap-y-[100px] gap-[100px] pl-[100px] pr-[100px] pt-[30px] pb-[50px]">
            {epsilonData.map((member) => (
              <div key={member.id} className="flex flex-col items-center">
                <img
                  src={member.photo}
                  alt={member.name}
                  loading="lazy"
                  effect="blur"
                  className="w-[300px] h-[400px] rounded-[20px] object-cover"
                />
                <div className="font-normal text-[18pt] mt-[10px] text-white">
                  {member.name}
                </div>
              </div>
            ))}
          </div>
          </div>
    );
  }
  
  export default Epsilon;