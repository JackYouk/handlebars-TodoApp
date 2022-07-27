const usernameInput = document.getElementById('usernameInput');
const passwordInput = document.getElementById('passwordInput');
const signUpBtn = document.getElementById('signUpBtn');

signUpBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

    if(username.trim().length === 0){
        alert('Please enter a valid username');
        return;
    }
    if(password.trim().length < 6){
        alert('Please enter a valid password. Password must be 6 characters long.');
        return;
    }

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
        window.location.href = '/users';
    } catch (error) {
        alert(error);
    }
});

