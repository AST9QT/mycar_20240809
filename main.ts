/**
 * LED
 */
let moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
moveMotorZIP.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Red))
let led_bri = 255
while (led_bri > 0) {
    basic.pause(100)
    moveMotorZIP.setBrightness(led_bri)
    moveMotorZIP.show()
    led_bri += -20
}
moveMotorZIP.setBrightness(0)
moveMotorZIP.show()
basic.forever(function () {
	
})
