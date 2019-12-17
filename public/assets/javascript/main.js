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
                    $('.modal-msg').text('Guilty of being a prime')
                    $('.modal').addClass('green lighten-5')
                } else {
                    $('.modal-msg').text('Inocent. Not a prime')
                    $('.modal').addClass('red lighten-5')
                }

                instance.open()
            },

            error: function (err) {
                console.error(err)
            }
        })
    });
});