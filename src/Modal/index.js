import React from 'react'
import { createPortal } from 'react-dom'

const Modal = ({ children }) => {
    return createPortal(
        <div className='absolute top-0 bg-black h-screen w-screen bg-opacity-70 flex items-center justify-center text-white'>
            {children}
        </div>,
        document.getElementById('portal')
    )
}

export default Modal