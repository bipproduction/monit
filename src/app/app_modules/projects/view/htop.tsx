'use client'

import { useShallowEffect } from "@mantine/hooks"
import { useState } from "react"
import { Box, Text } from "@mantine/core"
const html = require('ansi-html')
import { AnsiUp } from 'ansi_up'
const AnsiToHtml = require('ansi-to-html');

export default function ViewHtop() {
    const [data, setData] = useState("")
    const ansi = new AnsiUp()
    const converter = new AnsiToHtml();

    useShallowEffect(() => {
        fetch('/api/htop').then(async (response: any) => {

            response.body.pipeTo(new WritableStream({
                write: (chunk) => {
                    const buffer = Buffer.from(new Uint8Array(chunk));
                    setData(buffer.toString())
                },
            }));
        })


    }, [])

    return <>
        {/* {JSON.stringify(data)} */}
        <Box c={"white"}>
            <pre>
                <code dangerouslySetInnerHTML={{ __html: converter.toHtml(data) }} />
            </pre>
        </Box>
    </>
}