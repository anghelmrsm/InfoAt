document.addEventListener("DOMContentLoaded", function () {
    const newsletterForm = document.getElementById("newsletter");
    const emailInput = newsletterForm.querySelector("input");
    
    newsletterForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Previne reîncărcarea paginii

        const emailValue = emailInput.value.trim();

        if (emailValue === "") {
            alert("Introduceți o adresă de email validă!");
            return;
        }

        // Salvare în Local Storage
        localStorage.setItem("subscribedEmail", emailValue);

        // Afișează un mesaj de confirmare
        alert("Te-ai abonat cu succes!");

        // Șterge input-ul după abonare
        emailInput.value = "";
    });
});
