import { useState } from "react";



const SignupForm = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    return (

        <>
            <h1>SUPER APP</h1>
            <h3>Create your free account</h3>
            <form>
                <input
                    type="text"
                    placeholder="name"
                    value={inputs.name || ""}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Username"
                    value={inputs.username || ""}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Email"
                    value={inputs.username || ""}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Mobile"
                    value={inputs.username || ""}
                    onChange={handleChange}
                />
                <input
                    type="checkbox"
                    required
                />
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default SignupForm;