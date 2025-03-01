import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Items from "../../../Utils/Items";
import { PrimaryBtn, SecondaryBtn } from "../../../components";
import { FaLink, FaCode } from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState();
  useEffect(() => {
    const filtered = Items.find((item) => item.id === parseInt(id));
    setItem(filtered);
  }, [id]);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 2,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="parent py-16">
      <h1 className="text-center text-4xl font-medium mt-8">{item?.title}</h1>

      
      <p className="text-neutral font-medium mt-10 mb-6">
        <span className="font-semibold text-white text-xl">Description: </span>{" "}
        {item?.description}
      </p>
      <div className="my-6">
        <h2 className="text-2xl font-semibold mb-3">Features:</h2>
        <ul className="list-disc grid grid-cols-1 md:grid-cols-2 ml-4">
          {item?.features?.map((feature, index) => (
            <li key={index} className="text-neutral">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="my-6">
        <h2 className="text-2xl font-semibold mb-3">Tools & Technologies:</h2>
        <ul className="list-disc grid grid-cols-1 md:grid-cols-2 ml-4">
          {item?.technologies?.map((feature, index) => (
            <li key={index} className="text-neutral">
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center mt-8">
        {/* <a href={item?.liveLink} className="mr-4" target="blank">
          <PrimaryBtn>
            <span>Visit Now</span>
            <span>
              <FaLink />
            </span>
          </PrimaryBtn>
        </a> */}
        <a href={item?.codeLink} target="blank">
          <SecondaryBtn>
            <span>Source Code</span>
            <span>
              <FaCode />
            </span>
          </SecondaryBtn>
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
