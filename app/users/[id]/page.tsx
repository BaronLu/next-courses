import { notFound } from "next/navigation";
import React from "react";

interface props {
  params: {
        id: string;
    };
}


const page = ({params: {id}}:props) => {

  if(parseInt(id) > 10) notFound();

  return <div>UserDeatilPage {id}</div>;
};

export default page;
