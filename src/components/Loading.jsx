const Loading = () => {
  return (
    <main className="bg-gradient-to-r from-gray-400 via-gray-800 to-gray-600 text-white rounded text-center flex flex-row mt-20 mx-40 py-5">
      <div className="mx-auto flex flex-row">
        <img
          className="animate-spin h-5 w-5 mr-3 "
          src="images/status.png"
          alt=""
        />
        <h1 className="">Loading...</h1>
      </div>
    </main>
  );
};

export default Loading;
