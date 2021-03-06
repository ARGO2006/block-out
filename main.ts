namespace SpriteKind {
    export const block = SpriteKind.create()
}
function Game () {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    paddle.setPosition(79, 100)
    paddle.setStayInScreen(true)
    controller.moveSprite(paddle, 150, 0)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 4 . . . . . . . 
        . . . . . 2 2 2 2 4 . . . . . . 
        . . . . 2 2 b b b 2 4 . . . . . 
        . . . . b b b 1 b b b . . . . . 
        . . . . d 1 b b b 1 1 . . . . . 
        . . . . . d 1 1 1 1 . . . . . . 
        . . . . . . d 1 1 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, paddle, 60, -60)
    paddle_speed = 100
    projectile.setFlag(SpriteFlag.DestroyOnWall, false)
    projectile.setBounceOnWall(true)
    for (let index = 0; index <= 9; index++) {
        for (let index2 = 0; index2 <= 2; index2++) {
            x = index * 18
            if (index2 % 2 == 1) {
                x = index * 18 + 8
            }
            tilePick = randint(0, 2)
            if (tilePick == 0) {
                tile = sprites.create(img`
                    f f f f f f f f f f f f f f f f 
                    f f f 2 2 2 2 2 2 2 2 2 2 f f f 
                    f f 2 2 2 2 2 2 2 f f 2 2 2 f f 
                    f 2 2 2 2 2 2 2 2 2 f f 2 2 2 f 
                    f 2 2 2 2 2 2 2 2 2 f f 2 2 2 f 
                    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
                    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
                    f 2 f 2 2 2 2 f f 2 2 2 2 2 2 f 
                    f 2 f f f 2 2 f f 2 2 2 2 2 2 f 
                    f 2 2 f f 2 2 2 2 2 2 2 2 2 2 f 
                    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
                    f 2 2 2 2 2 2 2 2 2 2 f f 2 2 f 
                    f 2 2 2 2 2 2 2 2 2 2 f f 2 2 f 
                    f f 2 2 2 2 2 2 2 2 f f 2 2 f f 
                    f f f 2 2 2 2 2 2 2 2 2 2 f f f 
                    f f f f f f f f f f f f f f f f 
                    `, SpriteKind.block)
            } else if (tilePick == 1) {
                tile = sprites.create(img`
                    f f b b b b b b b b b b b b f f 
                    f f f f f f f f f f f f f f f f 
                    b f b b b b b b b b b b b b f b 
                    b f b f f f f f f f f f f b f b 
                    b f b f b b b b b b b b f b f b 
                    b f b f b f f f f f f b f b f b 
                    b f b f b f c c c c f b f b f b 
                    b f b f b f c f f c f b f b f b 
                    b f b f b f c f f c f b f b f b 
                    b f b f b f c c c c f b f b f b 
                    b f b f b f f f f f f b f b f b 
                    b f b f b b b b b b b b f b f b 
                    b f b f f f f f f f f f f b f b 
                    b f b b b b b b b b b b b b f b 
                    f f f f f f f f f f f f f f f f 
                    f f b b b b b b b b b b b b f f 
                    `, SpriteKind.block)
            } else {
                tile = sprites.create(img`
                    f f f 4 4 4 4 4 4 4 4 4 4 f f f 
                    f f 5 5 5 5 5 5 5 5 5 5 5 5 f f 
                    f 5 4 4 4 4 4 f f 4 4 4 4 4 5 f 
                    4 5 4 4 4 4 4 f f 4 4 4 4 4 5 4 
                    4 5 4 4 4 4 4 f f 4 4 4 4 4 5 4 
                    4 5 4 4 4 4 4 f f 4 4 4 4 4 5 4 
                    4 5 4 f f f f f f f f f f 4 5 4 
                    4 5 4 f f f f f f f f f f 4 5 4 
                    4 5 4 f f f f f f f f f f 4 5 4 
                    4 5 4 4 4 4 4 f f 4 4 4 4 4 5 4 
                    4 5 4 4 4 4 4 f f 4 4 4 4 4 5 4 
                    4 5 4 4 4 4 4 f f 4 4 4 4 4 5 4 
                    4 5 4 4 4 4 4 f f 4 4 4 4 4 5 4 
                    f 5 4 4 4 4 4 4 4 4 4 4 4 4 5 f 
                    f f 5 5 5 5 5 5 5 5 5 5 5 5 f f 
                    f f f 4 4 4 4 4 4 4 4 4 4 f f f 
                    `, SpriteKind.block)
            }
            tile.setPosition(x, index2 * 18 + 20)
        }
    }
    info.setScore(1)
    scene.setBackgroundColor(13)
    direction = 1
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.setVelocity(sprite.vx, -1 * sprite.vy)
})
function getPos (sprite: Sprite, otherSprite: Sprite) {
    if (sprite.x < otherSprite.x - 8 || sprite.x > otherSprite.x + 8) {
        direction = 1
    } else {
        direction = 0
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.block, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    getPos(sprite, otherSprite)
    if (direction == 1) {
        sprite.setVelocity(-1 * sprite.vx, sprite.vy)
    } else {
        sprite.setVelocity(sprite.vx, -1 * sprite.vy)
    }
    otherSprite.destroy()
})
let direction = 0
let tile: Sprite = null
let tilePick = 0
let x = 0
let paddle_speed = 0
let projectile: Sprite = null
let mySprite: Sprite = null
let paddle: Sprite = null
scene.setBackgroundImage(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `)
paddle = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ....bbbbbbbbbbbbbbbbbbbbbb......
    ....bbbbbbbbbbbbbbbbbbbbbb......
    ....bbbbbbbbbbbbbbbbbbbbbb......
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
Game()
forever(function () {
    if (projectile.bottom > 119) {
        game.over(false, effects.slash)
    }
    if (info.score() == 30) {
        game.over(true, effects.bubbles)
    }
})
game.onUpdateInterval(10000, function () {
    for (let index = 0; index < 3; index++) {
        projectile.vx += 20
        projectile.vy += 20
        mySprite.say("Difficulty +", 500)
    }
})
