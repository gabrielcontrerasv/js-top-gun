import { useState, useEffect } from "react";
import api from "../../axiosApi/api";

const fetchTable = async () => {
  try {
    const response = await api.get("/records");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const petTable = () => {
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    const getTable = async () => {
      const data = await fetchTable();
      setDataTable(data);
    };
    getTable();
  }, []);

  return (
    <div className="flex flex-col mt-10">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-md">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-[#166060]">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                  >
                    Diagnosis
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                  >
                    Treatment
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {dataTable?.map((data) => {
                  return (
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {data.id}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {data.date}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {data.diagnosis}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {data.treatment}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default petTable;

// <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">

//</td>

// <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
// 1
// </td>
// <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
// Jone Doe
// </td>
// <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
// jonne62@gmail.com
// </td>
// <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
// jonne62@gmail.com
// </td>
