/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useCamelToNormalCase } from "@/utils/hooks";

/**
 * Define your own custom columns from columnsTable props
 */

export default function Table(props) {
  const { dataTable, columnsTable } = props;
  const columnHelper = createColumnHelper();
  const camelToNormalCase = useCamelToNormalCase();

  const dataSample = dataTable[0];

  const columnsMap = [
    ...Object.keys(dataSample).map((item) =>
      columnHelper.accessor(item, {
        header: () => {
          const ilc = item.toLowerCase();
          if ((ilc === "id") | (ilc === "nik") | (ilc === "userid")) {
            return <h1>{item.toUpperCase()}</h1>;
          } else {
            return <h1>{camelToNormalCase(item)}</h1>;
          }
        },
      })
    ),
  ];

  const table = useReactTable({
    data: dataTable,
    columns: columnsTable ?? columnsMap,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex flex-col rounded-lg">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white border-b">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map((row) => (
                  <tr
                    key={row.id}
                    className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                {table.getFooterGroups().map((footerGroup) => (
                  <tr key={footerGroup.id}>
                    {footerGroup.headers.map((header) => (
                      <th key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.footer,
                              header.getContext()
                            )}
                      </th>
                    ))}
                  </tr>
                ))}
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
