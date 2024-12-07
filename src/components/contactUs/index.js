import React from "react";

const Index = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="shadow-lg rounded-lg p-5 my-1 mx-auto w-fit">
        <h2 className="text-center text-2xl mb-5 font-bold">Contact Us</h2>
        <div className="flex flex-col my-3 justify-center items-center text-center sm:flex-row sm:justify-between">
          <div
            style={{ width: "250px" }}
            className="m-2 p-3 bg-gray-100 rounded w-250"
          >
            <a
              href="https://api.whatsapp.com/send?phone=919588771635&text=&source=&data="
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center justify-center">
                <img
                  src="https://img.icons8.com/ios/30/whatsapp--v1.png"
                  alt="whatsapp--v1"
                />
              </div>
            </a>
            <span className="mt-2">9588771635</span>
          </div>
          <div
            style={{ width: "250px" }}
            className="m-2 p-3 bg-gray-100 rounded w-250"
          >
            <a href="mailto:greenloverscare@email.com">
              <div className="flex items-center justify-center">
                <img
                  src="https://img.icons8.com/ios/30/new-post--v1.png"
                  alt="new-post--v1"
                />
              </div>
              <span className="mt-2">kuldeepmangla2002@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
