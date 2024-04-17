import React, { useRef } from 'react'
import Input from './Input'
import Modal from './Modal'

export default function NewProject({ onAdd, onCancel }) {
    const title = useRef()
    const desc = useRef()
    const due = useRef()
    const modal = useRef()

    function handleSave() {
        const enteredTitle = title.current.value
        const enteredDesc = desc.current.value
        const enteredDue = due.current.value
        //Validation
        if (enteredTitle.trim() === "" || enteredDesc.trim() === "" || enteredDue.trim() === "") {
            modal.current.open()
            return
        }
        onAdd({
            title: enteredTitle,
            desc: enteredDesc,
            due: enteredDue
        })
    }

    return <>
        <Modal ref={modal} btnCaption="Okay">
            <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Inputs</h2>
            <p className='text-stone-600 mb-4'>Oops..looks like you forgot to enter a value.</p>
            <p className='text-stone-600 mb-4'>Please provide a valid info for input field</p>
        </Modal>
        <div className='w-[35rem] mt-16'>
            <menu className='flex items-center justify-end gap-4 my-4'>
                <li><button onClick={onCancel} className='text-stone-700 hover:text-stone-950'>Cancel</button></li>
                <li><button onClick={handleSave} className='rounded-md px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950'>Save</button></li>
            </menu>
            <div>
                <Input type="text" label={"Title"} ref={title} />
                <Input label={"Description"} isTextarea ref={desc} />
                <Input type="date" label={"Due Date"} ref={due} />
            </div>
        </div>
    </>

}
