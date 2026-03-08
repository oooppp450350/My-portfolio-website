"use client"

import { useEffect, useRef } from "react"

export function Particles() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        let isDestroyed = false

        // Inject a script tag to load the ES module to avoid Webpack WebURL import issues
        const scriptId = "tubes-cursor-script"
        if (!document.getElementById(scriptId)) {
            const script = document.createElement("script")
            script.type = "module"
            script.id = scriptId
            script.innerHTML = `
                import TubesCursor from "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js";
                window.TubesCursorInit = TubesCursor;
                window.dispatchEvent(new Event('TubesCursorLoaded'));
            `
            document.head.appendChild(script)
        }

        const initCursor = () => {
            if (isDestroyed || !(window as any).TubesCursorInit) return
            const TubesCursor = (window as any).TubesCursorInit

            try {
                // Initialize the tubes cursor with specified colors (Cyan, Blue, White)
                const app = TubesCursor(canvas, {
                    tubes: {
                        colors: ["#AAE7EB", "#00FFFF", "#0055FF", "#FFFFFF"],
                        lights: {
                            intensity: 200,
                            colors: ["#AAE7EB", "#00FFFF", "#FFFFFF", "#0000FF"]
                        }
                    }
                })
            } catch (e) {
                console.error(e)
            }
        }

        if ((window as any).TubesCursorInit) {
            initCursor()
        } else {
            window.addEventListener('TubesCursorLoaded', initCursor)
        }

        return () => {
            isDestroyed = true
            window.removeEventListener('TubesCursorLoaded', initCursor)
        }
    }, [])

    return (
        <>
            <style>{`
                @keyframes pulse-opacity {
                    0% { opacity: 0.1; }
                    30% { opacity: 0.8; }
                    70% { opacity: 0.3; }
                    100% { opacity: 0.1; }
                }
                .animate-pulse-opacity {
                    animation: pulse-opacity 6s ease-in-out infinite;
                }
            `}</style>
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0 pointer-events-none animate-pulse-opacity"
            />
        </>
    )
}
