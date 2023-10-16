const { exec } = require("child_process")
const html = require('ansi-html')
const { fetch } = require('cross-fetch')
async function main() {
    // const child = exec('htop')
    // child.stdout.on('data', async (data) => {
    //     fetch('https://io.wibudev.com/io', {
    //         method: "POST",
    //         body: JSON.stringify({
    //             id: "monit",
    //             path: "/htop",
    //             data: html(data)
    //         }),
    //         headers: {
    //             "Content-type": "application/json"
    //         }
    //     })

    // })
}

main()
