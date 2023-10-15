'use client'
import { useShallowEffect } from "@mantine/hooks"
import { useAtom } from "jotai"
import io from 'socket.io-client'
import { _val_htop } from "../val/htop"
const socket = io("https://io.wibudev.com")


export default function WidgetIo() {
    const [htop, setHtop] = useAtom(_val_htop)
    useShallowEffect(() => {
        socket.on('io', (data) => {
            if (data && data.id === "monit" && data.path === "/htop") {
                setHtop(data.data)
            }
        })
    }, [])
    // data

    return <></>
}