export async function createAccount(payload: {
    firstName: string;
    lastName: string;
    emailAddress: string;
    password: string;
    confirmPassword: string;
}): Promise<void> {
    try {
        const response = await fetch('http://localhost:8000/api/create-account', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error('Failed to create account');
        }

        // Handle successful account creation (e.g., redirect or show a success message)
    } catch (error) {
        console.error('Error creating account:', error);
        throw error; // Re-throw the error for further handling if needed
    }
}
