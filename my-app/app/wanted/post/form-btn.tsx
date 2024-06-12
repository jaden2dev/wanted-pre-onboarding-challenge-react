"use client"

import {useFormStatus} from "react-dom"

export default function FormButton() {
    const {pending} = useFormStatus()
    return (
        <button
            disabled={pending}
            className={"bg-red-500 p-3"}>
            {pending ? "로딩중" : "전송"}
            </button>
    )
}
