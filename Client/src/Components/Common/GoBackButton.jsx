import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function GoBackButton({ name, location }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex items-center">
        <div
          className="bg-white p-2 w-10 mr-4 flex items-center justify-center h-10 rounded-full cursor-pointer shadow-md 
                hover:bg-gray-100
              "
          onClick={() => {
            navigate(-1);
          }}
        >
          <FiArrowLeft className="inline text-black                " />
        </div>

        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink
              onClick={() => {
                navigate(-1);
              }}
            >
              {location}
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">
              {name}
              {/* {candidateDetails?.firstName} */}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
    </div>
  );
}

export default GoBackButton;
