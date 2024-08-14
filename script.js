// external script
document.getElementById('Form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let hasError = false;

    // Name validation
    const name = document.getElementById('name').value;
    const nameError = document.getElementById('nameError');
    if (name.trim() === '') {
        nameError.textContent = 'Name is required';
        nameError.style.display = 'block';
        hasError = true;
    } else {
        nameError.style.display = 'none';
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Please enter a valid email';
        emailError.style.display = 'block';
        hasError = true;
    } else {
        emailError.style.display = 'none';
    }

    // Subject validation
    const subject = document.getElementById('subject').value;
    const subjectError = document.getElementById('subjectError');
    if (subject.trim() === '') {
        subjectError.textContent = 'Subject is required';
        subjectError.style.display = 'block';
        hasError = true;
    } else {
        subjectError.style.display = 'none';
    }

    // If no error, submit the form 
    if (!hasError) {
        alert('Form submitted successfully!');
        document.getElementById('Form').reset();
    }
});
