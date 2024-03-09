import React, { useRef, useState } from "react";

function CarModal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <button
        className="rounded-3xl text-center bg-white text-black py-2 px-4"
        onClick={toggleModal}
      >
        Ok
      </button>

      {modal && (
        <div>
          <div className="text-white">
            <h1>Hello Modal</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <button
              className="rounded-3xl text-center bg-white text-black py-2 px-4"
              onClick={toggleModal}
            >
              Ok
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CarModal;
