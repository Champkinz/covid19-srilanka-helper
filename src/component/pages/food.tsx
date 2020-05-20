import React, { useState, useEffect } from "react";
import Block from "./block";
import { shops } from "../data/shops";
import Modal from "react-modal";

function Food() {
  const [data, setData] = useState(shops);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setData(shops);
    console.log("ran");
  }, []);

  const Search = (word: any) => {
    console.log("word", word);
    if (word.length > 0) {
      let filteredData = shops.filter((shop) =>
        shop.delivery?.toLocaleLowerCase().includes(word.toLocaleLowerCase())
      );
      console.log("fitleres.data", filteredData);
      setData(filteredData);
    } else {
      setData(shops);
    }
  };

  return (
    <>
      <Modal
        isOpen={modal}
        onRequestClose={() => setModal(false)}
        contentLabel="Example Modal"
      >
        <div className="flex flex-1 flex-col h-full items-center justify-center">
          <p style={{ fontSize: 24, fontWeight: "bold" }}>
            Please email us the business details to charana.am@gmail.com to add
          </p>
        </div>
      </Modal>
      <div className="flex flex-1 flex-row justify-end px-6">
        <div
          onClick={() => setModal(true)}
          className="bg-blue-400 mt-2 px-2 py-1 rounded-full text-white font-bold cursor-pointer"
        >
          <p>Click here to add your business</p>
        </div>
      </div>
      <input
        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 mx-6 mt-6 appearance-none leading-normal"
        placeholder="Enter Delivery Location"
        onChange={(e) => Search(e.target.value)}
      />
      <div className="flex flex-1 flex-wrap justify-around bg-gray-100 mt-4">
        {data.map((shop, index) => (
          <Block
            key={index}
            title={shop.title}
            img={shop.img}
            description={shop.description}
            delivery={shop.delivery}
            tags={shop.tags}
            warning={shop.warning}
            website={shop.website}
            phone={shop.phone}
          />
        ))}
      </div>
    </>
  );
}

export default Food;
