import { useEffect, useRef } from "react"
import { instagramPosts } from "../data/instagram"

interface InstagramEmbedProps {
  limit?: number
}

export default function InstagramEmbed({ limit = 9 }: InstagramEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const posts = instagramPosts.slice(0, limit)

  useEffect(() => {
    if (!containerRef.current) return

    // Load Instagram embed script
    const existingScript = document.querySelector(
      'script[src="https://www.instagram.com/embed.js"]',
    )
    if (!existingScript) {
      const script = document.createElement("script")
      script.src = "https://www.instagram.com/embed.js"
      script.async = true
      document.body.appendChild(script)
    } else {
      // Re-process embeds if script already exists
      const w = window as typeof window & {
        instgrm?: { Embeds?: { process: () => void } }
      }
      w.instgrm?.Embeds?.process()
    }
  }, [])

  if (posts.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-stone-400 mb-4">Nenhum post configurado ainda</p>
        <p className="text-sm text-stone-500">
          Adicione as URLs dos posts em{" "}
          <code className="bg-stone-200 px-2 py-1 rounded text-stone-700">
            src/data/instagram.ts
          </code>
        </p>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      // className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      className="grid grid-cols-1"
    >
      {posts.map((url) => (
        <div key={url} className="flex justify-center">
          <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink={url}
            data-instgrm-version="14"
            style={{
              background: "#FFF",
              border: 0,
              borderRadius: "3px",
              maxWidth: "540px",
              minWidth: "326px",
              padding: 0,
              width: "100%",
            }}
          />
        </div>
      ))}
    </div>
  )
}
