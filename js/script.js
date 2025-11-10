function init(){
    var entryButton = document.getElementById('entrybutton');

    function showAlert(){
        var textbox = document.getElementById('entryinput');
        document.getElementById('textoutput').innerHTML = textbox.value;
        alert("Maritzha Olaez: " + textbox.value);
    }

    entryButton.addEventListener('click', showAlert);
}

window.addEventListener('load', init);
