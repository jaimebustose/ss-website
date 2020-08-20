import React from "react";

export default function ContactForm() {
  return (
    <div>
      <div className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              ¡Tienes dudas, nosotros te ayudamos!
            </h2>
            <div className="text-gray-700 mt-8">
              ¡Hazla corta! envianos un <b>e-mail</b> y te daremos respuesta de
              inmediato.
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <div className="">
            <div>
              <span className="uppercase text-sm text-gray-600 font-bold">
                Nombre
              </span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 px-4 py-2 block appearance-none rounded-md focus:outline-none  leading-normal"
                type="text"
                placeholder="Nombre Completo"
              />
            </div>
            <div className="mt-8 grid gap-2 grid-cols-2">
              <div className="w-full">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Asunto
                </span>
                <input
                  className="w-full  bg-gray-300 text-gray-900 mt-2 px-4 py-2 block appearance-none rounded-md focus:outline-none  leading-normal"
                  type="text"
                  placeholder="Consulta de precios"
                />
              </div>
              <div className="w-full">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Email
                </span>
                <input
                  className="w-full bg-gray-300 text-gray-900 mt-2 px-4 py-2 block appearance-none rounded-md focus:outline-none  leading-normal"
                  type="text"
                  placeholder="usuario@mail.com"
                />
              </div>
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Mensaje
              </span>
              <textarea className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <div className="mt-8">
              <button className="uppercase text-sm font-bold tracking-wide bg-neutralv-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                Enviar mensaje
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
