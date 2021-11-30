import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li id="star--${celebrity.id}">${celebrity.name}</li>`
    }

    html += "</ol>"
    return html
}

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target
    if (itemClicked.id.startsWith("star")) {
        const [,starId] = itemClicked.id.split("--")

        for (const celeb of celebrities) {
            if (celeb.id === parseInt(starId)) {
                window.alert(`${celeb.name} is a ${celeb.sport} star`)
            }
        }
    }
})