import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'InterviewRec — Record & Analyze Technical Interviews',
  description: 'Record coding interviews with automatic transcription, code analysis, and bias-free candidate evaluation scoring for engineering hiring teams.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b9fc8376-1889-4ad1-870b-d37023b98236"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
