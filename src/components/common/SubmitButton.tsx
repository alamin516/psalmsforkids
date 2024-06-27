import React from 'react';

interface SubmitButtonProps {
  onClick: () => void;
  submit: boolean;
  text: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick, submit, text }) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      disabled={submit}
      className="glass-button rounded-lg shadow font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
    >
      {submit ? (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-black mr-2"></div>
          Processing...
        </div>
      ) : (
        text
      )}
    </button>
  );
};

export default SubmitButton;