/**
 * Handle AJAX submit of contact form
 * Contact me for access to the FormZen form service
 */
const submitButton = document.querySelector(".contact-form-submit-button") as HTMLButtonElement;
const submitButtonLoadingSpinner = document.querySelector("#contact-form-submit-button-spinner") as HTMLDivElement;

function setLoadingState(isLoading: boolean) {
  if (isLoading) {
    submitButton.setAttribute("disabled", "");
    submitButtonLoadingSpinner.style.display = "block";
  } else {
    submitButton.removeAttribute("disabled");
    submitButtonLoadingSpinner.style.display = "none";
  }
}

async function submitForm(formValues: any) {
  const formData = new URLSearchParams();
    formData.append("entry.362478081", formValues.name);
    formData.append("entry.1184204116", formValues.email);
    formData.append("entry.1722462727", formValues.subject);
    formData.append("entry.1787664102", formValues.message);
  const res = await fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLSeGrY5LEil8j2GtPS4d3WFt0LyvJnszIUlIzSbOUtkgS4fI2g/formResponse", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: formData.toString()
  });

  if (!res.ok) {
    throw new Error(`Error submitting form: ${res.statusText}`);
  }
  
  return await res;
}

export function handleContactFormSubmit() {
  const contactForm = document.querySelector("#contact-form") as HTMLFormElement;
  const successMessage = document.querySelector(".contact-form-message-success") as HTMLDivElement;
  const errorMessage = document.querySelector(".contact-form-message-error") as HTMLDivElement;

  if (contactForm) {
    contactForm.addEventListener("submit", async function(event) {
      event.preventDefault();
      const formData = new FormData(contactForm);
      const formValues = Object.fromEntries(formData);

      // Reset any existing messages on new submit
      successMessage.style.display = "none";
      errorMessage.style.display = "none";

      setLoadingState(true);

      try {
        const res = submitForm(formValues);

        if (res){
          successMessage.style.display = "block";
          contactForm.reset();
        } else {
          errorMessage.style.display = "block";
        }
      } catch (error) {
        errorMessage.style.display = "block";
      } finally {
        setLoadingState(false);
      }
    });
  }
}

handleContactFormSubmit();