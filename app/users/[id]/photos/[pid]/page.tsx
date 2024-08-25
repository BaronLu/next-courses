import React from "react";

interface props {
  params: {
    id: string;
    pid: string;
  };
}

const photos = ({ params: { id, pid } }: props) => {
  return <div>
    <h1>user {id}</h1>
    <h2>Photo description{pid}</h2>
  </div>;
};

export default photos;
