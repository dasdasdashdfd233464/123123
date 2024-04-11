let A = 0
let AB = 0
input.onButtonPressed(Button.A, function () {
    A += A + 1
    basic.showNumber(A)
})
input.onButtonPressed(Button.AB, function () {
    AB += 0
    basic.showNumber(A)
})
input.onButtonPressed(Button.B, function () {
    A += A - 1
    basic.showNumber(A)
})
