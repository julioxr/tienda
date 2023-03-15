export default function Table() {
    return (
        <div className="overflow-x-auto mb-14 flex justify-center mt-16">
            <table className="w-[1000px] min-w-[600px] text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                    <tr>
                        <th className="px-6 py-3">Caracteristicas</th>
                        <th className="px-6 py-3">Descripcion</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b">
                        <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            Sensor
                        </th>
                        <td className="px-6 py-4">
                            Sensor CMOS de fotograma completo de 22,3
                            megapíxeles con procesador de imagen DIGIC 5+
                        </td>
                    </tr>
                    <tr className="bg-white border-b">
                        <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            Rango de ISO
                        </th>
                        <td className="px-6 py-4">
                            100 - 25600 (ampliable a 50 - 102400)
                        </td>
                    </tr>
                    <tr className="bg-white border-b">
                        <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            Enfoque automático
                        </th>
                        <td className="px-6 py-4">
                            Sistema de enfoque automático de 61 puntos con 41
                            puntos tipo cruz
                        </td>
                    </tr>
                    <tr className="bg-white border-b">
                        <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            Grabación de video
                        </th>
                        <td className="px-6 py-4">
                            Grabación de video Full HD a 1080p con control
                            manual y salida HDMI
                        </td>
                    </tr>
                    <tr className="bg-white border-b">
                        <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            Velocidad de disparo
                        </th>
                        <td className="px-6 py-4">
                            Velocidad de disparo continuo de hasta 6 fotogramas
                            por segundo
                        </td>
                    </tr>
                    <tr className="bg-white border-b">
                        <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            Pantalla
                        </th>
                        <td className="px-6 py-4">
                            Pantalla LCD de 3,2 pulgadas con resolución de
                            1.040.000 píxeles y revestimiento antirreflejos
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

// <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//     <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//         <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//             <tr>
//                 <th scope="col" className="px-6 py-3">
//                     Product name
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                     Color
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                     Category
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                     Price
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                     Action
//                 </th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
//                 <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     Apple MacBook Pro 17"
//                 </th>
//                 <td className="px-6 py-4">
//                     Silver
//                 </td>
//                 <td className="px-6 py-4">
//                     Laptop
//                 </td>
//                 <td className="px-6 py-4">
//                     $2999
//                 </td>
//                 <td className="px-6 py-4">
//                     <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
//                 </td>
//             </tr>
//             <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
//                 <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     Microsoft Surface Pro
//                 </th>
//                 <td className="px-6 py-4">
//                     White
//                 </td>
//                 <td className="px-6 py-4">
//                     Laptop PC
//                 </td>
//                 <td className="px-6 py-4">
//                     $1999
//                 </td>
//                 <td className="px-6 py-4">
//                     <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
//                 </td>
//             </tr>
//             <tr className="bg-white dark:bg-gray-800">
//                 <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     Magic Mouse 2
//                 </th>
//                 <td className="px-6 py-4">
//                     Black
//                 </td>
//                 <td className="px-6 py-4">
//                     Accessories
//                 </td>
//                 <td className="px-6 py-4">
//                     $99
//                 </td>
//                 <td className="px-6 py-4">
//                     <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
//                 </td>
//             </tr>
//         </tbody>
//     </table>
// </div>
