function sendEmail() {
    var formData = $('#contactForm').serialize();

    $.ajax({
        type: 'POST',
        url: 'sendEmail.php', // Reemplaza 'tu_script_php.php' con la ruta correcta a tu script PHP
        data: formData,
        dataType: 'json',
        success: function(response) {
            $('#message .toast-body').text(response.message);
            $('#message').toast('show');
        },
        error: function(error) {
            console.log(error);
        }
    });
}
