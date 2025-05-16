document.getElementById("submit").onclick = function () {
  let payment = false;
  const paymentCheck = document.querySelector(
    'input[name="paymentType"]:checked'
  );
  if (paymentCheck) {
    payment = true;
  }

  let serviceCheck;
  let service;
  document.querySelectorAll('input[name="service"]').forEach((checkbox) => {
    if (checkbox.checked) {
      serviceCheck = true;
    }
  });
  if (serviceCheck) {
    service = true;
  }
  if (!serviceCheck) {
    service = false;
  }
  let termsCheck;
  let terms;
  document.querySelectorAll('input[name="terms"]').forEach((checkbox) => {
    if (checkbox.checked) {
      termsCheck = true;
    }
  });
  if (termsCheck) {
    terms = true;
  }
  if (!termsCheck) {
    terms = false;
  }

  const emailValue = document.getElementById("email").value.trim();
  const passwordValue = document.getElementById("password").value.trim();

  let emailPassword = true;

  if (emailValue === "") {
    emailPassword = false;
  }
  if (passwordValue === "") {
    emailPassword = false;
  }
  if (payment && service && terms && emailPassword === true) {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  } else {
    alert("Please fill all the fields 😉😉😉😉");
  }
};
