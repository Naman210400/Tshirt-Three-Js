import React from "react";
import CustomButton from "./CustomButton";

const AiPicker = ({ prompt, setPrompt, generating, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea
        className="aipicker-textarea"
        placeholder="ask AI.."
        rows={5}
        onChange={(e) => setPrompt(e.target.value)}
        value={prompt}
      />
      <div className="flex flex-wrap gap-3">
        {generating ? (
          <CustomButton
            title="Asking AI.."
            type="outline"
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton
              title="AI Logo"
              type="outline"
              handleClick={() => handleSubmit("logo")}
              customStyles="text-xs"
            />
            <CustomButton
              title="AI Full"
              type="filled"
              handleClick={() => handleSubmit("full")}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AiPicker;
