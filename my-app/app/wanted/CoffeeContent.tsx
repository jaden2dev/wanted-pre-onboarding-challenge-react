async function getData() {
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const response = await fetch("https://api.sampleapis.com/coffee/hot");
    const json = await response.json();
    return json;
}

export default async function CoffeeContent() {
    const data = await getData()
    return (
        <h6>coffee content</h6>
    )
}