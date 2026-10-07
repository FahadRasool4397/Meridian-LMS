import React from 'react'

const Loading = () => {
  return (
    <div className="fixed top-17 bottom-0 left-0 right-0 z-40 flex items-center justify-center overflow-hidden bg-linear-to-b from-cyan-50 via-white to-white">
      {/* Background glow */}
      <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-200/30 blur-3xl animate-pulse" />

      <div className="relative flex flex-col items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 animate-[fadeIn_0.6s_ease-out]">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 shadow-lg shadow-blue-600/25">
            <span className="text-2xl text-white">⚡</span>
          </div>

          <span className="text-3xl font-bold tracking-tight text-slate-900">
            Edemy
          </span>
        </div>

        {/* Loading text */}
        <p className="mt-8 text-sm font-medium text-slate-500">
          Preparing your learning experience
        </p>

        {/* Animated loader */}
        <div className="mt-5 h-1.5 w-56 overflow-hidden rounded-full bg-slate-200">
          <div className="h-full w-1/2 rounded-full bg-blue-600 animate-[loading_1.4s_ease-in-out_infinite]" />
        </div>

        {/* Dots */}
        <div className="mt-5 flex gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-bounce [animation-delay:-0.3s]" />
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-bounce [animation-delay:-0.15s]" />
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-bounce" />
        </div>
      </div>

      {/* Bottom branding */}
      <div className="absolute bottom-8 text-xs text-slate-400">
        Learn. Grow. Succeed.
      </div>

      <style>{`
        @keyframes loading {
          0% {
            transform: translateX(-120%);
          }
          50% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(220%);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Loading
