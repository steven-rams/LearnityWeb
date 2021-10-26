const text = document.querySelector(".text");
for (var i = 0; i <= 3; i++) {
    const blocks = document.createElement("div")
    blocks.classList.add("block")
    text.appendChild(blocks)
}

function generate() {


    anime({
        targets: ".block",
        translateX: function() {
            return anime.random(-700, 700)
        },
        translateY: function() {
            return anime.random(-700, 700)
        }
    })
}