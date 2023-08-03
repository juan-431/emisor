input.onButtonPressed(Button.A, function () {
    radio.sendString("Abrir")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Verde") {
        basic.showIcon(IconNames.Yes)
    } else if (receivedString == "Rojo") {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Cerrar")
})
radio.setGroup(13)
