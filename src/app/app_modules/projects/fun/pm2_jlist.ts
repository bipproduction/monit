'use server'
import { MODEL_PM2 } from '@/models/pm2'
import { execSync } from 'child_process'
export async function fun_pm2_jslist() {
    const s: MODEL_PM2[] = JSON.parse(execSync('pm2 jlist').toString())
    return s
}