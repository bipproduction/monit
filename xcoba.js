const { execSync, exec } = require('child_process')
const fs = require('fs')
const html = require('ansi-html')

const c = exec('htop')
c.stdout.on("data", async(data, qa) => {

    fs.writeFileSync('x.txt', data, "utf-8")
})

// const c = execSync('pm2 logs')
// fs.writeFileSync("x.txt", c)