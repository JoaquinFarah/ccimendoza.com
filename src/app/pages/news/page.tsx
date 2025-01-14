// import React from 'react';
// import Image from 'next/image';


// //callouts are the titles and new callouts will generate new tiles
// const callouts = [
//     {
//       name: '01/10/2024',
//       description: 'Ospitalità Italiana: Un reconocimiento a la excelencia en la gastronomía',
//       imageSrc: '/Logo.jpg',
//       imageAlt: 'mdita',
//       width: 1000,
//       height: 1000,
//       href: '/ospitalita2024',
//     },
//     {
//       name: '23/09/2024.',
//       description: 'La CCI en Radio La Red',
//       imageSrc: '/radio.jpg',
//       imageAlt: 'lared',
//       width: 1000,
//       height: 1000,
//       href: '/radio',
//     },  
//     {
//       name: '28/08/2024',
//       description: 'Éxito rotundo en las Jornadas de Ciencias Económicas de la UNCuyo con participación de la Cámara de Comercio Italiana de Mendoza',
//       imageSrc: '/uncuyo.jpg',
//       imageAlt: 'unc',
//       width: 1000,
//       height: 1000,
//       href: '/uncuyo',
//     },
//     {
//       name: '25/06/2024',
//       description: 'La Cámara de Comercio Italiana en Mendoza ofrece beneficios para viajar a la Feria Simei Milán',
//       imageSrc: '/embotelladora.jpg',
//       imageAlt: 'embotelladora',
//       width: 1000,
//       height: 1000,
//       href: 'https://enolife.com.ar/es/la-camara-de-comercio-italiana-en-mendoza-ofrece-beneficios-para-viajar-a-la-feria-simei-milan/',
//     },    
//     {
//       name: '18/06/2024',
//       description: 'Simei 2024: destilados, cerveza y aceite de oliva tendrán su lugar junto al vino y toda la tecnología',
//       imageSrc: '/deodorizes.jpg',
//       imageAlt: 'simei',
//       width: 1000,
//       height: 1000,
//       href: 'https://enolife.com.ar/es/simei-2024-destilados-cerveza-y-aceite-de-oliva-tendran-su-lugar-junto-al-vino-y-toda-la-tecnologia/',
//     },
//     {
//       name: '14/06/2024',
//       description: 'La Cámara de Comercio Italiana en la Expo San Juan Minera 2024: Promoviendo el Made in Italy en el Sector Minero Argentino',
//       imageSrc: '/exposj.jpeg',
//       imageAlt: 'expo',
//       width: 1000,
//       height: 1000,
//       href: '/pages/minassj2024',
//     },
//     {
//       name: '26/05/2024',
//       description: 'Lacrado en botellas, el ritual de conservar y distinguir al vino al que le llegó la hora de su mecanización',
//       imageSrc: '/Lacre.jpg',
//       imageAlt: 'Botella',
//       width: 1000,
//       height: 1000,
//       href: 'https://www.infocampo.com.ar/lacrado-en-botellas-el-ritual-de-conservar-y-distinguir-al-vino-al-que-le-llego-la-hora-de-su-mecanizacion/',
//     },
//     {
//       name: '23/05/2024',
//       description: '“Estamos esperando alguna normativa que motorice la importación de tecnologías vitivinícolas”',
//       imageSrc: '/cilindros.jpg',
//       imageAlt: 'Cilindros de Acero',
//       width: 1000,
//       height: 1000,
//       href: 'https://www.infocampo.com.ar/estamos-esperando-alguna-normativa-que-motorice-la-importacion-de-tecnologias-vitivinicolas/',
//     },
//     {
//       name: '24/05/2024',
//       description: 'Exitosa participación de la CCI en SITEVINITECH 2024',
//       imageSrc: '/sitevinitech.jpeg',
//       imageAlt: 'sitevinitech',
//       width: 1000,
//       height: 1000,
//       href: '/pages/sitevinitech2024',      
//     },    
//     {
//       name: '30/04/2024',
//       description: 'CCI invita a productores frutihortícolas y exportadores a participar online en la Macfrut 2024 de Italia',
//       imageSrc: '/Macfrutexpo.jpg',
//       imageAlt: 'Expo',
//       width: 1000,
//       height: 1000,
//       href: 'https://enolife.com.ar/es/cci-invita-a-productores-frutihorticolas-y-exportadores-a-participar-online-en-la-macfrut-2024-de-italia/',
//     },
//     {
//       name: '19/04/2024',
//       description: 'Recepción de la comitiva de la Scuola Enologica Cerletti en Mendoza',
//       imageSrc: '/instconegliano.jpeg',
//       imageAlt: 'inst',
//       width: 1000,
//       height: 1000,
//       href: '/pages/scuolacerletti',
//     },    
//     {
//       name: '19/02/2024',      
//       description: 'MACFRUT 2024: La Feria Internacional de Frutas y Verduras',
//       imageSrc: '/macfrut24.jpg',
//       imageAlt: 'mcf',
//       width: 1000,
//       height: 1000,
//       href: '/pages/macfrut2024',
//     },    
    
    
//   ]
  
 
  
//   export default function NewsPage() {
    
//     return (
//       <div className="bg-white">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
//             <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Noticias</h2>
//             <div className="min-h-0.5 bg-gray-200 mb-4"></div>
//             <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-2 lg:space-y-0">
//               {callouts.map((callout) => (
//                 <div key={callout.name} className="group relative rounded-lg px-1 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80">
//                   <div className="relative mt-5 h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
//                     <Image
//                       alt={callout.imageAlt}
//                       src={callout.imageSrc}
//                       width={callout.width}
//                       height={callout.height}
//                       className="h-full w-full object-cover object-center"
//                     />
//                   </div>
//                   <h3 className="mt-4 text-sm text-gray-500 px-4">
//                     <a href={callout.href}>
//                       <span className="absolute inset-0" />
//                       {callout.name}
//                     </a>
//                   </h3>
//                   <p className="text-base font-semibold text-gray-900 mb-6 text-left px-4">{callout.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
  



//ESTA ES EL MODAL COMUN




"use client";
import React, { useState } from "react";
import Image from "next/image";



// callouts
const callouts = [
      {
        name: '01/10/2024',
        description: 'Ospitalità Italiana: Un reconocimiento a la excelencia en la gastronomía',
        imageSrc: '/Logo.jpg',
        imageAlt: 'mdita',
        width: 1000,
        height: 1000,
        href: '/pages/news/ospitalita2024',
      },
      {
        name: '23/09/2024.',
        description: 'La CCI en Radio La Red',
        imageSrc: '/radio.jpg',
        imageAlt: 'lared',
        width: 1000,
        height: 1000,
        href: '/pages/news/radio',
      },  
      {
        name: '28/08/2024',
        description: 'Éxito rotundo en las Jornadas de Ciencias Económicas de la UNCuyo con participación de la Cámara de Comercio Italiana de Mendoza',
        imageSrc: '/uncuyo.jpg',
        imageAlt: 'unc',
        width: 1000,
        height: 1000,
        href: '/pages/news/uncuyo',
      },
      {
        name: '25/06/2024',
        description: 'La Cámara de Comercio Italiana en Mendoza ofrece beneficios para viajar a la Feria Simei Milán',
        imageSrc: '/embotelladora.jpg',
        imageAlt: 'embotelladora',
        width: 1000,
        height: 1000,
        href: 'https://enolife.com.ar/es/la-camara-de-comercio-italiana-en-mendoza-ofrece-beneficios-para-viajar-a-la-feria-simei-milan/',
      },    
      {
        name: '18/06/2024',
        description: 'Simei 2024: destilados, cerveza y aceite de oliva tendrán su lugar junto al vino y toda la tecnología',
        imageSrc: '/deodorizes.jpg',
        imageAlt: 'simei',
        width: 1000,
        height: 1000,
        href: 'https://enolife.com.ar/es/simei-2024-destilados-cerveza-y-aceite-de-oliva-tendran-su-lugar-junto-al-vino-y-toda-la-tecnologia/',
      },
      {
        name: '14/06/2024',
        description: 'La Cámara de Comercio Italiana en la Expo San Juan Minera 2024: Promoviendo el Made in Italy en el Sector Minero Argentino',
        imageSrc: '/exposj.jpeg',
        imageAlt: 'expo',
        width: 1000,
        height: 1000,
        href: '/pages/news/minassj2024',
      },
      {
        name: '26/05/2024',
        description: 'Lacrado en botellas, el ritual de conservar y distinguir al vino al que le llegó la hora de su mecanización',
        imageSrc: '/Lacre.jpg',
        imageAlt: 'Botella',
        width: 1000,
        height: 1000,
        href: 'https://www.infocampo.com.ar/lacrado-en-botellas-el-ritual-de-conservar-y-distinguir-al-vino-al-que-le-llego-la-hora-de-su-mecanizacion/',
      },
      {
        name: '23/05/2024',
        description: '“Estamos esperando alguna normativa que motorice la importación de tecnologías vitivinícolas”',
        imageSrc: '/cilindros.jpg',
        imageAlt: 'Cilindros de Acero',
        width: 1000,
        height: 1000,
        href: 'https://www.infocampo.com.ar/estamos-esperando-alguna-normativa-que-motorice-la-importacion-de-tecnologias-vitivinicolas/',
      },
      {
        name: '24/05/2024',
        description: 'Exitosa participación de la CCI en SITEVINITECH 2024',
        imageSrc: '/sitevinitech.jpeg',
        imageAlt: 'sitevinitech',
        width: 1000,
        height: 1000,
        href: '/pages/news/sitevinitech2024',      
      },    
      {
        name: '30/04/2024',
        description: 'CCI invita a productores frutihortícolas y exportadores a participar online en la Macfrut 2024 de Italia',
        imageSrc: '/Macfrutexpo.jpg',
        imageAlt: 'Expo',
        width: 1000,
        height: 1000,
        href: 'https://enolife.com.ar/es/cci-invita-a-productores-frutihorticolas-y-exportadores-a-participar-online-en-la-macfrut-2024-de-italia/',
      },
      {
        name: '19/04/2024',
        description: 'Recepción de la comitiva de la Scuola Enologica Cerletti en Mendoza',
        imageSrc: '/instconegliano.jpeg',
        imageAlt: 'inst',
        width: 1000,
        height: 1000,
        href: '/pages/news/scuolacerletti',
      },    
      {
        name: '19/02/2024',      
        description: 'MACFRUT 2024: La Feria Internacional de Frutas y Verduras',
        imageSrc: '/macfrut24.jpg',
        imageAlt: 'mcf',
        width: 1000,
        height: 1000,
        href: '/pages/news/macfrut2024',
      },    
      
      
    ]

export default function NewsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    href: "",
  });

  const handleItemClick = (callout: typeof callouts[0]) => {
    setModalContent({ title: callout.name, href: callout.href });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Noticias</h2>
          <div className="min-h-0.5 bg-gray-200 mb-4"></div>
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-2 lg:space-y-0">
            {callouts.map((callout) => (
              <div
                key={callout.name}
                className="group relative rounded-lg px-1 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 cursor-pointer"
                onClick={() => handleItemClick(callout)}
              >
                <div className="relative mt-5 h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <Image
                    alt={callout.imageAlt}
                    src={callout.imageSrc}
                    width={callout.width}
                    height={callout.height}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-500 px-4">{callout.name}</h3>
                <p className="text-base font-semibold text-gray-900 mb-6 text-left px-4">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg shadow-lg max-w-4xl w-full h-screen">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-medium text-gray-900">{modalContent.title}</h3>
              <button
                className="text-gray-400 hover:text-gray-600"
                onClick={closeModal}
              >
                ✕
              </button>
            </div>
            <div className="p-4 w-full h-96">
              <iframe
                src={modalContent.href}
                className="w-full h-screen border-none"
                title={modalContent.title}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}




//ESTA ES EL MODAL SWAL2




// "use client";
// import React from "react";
// import Image from "next/image";
// import Swal from "sweetalert2";

// const callouts = [
//       {
//         name: '01/10/2024',
//         description: 'Ospitalità Italiana: Un reconocimiento a la excelencia en la gastronomía',
//         imageSrc: '/Logo.jpg',
//         imageAlt: 'mdita',
//         width: 1000,
//         height: 1000,
//         href: '/public/data/ospitalita2024',
//       },
//       {
//         name: '23/09/2024.',
//         description: 'La CCI en Radio La Red',
//         imageSrc: '/radio.jpg',
//         imageAlt: 'lared',
//         width: 1000,
//         height: 1000,
//         href: '/pages/news/radio',
//       },  
//       {
//         name: '28/08/2024',
//         description: 'Éxito rotundo en las Jornadas de Ciencias Económicas de la UNCuyo con participación de la Cámara de Comercio Italiana de Mendoza',
//         imageSrc: '/uncuyo.jpg',
//         imageAlt: 'unc',
//         width: 1000,
//         height: 1000,
//         href: '/uncuyo',
//       },
//       {
//         name: '25/06/2024',
//         description: 'La Cámara de Comercio Italiana en Mendoza ofrece beneficios para viajar a la Feria Simei Milán',
//         imageSrc: '/embotelladora.jpg',
//         imageAlt: 'embotelladora',
//         width: 1000,
//         height: 1000,
//         href: 'https://enolife.com.ar/es/la-camara-de-comercio-italiana-en-mendoza-ofrece-beneficios-para-viajar-a-la-feria-simei-milan/',
//       },    
//       {
//         name: '18/06/2024',
//         description: 'Simei 2024: destilados, cerveza y aceite de oliva tendrán su lugar junto al vino y toda la tecnología',
//         imageSrc: '/deodorizes.jpg',
//         imageAlt: 'simei',
//         width: 1000,
//         height: 1000,
//         href: 'https://enolife.com.ar/es/simei-2024-destilados-cerveza-y-aceite-de-oliva-tendran-su-lugar-junto-al-vino-y-toda-la-tecnologia/',
//       },
//       {
//         name: '14/06/2024',
//         description: 'La Cámara de Comercio Italiana en la Expo San Juan Minera 2024: Promoviendo el Made in Italy en el Sector Minero Argentino',
//         imageSrc: '/exposj.jpeg',
//         imageAlt: 'expo',
//         width: 1000,
//         height: 1000,
//         href: '/pages/minassj2024',
//       },
//       {
//         name: '26/05/2024',
//         description: 'Lacrado en botellas, el ritual de conservar y distinguir al vino al que le llegó la hora de su mecanización',
//         imageSrc: '/Lacre.jpg',
//         imageAlt: 'Botella',
//         width: 1000,
//         height: 1000,
//         href: 'https://www.infocampo.com.ar/lacrado-en-botellas-el-ritual-de-conservar-y-distinguir-al-vino-al-que-le-llego-la-hora-de-su-mecanizacion/',
//       },
//       {
//         name: '23/05/2024',
//         description: '“Estamos esperando alguna normativa que motorice la importación de tecnologías vitivinícolas”',
//         imageSrc: '/cilindros.jpg',
//         imageAlt: 'Cilindros de Acero',
//         width: 1000,
//         height: 1000,
//         href: 'https://www.infocampo.com.ar/estamos-esperando-alguna-normativa-que-motorice-la-importacion-de-tecnologias-vitivinicolas/',
//       },
//       {
//         name: '24/05/2024',
//         description: 'Exitosa participación de la CCI en SITEVINITECH 2024',
//         imageSrc: '/sitevinitech.jpeg',
//         imageAlt: 'sitevinitech',
//         width: 1000,
//         height: 1000,
//         href: '/pages/sitevinitech2024',      
//       },    
//       {
//         name: '30/04/2024',
//         description: 'CCI invita a productores frutihortícolas y exportadores a participar online en la Macfrut 2024 de Italia',
//         imageSrc: '/Macfrutexpo.jpg',
//         imageAlt: 'Expo',
//         width: 1000,
//         height: 1000,
//         href: 'https://enolife.com.ar/es/cci-invita-a-productores-frutihorticolas-y-exportadores-a-participar-online-en-la-macfrut-2024-de-italia/',
//       },
//       {
//         name: '19/04/2024',
//         description: 'Recepción de la comitiva de la Scuola Enologica Cerletti en Mendoza',
//         imageSrc: '/instconegliano.jpeg',
//         imageAlt: 'inst',
//         width: 1000,
//         height: 1000,
//         href: '/pages/scuolacerletti',
//       },    
//       {
//         name: '19/02/2024',      
//         description: 'MACFRUT 2024: La Feria Internacional de Frutas y Verduras',
//         imageSrc: '/macfrut24.jpg',
//         imageAlt: 'mcf',
//         width: 1000,
//         height: 1000,
//         href: '/pages/macfrut2024',
//       },    
      
      
//     ];

// export default function NewsPage() {
//   React.useEffect(() => {
//     // Estilos personalizados para SweetAlert2
//     const style = document.createElement("style");
//     style.textContent = `
//       .justified-text {
//         text-align: center;
//       }
//       .custom-html-container {
//         max-height: 300px;
//         overflow-y: auto;
//       }
//     `;
//     document.head.appendChild(style);

//     return () => {
//       document.head.removeChild(style);
//     };
//   }, []);

//   const openModal = (href: string, title: string) => {
//     Swal.fire({
//       title,
//       html: `<iframe src="${href}" style="width:100%; height:400px; border:none;"></iframe>`,
//       width: "80%",
//       heightAuto: false,
//       showCloseButton: true,
//       showConfirmButton: false,
//       customClass: {
//         popup: "custom-html-container",
//       },
//     });
//   };

//   return (
//     <div className="bg-white">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
//           <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//             Noticias
//           </h2>
//           <div className="min-h-0.5 bg-gray-200 mb-4"></div>
//           <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-2 lg:space-y-0">
//             {callouts.map((callout) => (
//               <div
//                 key={callout.name}
//                 onClick={() => openModal(callout.href, callout.name)}
//                 className="group relative rounded-lg px-1 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 cursor-pointer"
//               >
//                 <div className="relative mt-5 h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
//                   <Image
//                     alt={callout.imageAlt}
//                     src={callout.imageSrc}
//                     width={callout.width}
//                     height={callout.height}
//                     className="h-full w-full object-cover object-center"
//                   />
//                 </div>
//                 <h3 className="mt-4 text-sm text-gray-500 px-4">
//                   <span>{callout.name}</span>
//                 </h3>
//                 <p className="text-base font-semibold text-gray-900 mb-6 text-left px-4">
//                   {callout.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
