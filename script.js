document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("emailInput").value;

    emailjs.send("service_cil6rdh", "template_5odhll9", {
        to_email: email,  
        to_name: "Germán Sánchez",  
        link_regalo: "https://tu-regalo.com"  
    })
    .then(function(response) {
        document.getElementById("message").innerText = "¡Correo enviado con éxito! Revisa tu bandeja de entrada.";
    }, function(error) {
        document.getElementById("message").innerText = "Hubo un error, intenta de nuevo.";
        console.error("Error al enviar el correo:", error);
    });
});