// JavaScript Validation for Online Banking Registration Form

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const customerName = document.getElementById("customerName").value.trim();
    const accountNumber = document.getElementById("accountNumber").value.trim();
    const panNumber = document.getElementById("panNumber").value.trim();
    const emailId = document.getElementById("emailId").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const agreeTerms = document.getElementById("agreeTerms").checked;

    // Reset all error messages
    resetAllErrors();

    // Validate all fields
    let isValid = true;

    // 1. Validate Customer Name (Only alphabets and spaces allowed)
    if (!validateCustomerName(customerName)) {
      showError("nameError", "customerName");
      isValid = false;
    }

    // 2. Validate Account Number (Exactly 12 digits)
    if (!validateAccountNumber(accountNumber)) {
      showError("accountError", "accountNumber");
      isValid = false;
    }

    // 3. Validate PAN Number (Standard PAN format)
    if (!validatePAN(panNumber)) {
      showError("panError", "panNumber");
      isValid = false;
    }

    // 4. Validate Email ID (Valid format)
    if (!validateEmail(emailId)) {
      showError("emailError", "emailId");
      isValid = false;
    }

    // 5. Validate Passwords (Match and at least 8 characters)
    if (!validatePassword(password)) {
      showError("passwordError", "password");
      isValid = false;
    }

    if (!validateConfirmPassword(password, confirmPassword)) {
      showError("confirmError", "confirmPassword");
      isValid = false;
    }

    // Check if user agrees to terms
    if (!agreeTerms) {
      alert("Please agree to the Terms and Conditions");
      isValid = false;
    }

    // If all validations pass
    if (isValid) {
      document.getElementById("successMessage").classList.add("show");
      console.log("Form submitted successfully!");
      console.log({
        name: customerName,
        accountNumber: accountNumber,
        panNumber: panNumber,
        email: emailId,
      });
      // Reset form after 2 seconds
      setTimeout(() => {
        document.getElementById("registrationForm").reset();
        document.getElementById("successMessage").classList.remove("show");
      }, 2000);
    }
  });

/**
 * 1. Validate Customer Name
 * Only alphabets and spaces are allowed
 */
function validateCustomerName(name) {
  if (name === "") {
    return false;
  }
  // Regex: Only alphabets (a-z, A-Z) and spaces
  const nameRegex = /^[a-zA-Z\s]+$/;
  return nameRegex.test(name);
}

/**
 * 2. Validate Account Number
 * Should contain exactly 12 digits
 */
function validateAccountNumber(accountNumber) {
  if (accountNumber === "") {
    return false;
  }
  // Check if it's exactly 12 digits
  const accountRegex = /^\d{12}$/;
  return accountRegex.test(accountNumber);
}

/**
 * 3. Validate PAN Number
 * Standard PAN format: 5 letters, 4 digits, 1 letter, 1 digit
 * Example: AAAPA1234A
 */
function validatePAN(panNumber) {
  if (panNumber === "") {
    return false;
  }
  // PAN format: AAAPA1234A
  // First 5 characters: letters (A-Z)
  // Next 4 characters: digits (0-9)
  // 10th character: letter (A-Z)
  // Last character: digit or letter
  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9A-Z]{1}$/;
  return panRegex.test(panNumber.toUpperCase());
}

/**
 * 4. Validate Email ID
 * Must be in valid format
 */
function validateEmail(email) {
  if (email === "") {
    return false;
  }
  // Standard email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * 5. Validate Password
 * Must contain at least 8 characters
 */
function validatePassword(password) {
  if (password === "") {
    return false;
  }
  return password.length >= 8;
}

/**
 * 6. Validate Confirm Password
 * Both passwords should match and contain at least 8 characters
 */
function validateConfirmPassword(password, confirmPassword) {
  if (confirmPassword === "") {
    return false;
  }
  return confirmPassword === password && confirmPassword.length >= 8;
}

/**
 * Show error message and add invalid class to input
 */
function showError(errorElementId, inputElementId) {
  const errorElement = document.getElementById(errorElementId);
  const inputElement = document.getElementById(inputElementId);

  if (errorElement) {
    errorElement.classList.add("show");
  }
  if (inputElement) {
    inputElement.classList.add("is-invalid");
  }
}

/**
 * Reset all error messages
 */
function resetAllErrors() {
  const errorMessages = document.querySelectorAll(".error-message");
  const inputFields = document.querySelectorAll(
    'input[type="text"], input[type="email"], input[type="password"]',
  );

  errorMessages.forEach((error) => {
    error.classList.remove("show");
  });

  inputFields.forEach((input) => {
    input.classList.remove("is-invalid");
  });
}

/**
 * Real-time validation on input change
 */
document.getElementById("customerName").addEventListener("change", function () {
  if (this.value.trim() !== "") {
    if (validateCustomerName(this.value)) {
      this.classList.remove("is-invalid");
      document.getElementById("nameError").classList.remove("show");
    }
  }
});

document
  .getElementById("accountNumber")
  .addEventListener("change", function () {
    if (this.value.trim() !== "") {
      if (validateAccountNumber(this.value)) {
        this.classList.remove("is-invalid");
        document.getElementById("accountError").classList.remove("show");
      }
    }
  });

document.getElementById("panNumber").addEventListener("change", function () {
  if (this.value.trim() !== "") {
    if (validatePAN(this.value)) {
      this.classList.remove("is-invalid");
      document.getElementById("panError").classList.remove("show");
    }
  }
});

document.getElementById("emailId").addEventListener("change", function () {
  if (this.value.trim() !== "") {
    if (validateEmail(this.value)) {
      this.classList.remove("is-invalid");
      document.getElementById("emailError").classList.remove("show");
    }
  }
});

document.getElementById("password").addEventListener("change", function () {
  if (this.value !== "") {
    if (validatePassword(this.value)) {
      this.classList.remove("is-invalid");
      document.getElementById("passwordError").classList.remove("show");
    }
  }
});

document
  .getElementById("confirmPassword")
  .addEventListener("change", function () {
    const password = document.getElementById("password").value;
    if (this.value !== "") {
      if (validateConfirmPassword(password, this.value)) {
        this.classList.remove("is-invalid");
        document.getElementById("confirmError").classList.remove("show");
      }
    }
  });
