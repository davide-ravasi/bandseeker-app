import React from "react";

export const Usercard = () => {
  return (
    <>
      <div className="flex flex-wrap place-items-center h-screen">
        <div className="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
          <a href="#" className="w-full block h-full">
            <img
              alt="blog photo"
              src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
              className="max-h-40 w-full object-cover"
            />
            <div className="bg-white w-full p-4">
              <p className="text-indigo-500 text-2xl font-medium">
                Do you find guitarlist?
              </p>
              <p className="text-gray-800 text-sm font-medium mb-2">
                I love playing guitar
              </p>
              <p className="text-gray-600 font-light text-md">
                I love Jimmy hendrix
                <a className="inline-flex text-indigo-500" href="#">
                  Read More
                </a>
              </p>
              <div className="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
                <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                  #online
                </span>
                <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                  #internet
                </span>
                <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                  #education
                </span>
              </div>
              <div className="flex items-center mt-2">
                <img
                  className="w-10 h-10 object-cover rounded-full"
                  alt="User avatar"
                  src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
                />

                <div className="pl-3">
                  <div className="font-medium">Alex 123</div>
                  <div className="text-gray-600 text-sm">Super Guitarlist</div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a
            title="Follow me on twitter"
            href="https://www.twitter.com/asad_codes"
            target="_blank"
            className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          >
            <img
              className="object-cover object-center w-full h-full rounded-full"
              src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/12/twitter-logo.jpg"
            />
          </a>
        </div>
      </div>
    </>
  );
};
