const Table = () => {
    return (
        <div className="overflow-x-auto">
            <table className="table-auto border-collapse border border-gray-300 w-full">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 px-4 py-2">Header 1</th>
                        <th className="border border-gray-300 px-4 py-2">Header 2</th>
                        <th className="border border-gray-300 px-4 py-2">Header 3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="hover:bg-gray-100 odd:bg-white even:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">Row 1 Col 1</td>
                        <td className="border border-gray-300 px-4 py-2">Row 1 Col 2</td>
                        <td className="border border-gray-300 px-4 py-2">Row 1 Col 3</td>
                    </tr>
                    <tr className="hover:bg-gray-100 odd:bg-white even:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">Row 2 Col 1</td>
                        <td className="border border-gray-300 px-4 py-2">Row 2 Col 2</td>
                        <td className="border border-gray-300 px-4 py-2">Row 2 Col 3</td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default Table;
