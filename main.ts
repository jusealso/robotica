let A = 0
for (let index = 0; index < 2; index++) {
    music.playMelody("C D E F G A B C5 ", 120)
    led.plot(2, 2)
}
basic.forever(function () {
    if (A == 0) {
        basic.showNumber(input.rotation(Rotation.Pitch))
        A += 1
    }
    if (A == 1) {
        basic.showIcon(IconNames.SmallSquare)
        A = 0
    }
})
