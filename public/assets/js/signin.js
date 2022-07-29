const signinBtn = document.getElementById('signinBtn');
const signinUsernameInput = document.getElementById('signinUsernameInput');
const signinPasswordInput = document.getElementById('signinPasswordInput');

signinBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const username = signinUsernameInput.value;
    const password = signinPasswordInput.value;

    // checks to make sure username is not empty
    if(username.trim().length === 0){
        alert('Please enter a valid username');
        return;
    }
    // checks that password is greater than 6 characters
    if(password.trim().length < 6){
        alert('Please enter a valid password. Password must be 6 characters long.');
        return;
    }

    // posts the user input to the /api/signup endpoint
    try {
        const response = await fetch('/api/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
            })
        });

        await response.json();
        // change user window to the /users endpoint
        window.location.href = '/todos';
    } catch (error) {
        alert(error);
    }
});