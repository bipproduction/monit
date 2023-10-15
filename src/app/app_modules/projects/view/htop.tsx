'use client'

import { useShallowEffect } from "@mantine/hooks"
import { useState } from "react"
import { Box, Button, Text } from "@mantine/core"
const html = require('ansi-html')
import { AnsiUp } from 'ansi_up'
import { useAtom } from "jotai"
import { _val_htop } from "../../val/htop"
const AnsiToHtml = require('ansi-to-html');

export default function ViewHtop() {

    const ansi = new AnsiUp()
    const converter = new AnsiToHtml();
    const [htop, setHtop] = useAtom(_val_htop)

    return <>
        <Box c={"white"}>
            <pre>
                <code dangerouslySetInnerHTML={{ __html: converter.toHtml(htop) }} />
            </pre>
        </Box>
    </>
}