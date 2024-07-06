document.addEventListener('DOMContentLoaded', function () {
    const yesButton = document.getElementById('yesButton');
    const datePicker = document.getElementById('datepicker');
    const container = document.querySelector('.container');

    if (yesButton) {
        yesButton.addEventListener('click', function () {

            yesButton.style.display = 'none';

            datePicker.style.display = 'block';

            datePicker.style.margin = '0 auto';

            flatpickr("#datepicker", {
                enableTime: true,
                dateFormat: "Y-m-d H:i",
                onClose: function (selectedDates, dateStr, instance) {
                    
                    container.innerHTML = `
                        <h1 class="header_text">Thank You!</h1>
                        <p>Your date is confirmed for ${dateStr}</p>
                    `;
                }
            });
        });
    }

    function moveButton() {
        var x = Math.random() * (window.innerWidth - yesButton.offsetWidth);
        var y = Math.random() * (window.innerHeight - yesButton.offsetHeight);
        yesButton.style.left = `${x}px`;
        yesButton.style.top = `${y}px`;
    }
});
