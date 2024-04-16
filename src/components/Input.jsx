import React from 'react'

export default function Input({ label, isTextarea, ...props }) {
    return <p>
        <label>{label}</label>
        {isTextarea ? <textarea {...props}></textarea> : <input {...props} />}
    </p>
}
