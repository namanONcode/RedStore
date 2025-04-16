<script>
  document.querySelector('.form-box').addEventListener('submit', async (e) => {
    e.preventDefault();

    const inputs = document.querySelectorAll('.form-box input');
    const username = inputs[0].value.trim(); // Full Name
    const email = inputs[1].value.trim();
    const phoneNumber = inputs[2].value.trim();
    const location = inputs[3].value.trim();
    const password = inputs[4].value;
    const confirmPassword = inputs[5].value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const payload = {
      username: username,
      phoneNumber: phoneNumber,
      email: email,
      location: location,
      password: password,
      roles: "User"
    };

    try {
      const res = await fetch('https://redstore.azurewebsites.net/khoj/public/create-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        const data = await res.json();
        alert("User created successfully!");
        console.log(data);
        // Optionally redirect to login page
        // window.location.href = "login.html";
      } else {
        const error = await res.json();
        alert("Error: " + (error.message || "Something went wrong."));
        console.error(error);
      }
    } catch (err) {
      alert("Network error. Please try again later.");
      console.error(err);
    }
  });
</script>
