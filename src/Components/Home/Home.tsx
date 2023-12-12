import { useState, useEffect } from "react";

export type HomeProps = {
    firstName?: string,
    lastName?: string
}

export default function Home(props: HomeProps) {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');


    return(
        <>
        <section>
            <h1 className="text-3xl font-bold" /* style={{ paddingBottom: 15 }} className="heading" */>
                {`Hi there, ${props.firstName} ${props.lastName ? props.lastName : ''}`}
            </h1>
            <h2 className="text-3xl">
                {`Count: ${count}`}
            </h2>
            <h2>
                {`Name: ${props.firstName}`}
            </h2>
            <button onClick={() => {setCount(count+1)}}>
                Add
            </button>
        </section>
        </>
    )
}
