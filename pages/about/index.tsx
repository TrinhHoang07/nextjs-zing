import {useState} from "react";

function About() {
    const [change, setChange] = useState('About Page');
    return (
        <>
            <h1>{change}</h1>
            <button onClick={() => setChange('Content changed')}>Change content</button>
        </>
    )
}
export default About