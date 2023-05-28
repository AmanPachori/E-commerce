import React from "react";

const Index = () => {
  return (
    <>
      <div className="flex items-center  justify-center ">
        <div className="shadow-lg rounded-lg p-5 w-90 my-5  mx-auto">
          <h2 className="text-center text-2xl mb-5 font-bold ">Contact Us</h2>
          <div className="flex my-3 justify-center items-center text-center w-[40rem]">
            <div className=" m-2 p-3 w-1/2 bg-gray-100 rounded ">
              <div className="w-full flex items-center justify-center">
                <img
                  src="https://img.icons8.com/ios/30/new-post--v1.png"
                  alt="new-post--v1"
                  className=""
                />
              </div>
              <span> greenloverscare@gmail.com</span>
            </div>
            <div className="m-2 p-3 w-1/2 bg-gray-100 rounded ">
              <a
                href="https://api.whatsapp.com/send?phone=919306308583&text=&source=&data="
                target="_blank"
              >
                <div className="w-full flex items-center justify-center">
                  <img
                    src="https://img.icons8.com/ios/30/whatsapp--v1.png"
                    alt="new-post--v1"
                    className=""
                  />
                </div>
              </a>
              <span>9306308583</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
