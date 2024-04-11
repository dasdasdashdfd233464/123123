input.onButtonPressed(Button.A, function () {
    A += 1
    basic.showNumber(A)
})
input.onButtonPressed(Button.AB, function () {
    A = 0
    basic.showNumber(A)
})
input.onButtonPressed(Button.B, function () {
    A += -1
    basic.showNumber(A)
})
let A = 0
A = 0
basic.forever(function () {
    if (A >= 9) {
        A = 0
        basic.showNumber(A)
    }
})
