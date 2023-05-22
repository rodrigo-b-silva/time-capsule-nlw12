import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  console.log('chamei')
  const redirectURL = new URL('/', request.url)
  return NextResponse.redirect(redirectURL, {
    headers: {
      'Set-Cookie': `token=; Path=/; max-age=0;`,
    },
  })
}
