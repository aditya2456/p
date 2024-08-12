document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    let isValid = true;

    // Name validation
    let name = document.getElementById('name').value;
    let nameError = document.getElementById('nameError');
    if (name === '') {
        nameError.textContent = '*Name is required';
        isValid = false;
    } else {
       nameError.textContent = '';
    }

    // Email validation
    let email = document.getElementById('email').value;
    let emailError = document.getElementById('emailError');
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === '') {
        emailError.textContent = '*Email is required';
        isValid = false;
    } else if (!email.match(emailPattern)) {
        emailError.textContent = '*Invalid email format';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Address validation
    let address = document.getElementById('address').value;
    let addressError = document.getElementById('addressError');
    if (address === '') {
        addressError.textContent = '*Address is required';
        isValid = false;
    } else {
       addressError.textContent = '';
    }

    // Dropdown validation
    let dropdown = document.getElementById('dropdown').value;
    let dropdownError = document.getElementById('dropdownError');
    if (dropdown === '') {
        dropdownError.textContent = '*Please select an option';
        isValid = false;
    } else {
       dropdownError.textContent = '';
    }

    // Phone validation
    let phone = document.getElementById('phone').value;
    let phoneError = document.getElementById('phoneError');
    let phonePattern = /^\d{10}$/;
    if(phone === '') {
        phoneError.textContent = '*Phone number is required';
        isValid = false;
    } else if (!phone.match(phonePattern)) {
        phoneError.textContent = '*Phone number must be 10-digits';
        isValid = false;
    } else {
        phoneError.textContent = '';
    }

    // Drop validation
    let drop = document.getElementById('drop').value;
    let dropError = document.getElementById('dropError');
    if (drop === '') {
        dropError.textContent = '*Please select an option';
        isValid = false;
    } else {
       dropError.textContent = '';
    }

    // Age validation
    let age = document.getElementById('age').value;
    let ageError = document.getElementById('ageError');
    if(age === '') {
        ageError.textContent = '*Age is required';
        isValid = false;
    }
    else if(age<=18) {
        ageError.textContent = '*Age must be greater than 18';
        isValid = false;
    } else {
        ageError.textContent = '';
    }

    // Health issues validation
    let health = document.getElementById('health').value;
    let healthError = document.getElementById('healthError');
    if (health === '') {
        healthError.textContent = '*Please describe any health issues';
        isValid = false;
    } else {
       healthError.textContent = '';
    }

    // Interest validation
    let interest = document.getElementsByName('interest');
    let interestError = document.getElementById('interestError');
    let checked = false;
    for (let i = 0; i < interest.length; i++) {
        if (interest[i].checked) {
            checked = true;
            break;
        }
    }
    
    if (!checked) {
        interestError.textContent = 'Please select at least one option';
        isValid = false;
    } else {
        interestError.textContent = '';
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }
}