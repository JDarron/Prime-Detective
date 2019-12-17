$(document).ready(function () {
    const instance = M.Modal.getInstance($('.modal').modal())
    const form = $('#number-form')
    const modal = $('#modal')
    const modalTxt = $('#modal-txt')
    const modalFooter = $('.modal-footer')


    form.submit(function (e) {
        e.preventDefault()

        const number = $('#number').val()
        this.reset()

        $.ajax({
            url: '/detect',
            type: 'POST',
            data: {
                number: number
            },

            success: function (res) {
                if (res.prime) {
                    modalTxt.text('Guilty of being a prime')
                    modal.removeClass('red')
                    modal.addClass('green')
                    modalFooter.css('background-color', '#e8f5e9')
                } else {
                    modalTxt.text('Inocent. Not a prime')
                    modal.removeClass('green')
                    modal.addClass('red')
                    modalFooter.css('background-color', '#ffebee')
                }

                instance.open()
            },

            error: function (err) {
                console.error(err)
            }
        })
    })
})