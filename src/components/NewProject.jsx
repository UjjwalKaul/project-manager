import React, { useRef } from 'react'
import Input from './Input'

export default function NewProject({ onAdd }) {
    const title = useRef()
    const desc = useRef()
    const due = useRef()

    function handleSave() {
        const enteredTitle = title.current.value
        const enteredDesc = desc.current.value
        const enteredDue = due.current.value
        //Validation
        onAdd({
            title: enteredTitle,
            desc: enteredDesc,
            due: enteredDue
        })
    }

    return <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4'>
            <li><button className='text-stone-700 hover:text-stone-950'>Cancel</button></li>
            <li><button onClick={handleSave} className='rounded-md px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950'>Save</button></li>
        </menu>
        <div>
            <Input type="text" label={"Title"} ref={title} />
            <Input label={"Description"} isTextarea ref={desc} />
            <Input type="date" label={"Due Date"} ref={due} />
        </div>
    </div>
}
