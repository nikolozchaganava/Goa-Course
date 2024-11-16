import React from 'react'

export default function Button({ children, variant }) {
    const handleVariants = () => {
        if (variant === "black") {
            return (
                <button className='bg-black text-white text-xl px-4 rounded-[5px] py-1 hover:bg-black/70 transition-all hover:scale-[1.05] duration-150 tracking-wide'>
                    {children}
                </button>
            )
        }

    }
    return (
        handleVariants()
    )
}