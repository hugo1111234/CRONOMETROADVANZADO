input.onButtonPressed(Button.A, function () {
    start = true
})
input.onButtonPressed(Button.AB, function () {
    tiempo = 10
})
input.onButtonPressed(Button.B, function () {
    start = false
})
let start = false
let tiempo = 0
tiempo = 10
basic.forever(function () {
    if (start) {
        if (tiempo > 0) {
            tiempo += -1
            basic.showNumber(tiempo)
            basic.pause(1000)
        } else {
            music.play(music.tonePlayable(277, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
    }
})
