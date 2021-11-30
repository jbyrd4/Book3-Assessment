import { getChildren } from "./database.js"

const children = getChildren()

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li id="children--${child.id}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;
    if (itemClicked.id.startsWith("children")) {
        const [, kidId] = itemClicked.id.split("--")

        for (const child of children) {
            if (child.id === parseInt(kidId)) {
                window.alert(`${child.name}'s wish is to ${child.wish}`)
            }
        }    
    }
})

