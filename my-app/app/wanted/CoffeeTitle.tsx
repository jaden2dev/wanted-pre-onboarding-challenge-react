async function getData() {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch("https://api.sampleapis.com/coffee/hot");
    const json = await response.json();
    return json;
}

export default async function CoffeeTitle() {
    const data = await getData()
    return (
        <h1>coffee title</h1>
    )
}