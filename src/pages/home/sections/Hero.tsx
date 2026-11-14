import { useEffect, useRef, useState } from 'react'

function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null)
  const [paused, setPaused] = useState(false)
  const [muted, setMuted] = useState(true)
  // Once the visitor pauses the video, don't start it again behind their back
  const userPaused = useRef(false)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    // React doesn't write `muted` into the HTML, and browsers only autoplay muted videos,
    // so set it directly before asking the video to play.
    video.muted = true
    video.defaultMuted = true
    video.setAttribute('muted', '')
    const play = () => {
      if (!userPaused.current) video.play().catch(() => {})
    }
    play()

    // Some browsers (e.g. phones in data-saver mode) still block autoplay until the
    // visitor first touches or scrolls the page, so try again then.
    const events = ['pointerdown', 'touchstart', 'scroll', 'keydown'] as const
    const stopListening = () => events.forEach((e) => window.removeEventListener(e, onInteract))
    const onInteract = () => {
      play()
      stopListening()
    }
    events.forEach((e) => window.addEventListener(e, onInteract, { passive: true }))
    const onVisible = () => {
      if (!document.hidden) play()
    }
    document.addEventListener('visibilitychange', onVisible)
    return () => {
      stopListening()
      document.removeEventListener('visibilitychange', onVisible)
    }
  }, [])

  const toggle = () => {
    const video = ref.current
    if (!video) return
    if (video.paused) {
      userPaused.current = false
      video.play().catch(() => {})
    } else {
      userPaused.current = true
      video.pause()
    }
  }

  // Browsers only autoplay muted, so sound is off until the visitor turns it on
  const toggleSound = () => {
    const video = ref.current
    if (!video) return
    video.muted = !video.muted
    setMuted(video.muted)
    if (!video.muted && video.paused) {
      userPaused.current = false
      video.play().catch(() => {})
    }
  }

  return (
    <>
      <video
        ref={ref}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/campus-tour-poster.jpg"
        aria-label="Education Point Classes campus tour"
        onPlay={() => setPaused(false)}
        onPause={() => setPaused(true)}
      >
        {/* Sharper 1080p file for tablets and computers, lighter 720p file for phones */}
        <source src="/campus-tour-1080.mp4" type="video/mp4" media="(min-width: 768px)" />
        <source src="/campus-tour.mp4" type="video/mp4" />
      </video>
      <button
        type="button"
        className="video-toggle"
        onClick={toggle}
        aria-label={paused ? 'Play video' : 'Pause video'}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
          {paused ? (
            <path d="M8 5v14l11-7z" fill="currentColor" />
          ) : (
            <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" fill="currentColor" />
          )}
        </svg>
      </button>
      <button
        type="button"
        className="video-sound"
        onClick={toggleSound}
        aria-label={muted ? 'Turn sound on' : 'Turn sound off'}
      >
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
          <path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor" />
          {muted ? (
            <path d="M16 9l5 6M21 9l-5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          ) : (
            <path
              d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          )}
        </svg>
      </button>
    </>
  )
}

export function Hero() {
  return (
    <section className="video-hero" id="top" aria-label="Campus video">
      {/* The full campus tour video, playing muted on a loop */}
      <HeroVideo />
    </section>
  )
}
