input.onButtonPressed(Button.A, function () {
    A_NUMBER += 1
    LIST.unshift(A_NUMBER)
    if (0 >= 0) {
        A_NUMBER = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (A_NUMBER))
    A_NUMBER = 0
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    B_NUMBER += 1
    LIST.unshift(B_NUMBER)
    if (B_NUMBER >= 0) {
        B_NUMBER = 0
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("" + (B_NUMBER))
    B_NUMBER = 0
    basic.clearScreen()
})
let LIST: number[] = []
let B_NUMBER: number = []
let A_NUMBER: number = []
A_NUMBER = 0
B_NUMBER = 0
LIST = [0]
let RIGHT = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
basic.forever(function () {
    if (LIST.length != RIGHT.length) {
        if (LIST == RIGHT) {
            music.playMelody("C D E F G A B C5 ", 120)
            LIST = [0]
        }
    }
})
