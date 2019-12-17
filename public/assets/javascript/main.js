$(document).ready(function () {
    const instance = M.Modal.getInstance($('.modal').modal())


    $("#number-form").submit(function (e) {
        e.preventDefault()

        const number = $('#number').val()
        this.reset()

        $.ajax({
            url: "/detect",
            type: "POST",
            data: {
                number: number
            },

            success: function (res) {
                if (res.prime) {
                    $('#modal-msg').text('Guilty of being a prime')
                    $('#modal').removeClass('red')
                    $('#modal').addClass('green')
                } else {
                    $('#modal-msg').text('Inocent. Not a prime')
                    $('#modal').removeClass('green')
                    $('#modal').addClass('red')
                }

                instance.open()
            },

            error: function (err) {
                console.error(err)
            }
        })
    });
});