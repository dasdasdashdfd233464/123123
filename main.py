A = 0
B = 0
AB = 0

def on_button_pressed_a():
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    global A, B, AB
    A = 0
    B = 0
    AB = 0
basic.forever(on_forever)
