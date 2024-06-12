"use client"

import FormButton from "@/app/wanted/post/form-btn";
import {useFormState} from "react-dom";
import {handleForm} from "@/app/wanted/post/action";

export default function Wanted() {
    const [state, action] = useFormState(handleForm, null)
    return (
        <div>
            <form action={action}>
                <ul>
                    <li>
                        이름 <input type={"text"} name={'name'}/>
                        {state?.error.includes("name") && "이름이 틀렸어요"}
                    </li>
                    <li>
                        희망연봉 <input type={"number"} name={'salary'}/>
                        {state?.error.includes("salary") && "연봉이 틀렸어요"}
                    </li>
                </ul>
                <FormButton/>
            </form>
        </div>
    )
}