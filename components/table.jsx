export default function Table({ item }) {
    return (
        <div className="mb-14 mt-16 flex justify-start overflow-x-auto px-4 sm:justify-center sm:px-0">
            <table className="w-[1000px] min-w-[600px] text-left text-sm text-gray-500">
                <thead className="bg-gray-200 text-xs uppercase text-gray-700">
                    <tr>
                        <th className="bg-gray-200 py-3 px-2 sm:static sm:px-6">
                            Caracteristicas
                        </th>
                        <th className=" py-3 px-2  sm:w-auto sm:px-6">
                            Descripcion
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {item.info.map((item) => {
                        return (
                            <>
                                <tr className="border-b">
                                    <th className="whitespace-nowrap bg-white py-4 px-2 font-medium text-gray-900 sm:static sm:px-6">
                                        {item.header}
                                    </th>
                                    <td className="bg-white py-4 px-2 sm:w-auto sm:px-6">
                                        {item.description}
                                    </td>
                                </tr>
                            </>
                        );
                    })}
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
