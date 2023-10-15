const { exec } = require("child_process")
const html = require('ansi-html')
const { fetch } = require('cross-fetch')
async function main() {
    const child = exec('htop')
    let d = "";
    child.stdout.on('data', async (data) => {
        d += data
        await new Promise(r => setTimeout(r, 5000))
        fetch('https://io.wibudev.com/io', {
            method: "POST",
            body: JSON.stringify({
                id: "monit",
                path: "/htop",
                data: html(d)
            }),
            headers: {
                "Content-type": "application/json"
            }
        }).then(v => v.text()).then((v) => {
            d = ""
        })
    })
}

main()
