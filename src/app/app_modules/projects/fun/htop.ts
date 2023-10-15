'use server'

import { exec } from "child_process"
const html = require('ansi-html')

function iteratorToStream(iterator: any) {
    return new ReadableStream({
        async pull(controller) {
            const { value, done } = await iterator.next()
            if (done) {
                controller.close()
            } else {
                controller.enqueue(value)
            }
        },
    })
}

async function* makeIterator() {
    const { stdout, stderr } = exec('htop');

    if (stdout) {
        for await (const chunk of stdout!) {
            yield chunk;
            // await new Promise(r => setTimeout(r, 5000))
        }
    }
}

export async function fun_htop() {
    const stream = iteratorToStream(makeIterator())
    return stream
}