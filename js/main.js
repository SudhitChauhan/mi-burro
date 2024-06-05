$(function () {

    // $('#mainnavigationBar').load('header.html');
    // $('#footer').load('footer.html');

})

function togglecustModal(data) {
    let modalId = `.${data}`
    $(modalId).toggleClass('mochidden');
}