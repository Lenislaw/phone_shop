import React from "react";
import Loader from "react-loader-spinner";

const Spinner = () => {
  //other logic

  return (
    <div className="loader">
      <Loader
        type="Oval"
        color="#19888d"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  );
};
export default Spinner;
