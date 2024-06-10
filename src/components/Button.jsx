import React from 'react'
import Link from 'next/link'

const Button = ({ onClick, text, loading, color }) => {
  return (
    <button
      disabled={loading}
      className={`${loading && "opacity-80"} ${
        color === "white"
          ? "bg-transparent border-2 border-gray-500 text-gray hover:bg-gray-400 hover:text-white hover:border-gray-400"
          : "bg-black text-white"
      } duration-300 px-4 rounded-xl mt-3 w-full text-xl py-2 hover:shadow-lg shadow-cyan-400`}
      onClick={onClick}
    >
      {loading ? "Loading..." : text}
    </button>
  )
}

export default Button
