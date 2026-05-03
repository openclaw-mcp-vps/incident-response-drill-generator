import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Incident Response Drill Generator',
  description: 'Generate realistic incident response practice scenarios for your DevOps team. Custom scenarios based on your tech stack with automated scoring.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c14ca4c1-1bb9-4ad5-ac13-359e31cfcb7d"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
