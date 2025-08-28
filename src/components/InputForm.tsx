// Form with Name, Email, Password fields.
// Inputs with rounded borders, focus effects, and styled submit button.

const InputForm = () => {
    return (
        <form className="m-10 space-y-6 max-w-md mx-auto p-8 rounded-lg shadow-xl bg-white border border-gray-300">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Sign Up</h2>
            <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                <input
                    id="name"
                    type="text"
                    className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm px-3 py-2 focus:border-gray-500 focus:ring-gray-500 focus:ring-2 transition duration-200"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input
                    id="email"
                    type="email"
                    className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm px-3 py-2 focus:border-gray-500 focus:ring-gray-500 focus:ring-2 transition duration-200"
                />
            </div>
            <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                <input
                    id="password"
                    type="password"
                    className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm px-3 py-2 focus:border-gray-500 focus:ring-gray-500 focus:ring-2 transition duration-200"
                />
            </div>
            <button
                type="submit"
                className="w-full rounded-lg bg-gray-800 px-4 py-3 text-white font-semibold hover:bg-gray-900 transform hover:scale-105 transition duration-200 shadow-lg"
            >
                Submit
            </button>
        </form>
    );
};
          
export default InputForm;
