import './css/globals.scss'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="https://cdn.icon-icons.com/icons2/2232/PNG/512/youtube_logo_icon_134601.png" />
      <title> Youtube mp3 </title>
      <body>{children}</body>
    </html>
  )
}
