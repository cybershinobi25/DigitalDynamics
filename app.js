var roleForm = document.getElementById("role-form");
var loginForm = document.getElementById("login-form");
var signupForm = document.getElementById("signup-form");
var patientDetailsForm = document.getElementById("patient-details-form");
var doctorDashboard = document.getElementById("doctor-dashboard");
var doctorDiagnosisForm = document.getElementById("doctor-diagnosis-form");
var role;

function showLoginForm() {
    loginForm.classList.remove("form-hidden");
    signupForm.classList.add("form-hidden");
    patientDetailsForm.classList.add("form-hidden");
    doctorDashboard.classList.add("form-hidden");
    doctorDiagnosisForm.classList.add("form-hidden");
}

function showSignupForm() {
    loginForm.classList.add("form-hidden");
    signupForm.classList.remove("form-hidden");
    patientDetailsForm.classList.add("form-hidden");
    doctorDashboard.classList.add("form-hidden");
    doctorDiagnosisForm.classList.add("form-hidden");
}

function showPatientDetailsForm() {
    loginForm.classList.add("form-hidden");
    signupForm.classList.add("form-hidden");
    patientDetailsForm.classList.remove("form-hidden");
    doctorDashboard.classList.add("form-hidden");
    doctorDiagnosisForm.classList.add("form-hidden");
}

function showDoctorDashboard() {
    loginForm.classList.add("form-hidden");
    signupForm.classList.add("form-hidden");
    patientDetailsForm.classList.add("form-hidden");
    doctorDashboard.classList.remove("form-hidden");
    doctorDiagnosisForm.classList.add("form-hidden");
}

function showDoctorDiagnosisForm() {
    loginForm.classList.add("form-hidden");
    signupForm.classList.add("form-hidden");
    patientDetailsForm.classList.add("form-hidden");
    doctorDashboard.classList.add("form-hidden");
    doctorDiagnosisForm.classList.remove("form-hidden");
}

roleForm.addEventListener("submit", function(event) {
    event.preventDefault();
    role = document.getElementById("role").value;
    if (role === "patient") {
        showLoginForm();
    } else {
        // Add logic for doctor login if needed
        showLoginForm();
    }
});

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simulate user authentication (replace with server-side logic)
    if (authenticateUser(username, password)) {
        if (role === "patient") {
            showPatientDetailsForm();
        } else {
            fetchAndDisplayPatientsForDoctor(username);
            showDoctorDashboard();
        }
    } else {
        alert("Invalid credentials. Please try again.");
    }
});

signupForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var signupRole = document.getElementById("signup-role").value;
    var signupName = document.getElementById("signup-name").value;
    var signupEmail = document.getElementById("signup-email").value;
    var signupPassword = document.getElementById("signup-password").value;

    // Simulate user registration (replace with server-side logic)
    if (submitUser(signupRole, signupName, signupEmail, signupPassword)) {
        showPatientDetailsForm();
    } else {
        alert("Registration failed. Please try again.");
    }
});

patientDetailsForm.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Patient details submitted successfully!");
    showDoctorDashboard();
});

function fetchAndDisplayPatientsForDoctor(doctorUsername) {
    // Fetch and display logic here (replace with your actual implementation)
    console.log("Fetching and displaying patients for doctor: " + doctorUsername);
}

function authenticateUser(username, password) {
    return username.trim() !== "" && password.trim() !== "";
}

function submitUser(role, name, email, password) {
    return role.trim() !== "" && name.trim() !== "" && email.trim() !== "" && password.trim() !== "";
}

document.getElementById("diagnose-patient").addEventListener("click", function() {
    showDoctorDiagnosisForm();
});

doctorDiagnosisForm.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Diagnosis submitted successfully!");
    showDoctorDashboard();
});
