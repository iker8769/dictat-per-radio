radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    basic.pause(5000)
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Yes)
        radio.sendString("ok")
    } else {
        if (input.buttonIsPressed(Button.B)) {
            basic.showIcon(IconNames.No)
            radio.sendString("error")
        }
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    radio.sendString("cavar")
    radio.sendString("havia")
    radio.sendString("aleshores")
    radio.sendString("haber")
})
radio.setGroup(1)
