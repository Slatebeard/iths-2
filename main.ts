scene.setBackgroundColor(10)
tiles.setCurrentTilemap(tilemap`level2`)
game.onUpdate(function () {
    let player1: Sprite = null
    controller.moveSprite(player1)
    scene.cameraFollowSprite(player1)
})
