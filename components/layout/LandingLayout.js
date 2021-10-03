import * as React from "react";

export default function LandingLayout({children}) {
  return (
    <main style={{
      flexGrow: 1
    }}>
      {children}
    </main>
  )
}