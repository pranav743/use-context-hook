const Card = () => {
    return (
        <div className="flex flex-col items-center bg-white gap-6 p-6 border border-gray-200 w-[320px] m-5 rounded-lg shadow-lg">
            <img className="max-w-[220px] rounded-md hover:scale-105 transition-transform duration-300 ease-in-out" src="https://wallpaperaccess.com/full/1137443.jpg" alt="City Scape" />
            <h3 className="text-gray-800 text-lg font-medium">City Scape Evening</h3>
            <p className="text-gray-600 text-center text-sm">Experience the serene beauty of an evening cityscape.</p>
            <button className="bg-blue-600 text-white hover:bg-blue-700 px-5 py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300">Learn More</button>
        </div>
    )
}


export default Card;
