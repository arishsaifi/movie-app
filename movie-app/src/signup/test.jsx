import React, { useState } from 'react';

function Test() {
    const [name, setName] = useState('');
    const [userName, setuserName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setmobile] = useState('');
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const [nameError, setnameError] = useState('');
    const [usernameError, setusernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [mobileError, setmobileError] = useState('');
    const [termsError, setTermsError] = useState('');

    // ... registration logic
    const handleRegistration = () => {
        // Reset error messages
        setnameError('');
        setusernameError('');
        setEmailError('');
        setmobileError('');
        setTermsError('');

        // Validate fields
        if (!name) {
            setnameError(' name is required');
        }
        if (!userName) {
            setusernameError('user name is required')
        }
        if (!email) {
            setEmailError("email is required");
        }
        if (!mobile) {
            setmobileError("mobile is required ")
        }
        // ... similarly for other fields

        // Check terms and conditions
        if (!acceptedTerms) {
            setTermsError('You must accept the terms and conditions');
        }

        // If there are any errors, stop registration
        if (nameError || usernameError || emailError || mobileError || termsError) {
            return;
        }

        // Save data to localStorage
        const registrationData = { firstName, lastName, email, password };
        localStorage.setItem('registrationData', JSON.stringify(registrationData));

        // Reset form fields and show success message
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setAcceptedTerms(false);
        // alert('Registration successful!');
    };


    return (
        // JSX for the form will go here
        <div>
            <h2>Registration</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <span className="error">{nameError}</span>
            <br />
            <input
                type="text"
                placeholder="Username"
                value={userName}
                onChange={(e) => setuserName(e.target.value)}
            />
            <span className="error">{usernameError}</span>
            <br />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <span className="error">{emailError}</span>
            <br />
            <input
                type="number"
                placeholder="mobile"
                value={mobile}
                onChange={(e) => setmobile(e.target.value)}
            />
            <span className="error">{mobileError}</span>


            {/* ... other fields and error spans */}
            <br />
            <label>
                <input
                    type="checkbox"
                    checked={acceptedTerms}
                    onChange={() => setAcceptedTerms(!acceptedTerms)}
                />
                Accept Terms and Conditions
            </label>
            <span className="error">{termsError}</span>
            <br />
            <button onClick={handleRegistration}>Register</button>
            <br />
            <div>
                <p>
                    By clicking on Sign up. you agree to Superapp <a href="" style={{ color: "rgba(114, 219, 115, 1)" }}>Terms and Conditions of Use</a>
                </p>
                <p>
                    To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <a href="https://github.com/arishsaifi/privacy-policy" target='_blank' style={{ color: "rgba(114, 219, 115, 1)" }}>Privacy Policy</a>
                </p>
            </div>
        </div>
    );
}

export default Test;
