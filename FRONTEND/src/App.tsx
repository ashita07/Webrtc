import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div>
          <input
            type="text"
            placeholder="messager"
            className="border-4 p-3 m-5 rounded-xl"
          />
        </div>
        <div>
          <button className="px-6 m-2 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            Click Me
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
