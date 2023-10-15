const { execSync, exec } = require('child_process')
const fs = require('fs')
const html = require('ansi-html')

const c = exec('htop')
c.stdout.on("data", async (data) => {

    setTimeout(() => {
        console.log(data)
    }, 10000)
})

// const c = execSync('pm2 logs')
// fs.writeFileSync("x.txt", c)