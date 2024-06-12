"use server";

export async function handleForm(prevState: any, formData: FormData) {
    console.log(formData.get("name"), formData.get("salary"))
    await new Promise((resolve) => setTimeout(resolve, 5000))
    console.log("i run in the server")

    // validation
    return {
        error: ["name", "salary"]
    }
    // 최종완료처리...
    // 페이지이동
}