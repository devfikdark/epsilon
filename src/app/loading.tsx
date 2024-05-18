const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-4">
      <div className="border-4 border-gray-200 rounded-full w-14 h-14 animate-spin border-t-primary" />
      <h1 className="text-lg text-textColor">Something is cooking. Please wait...</h1>
    </div>
  );
};

export default Loading;
