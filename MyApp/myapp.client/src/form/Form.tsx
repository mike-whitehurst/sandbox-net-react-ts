import { useState } from "react";
import TextBox from './TextBox';

function Form() {

    const [displaySubmitted, setDisplaySubmitted] = useState(false);
    const [person, setPerson] = useState({ firstName: '', lastName: '' });

    function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        setPerson({...person, firstName: e.target.value});
    };

    function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        setPerson({ ...person, lastName: e.target.value });
    };

    function handleSubmit() {
        fetch('api/form/submit', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(person)
        }).then(() => {
            setDisplaySubmitted(true);
        });
    }

    return (
        <div>
            <h2>Form Page</h2>
            <TextBox label="First Name" value={person.firstName} handleChange={handleFirstNameChange} />
            <TextBox label="Last Name" value={person.lastName} handleChange={handleLastNameChange} />

            <hr />
            <h2>Master Values</h2>
            <p>First Name: {person.firstName}</p>
            <p>Last Name: {person.lastName}</p>
            <button onClick={handleSubmit}>Submit</button> {displaySubmitted ? (<span style={{ color: 'green' }}>Submitted</span>) : null}
        </div>
    );
}

export default Form;