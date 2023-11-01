import './globals.css'

export const metadata = {
  title: 'Sliq Project',
  description: 'Created by Darshan Kalola'
}

export default function RootLayout ({ children }: { children: React.ReactNode }): any {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Karla&family=Merriweather:wght@300&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="h-screen flex items-center justify-center">
            {children}
        </div>
      </body>
    </html>
  )
}
