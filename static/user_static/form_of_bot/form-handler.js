document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('cooperation-form');
  const submitButton = document.getElementById('submit-button');
  const errorMessage = form.querySelector('.error-message');
  const sentMessage = form.querySelector('.sent-message');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Check submission limit
    const submissionLimit = localStorage.getItem('submissionLimit') || 0;
    const lastSubmissionTime = localStorage.getItem('lastSubmissionTime') || 0;
    const currentTime = Date.now();

    if (submissionLimit >= 2 && (currentTime - lastSubmissionTime) < 60000) {
      // Show error message
        console.log('Submission limit reached');
        console.log(errorMessage.style.display);
      errorMessage.textContent = 'You can only submit the form 2 times per minute.';
      errorMessage.style.display = 'block'; // Make error message visible
      sentMessage.style.display = 'none'; // Hide success message

      // Show alert message
      alert('You have reached the submission limit. Please try again after 1 minute.');

      // Disable submit button
      submitButton.disabled = true;

      // Re-enable button after 1 minute
      setTimeout(() => {
        submitButton.disabled = false;
        localStorage.setItem('submissionLimit', 0); // Reset limit
        errorMessage.style.display = 'none'; // Hide error message
      }, 60000);
      return;
    }

    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', form.action, true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.onload = function () {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        if (response.success) {
          // Clear form fields
          form.reset();

          // Show success message
          sentMessage.style.display = 'block';
          errorMessage.style.display = 'none';

          // Hide success message after 5 seconds
          setTimeout(() => {
            sentMessage.style.display = 'none';
          }, 5000);

          // Update submission limit and time
          localStorage.setItem('submissionLimit', Number(submissionLimit) + 1);
          localStorage.setItem('lastSubmissionTime', currentTime);

          // Disable button if limit reached
          if (Number(submissionLimit) + 1 >= 2) {
            submitButton.disabled = true;
            setTimeout(() => {
              submitButton.disabled = false;
              localStorage.setItem('submissionLimit', 0); // Reset limit after 1 minute
            }, 60000);
          }
        } else {
          errorMessage.textContent = response.error || 'Failed to send request';
          errorMessage.style.display = 'block'; // Show error message
          sentMessage.style.display = 'none';
        }
      } else {
        errorMessage.textContent = 'An error occurred while sending the request.';
        errorMessage.style.display = 'block'; // Show error message
        sentMessage.style.display = 'none';
      }
    };
    xhr.send(formData);
  });
});