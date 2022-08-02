const usernameInput = document.getElementById('usernameInput');
const passwordInput = document.getElementById('passwordInput');
const signUpBtn = document.getElementById('signUpBtn');
const signoutBtn = document.getElementById('signoutBtn');


signoutBtn?.addEventListener('click', async () => {
    try {
        const response = await fetch('/api/signout', {
            method: 'POST',
        });

        await response.json();
        window.location.href = '/';
    } catch (error) {
        alert(error);
    }
});


signUpBtn?.addEventListener('click', async (event) => {
    event.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

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
        const response = await fetch('/api/signup', {
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

