import React from 'react'

const FormField = ({labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900 dark:text-white"
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="font-semibold text-xs bg-[#ececf1] dark:bg-[#8BAA36] py-1 px-2 rounded-[5px] text-black"
          >
            Surprise me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required
        className="bg-gray-50 dark:bg-[#2A2C36] border border-gray-300 dark:border-b-[#FAFAFA] text-gray-900 dark:text-[#FAFAFA] text-sm rouded-lg focus:ring-[#4649ff] focus:border-[#4649ff] dark:focus:ring-[#8BAA36] dark:focus:border-[#8BAA36] outline-none block w-full p-3"
      />
    </div>
  );
}

export default FormField
