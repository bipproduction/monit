import { fun_htop } from '@/app/app_modules/projects/fun/htop';

export async function GET() {
    const stream = await fun_htop()

    return new Response(stream)
}   