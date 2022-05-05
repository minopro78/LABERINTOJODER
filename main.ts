let angulo = 0
let Distanciaaa = 0
basic.clearScreen()
basic.forever(function () {
    Distanciaaa = randint(0, 1)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    if (Distanciaaa == 0) {
        if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 15) {
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
            maqueen.motorStop(maqueen.Motors.All)
            basic.pause(500)
            music.playTone(262, music.beat(BeatFraction.Half))
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
            basic.pause(1000)
            music.playMelody("C5 C C5 C C5 C C5 C ", 500)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
            basic.pause(500)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        }
    } else if (Distanciaaa == 1) {
        if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 15) {
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
            maqueen.motorStop(maqueen.Motors.All)
            basic.pause(500)
            music.playTone(262, music.beat(BeatFraction.Half))
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
            basic.pause(1000)
            music.playMelody("C5 C C5 C C5 C C5 C ", 500)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
            basic.pause(500)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        }
    }
})
basic.forever(function () {
    angulo = input.compassHeading()
    if (angulo >= 315 && angulo < 360 || angulo >= 0 && angulo < 45) {
        basic.showString("N")
    } else if (angulo >= 45 && angulo < 135) {
        basic.showString("E")
    } else if (angulo >= 135 && angulo < 225) {
        basic.showString("S")
    } else if (angulo >= 225 && angulo < 315) {
        basic.showString("O")
    }
})
