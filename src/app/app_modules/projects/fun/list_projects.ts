'use server'
import fs from 'fs'

export async function fun_list_project() {
    let ls = fs.readdirSync('./../')
    ls = ls.filter((v) => v !== ".DS_Store")
    return ls
}