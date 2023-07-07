import React from 'react'

const Background = ({children}) => {
  return (
    <body className="bg-white dark:bg-[#1E1F28] transition-all">
            {children}
        </body>
  )
}

export default Background
