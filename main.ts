input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.East)
    Coordenada_X += 1
    basic.showNumber(Coordenada_X)
    basic.pause(200)
})
function Validar_Coordenadas () {
    if (Coordenada_X <= 4 && Coordenada_Y <= 4) {
        Coordenadas = game.createSprite(Coordenada_X, Coordenada_Y)
        return true
    } else {
        return false
    }
}
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.South)
    Coordenada_Y += 1
    basic.showNumber(Coordenada_Y)
    basic.pause(200)
})
let Coordenadas: game.LedSprite = null
let Coordenada_Y = 0
let Coordenada_X = 0
Coordenada_X = 0
Coordenada_Y = 0
let Vuelos = 0
basic.forever(function () {
    if (!(Validar_Coordenadas())) {
        basic.showIcon(IconNames.No)
    }
    if (Coordenada_X == 4 || Coordenada_Y == 4) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . # . #
            . # . # .
            . . # . .
            `)
        music.playMelody("- - E B F F - - ", 120)
    }
})
