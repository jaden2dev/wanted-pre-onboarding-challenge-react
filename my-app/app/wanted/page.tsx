import React, {Suspense} from "react";
import CoffeeTitle from "@/app/wanted/CoffeeTitle";
import CoffeeContent from "@/app/wanted/CoffeeContent";

export default async function Data() {
    return (
        <div>
            <Suspense fallback={<h1>Loading</h1>}>
                <CoffeeTitle/>
            </Suspense>
            <hr/>
            <Suspense fallback={<h1>Loading</h1>}>
                <CoffeeContent/>
            </Suspense>
        </div>
    )
}