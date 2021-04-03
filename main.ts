input.onButtonPressed(Button.A, function () {
    A_NUMBER += 1
    LIST.unshift(A_NUMBER)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (A_NUMBER))
    A_NUMBER = 0
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    B_NUMBER += 1
    LIST.unshift(B_NUMBER)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("" + (B_NUMBER))
    B_NUMBER = 0
    basic.clearScreen()
})
let index_array = 0
let entered_code_is_correct = false
let B_NUMBER = 0
let A_NUMBER = 0
let LIST: number[] = []
LIST = [0]
A_NUMBER = 0
B_NUMBER = 0
let RIGHT = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
basic.forever(function () {
    // Array equality conditional not working in microbit
    if (LIST.length == RIGHT.length) {
        entered_code_is_correct = true
        // scan array for equality
        index_array = 0
        while (index_array < RIGHT.length) {
            if (LIST[index_array] != RIGHT[index_array]) {
                entered_code_is_correct = false
                break;
            }
            index_array += 1
        }
        if (entered_code_is_correct == true) {
            music.playMelody("C D E F G A B C5 ", 120)
            LIST = [0]
            A_NUMBER = 0
            B_NUMBER = 0
        }
    }
})
