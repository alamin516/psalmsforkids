import React from "react";

const SubmitButton: React.FC = (props) => {
  return (
    <button
      onClick={props.onClick}
      type="submit"
      disabled={props.submit}
      className="glass-button rounded-lg shadow font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
    >
      {props.submit ? (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-black mr-2"></div>
          Processing...
        </div>
      ) : (
        props.text
      )}
    </button>
  );
};

export default SubmitButton;
