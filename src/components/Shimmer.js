const Shimmer = () => {
    return (
      <div className="w-full h-screen flex flex-wrap">
        {Array(15)
          .fill("")
          .map((_, index) => (
            <div key={index} className="w-64 h-29 bg-gray-300 m-1 "></div>
          ))}
      </div>
    );
  };
  
  export default Shimmer;
  //ctrl + space se options visible hote hai example w- k aage k