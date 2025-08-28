import Button from "./components/Button";
import Grid from "./components/Grid";
import ImageContainer from "./components/ImageContainer";
import InputForm from "./components/InputForm";
import Navbar from "./components/Navbar";
import Table from "./components/Table";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-blue-800 bg-clip-text text-transparent">
              Welcome to Our Platform
            </h1>
            <Button />
          </div>
          <div className="md:w-1/2">
            <ImageContainer />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
          <Grid />
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Data Overview</h2>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <Table />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="bg-gray-50 rounded-lg shadow-lg p-6">
            <InputForm />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
