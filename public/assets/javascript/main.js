$(document).ready(function () {
    $("#number-form").submit(function (e) {
        e.preventDefault()

        const number = $('#number').val()
        // $('#number').val() = null

        $.ajax({
            url: "/detect",
            type: "POST",
            data: {
                number: number
            },
            success: function (res) {
                console.log(res)
            },
            error: function (err) {
                console.error(err)
            }
        })
    });
});