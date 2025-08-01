import { useState } from 'react'
import { createAccount } from '../api/auth'

function validateFields(firstName: string, lastName: string, emailAddress: string, password: string, confirmPassword: string ): string | null {
    if (!firstName || !lastName || !emailAddress || !password || !confirmPassword) {
        return "Please fill in all fields.";
    }
    if (password.length < 8) {
        return "Password must be at least 8 characters.";
    }
    if (password !== confirmPassword) {
        return "Passwords do not match.";
    }
    return null;
}

export default function CreateAccountForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationError = validateFields(
            firstName,
            lastName,
            emailAddress,
            password,
            confirmPassword
        );
        if (validationError) {
            setError(validationError);
            return;
        }
        setError(""); 
        const payload = {
            firstName,
            lastName,
            emailAddress,
            password,
            confirmPassword
        };
        console.log(payload);
        try {
            const result = await createAccount(payload);
            console.log("Account created successfully:", result);
            // Handle successful account creation (e.g., redirect or show a success message)
        } catch (error) {
            console.error("Error creating account:", error);
            setError("Failed to create account. Please try again.");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            /><br />
            <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            /><br />
            <input
                type="text"
                placeholder="Email Address"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
            /><br />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            /><br />
            <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            /><br />
            {error && <div style={{ color: "red" }}>{error}</div>}
            <button type="submit">Create Account</button>
        </form>
    )
}