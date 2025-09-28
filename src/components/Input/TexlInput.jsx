import React from 'react'

const TexlInput = ({isDarkMode , value , handleInputChange , textarea , label  }) => {
    const InputComonte = textarea ? "textarea" : "input";

    return(
        <div className="relative">
            <InputComonte
            type='text'
            className={`w-full px-4 pt-6 pb-2 border rounded-xl outline-none resize-none  transition-all duration-300 ${
                isDarkMode
                ? "bg-gray-800/50 border-gray-700 text-white  focus:border-blue-500  focus:bg-gray-800/70"
                : "bg-white/80 border-gray-300 text-gray-900 focus:border-blue-500 focus:bg-white/90"
            }`}
            value={value}
            onChange={({target})=>  handleInputChange(target.value)}
            />
            <label className='text-sm absolute left-4 top-2 px-1 origin-left transition-all duration-300 pointer-events-none'>
                {label}
            </label>
        </div>
    )
}

export default TexlInput