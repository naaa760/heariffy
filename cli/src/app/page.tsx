"use client";

import Link from "next/link";
import { SignInButton, SignUpButton, UserButton, useAuth } from "@clerk/nextjs";
import { Button } from "~/components/ui/button";
import { Domine } from "next/font/google";
import { Dancing_Script } from "next/font/google";

const domine = Domine({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-headline",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-subtitle",
});

export default function LandingPage() {
  const { isSignedIn } = useAuth();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover blur-sm"
      >
        <source src="/vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen">
        {/* Transparent rounded navbar */}
        <div className="absolute top-6 left-1/2 flex w-[90%] max-w-5xl -translate-x-1/2 items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-6 py-3 shadow-sm backdrop-blur-md">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
              <span className="text-sm">🎵</span>
            </div>
            <span className="text-lg font-semibold text-white">Heariffy</span>
          </div>

          {/* Auth Buttons */}
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <div className="flex items-center space-x-3">
              <SignInButton mode="modal">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white/80 hover:text-white"
                >
                  Log In
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white/80 hover:text-white"
                >
                  Sign Up
                </Button>
              </SignUpButton>
            </div>
          )}
        </div>

        {/* Main content */}
        <div className="flex min-h-screen flex-col items-center justify-center px-4">
          {/* Main headline */}
          <h1
            className={`mt-50 mb-8 text-center text-6xl tracking-tight text-white ${domine.className} font-normal`}
          >
            Analyze audio with AI
          </h1>

          {/* Subtitle and CTA */}
          <div className="mb-16 text-center">
            <p
              className={`mb-6 text-lg text-black italic md:text-xl ${dancing.className}`}
            >
              Real-time sound classification powered by deep convolutional
              neural networks.
            </p>

            {isSignedIn ? (
              <Link href="/app">
                <Button
                  size="lg"
                  className="rounded-full bg-white px-8 py-3 text-black hover:bg-white/90"
                >
                  Open Heariffy
                </Button>
              </Link>
            ) : (
              <SignUpButton mode="modal">
                <Button
                  size="lg"
                  className="rounded-full bg-white px-8 py-3 text-black hover:bg-white/90"
                >
                  Download Heariffy
                </Button>
              </SignUpButton>
            )}
          </div>

          {/* Secondary CTA */}
          <div className="mb-16">
            <p className="text-center text-white/70">
              Want to try a demo?{" "}
              <Link href="/app" className="text-white hover:underline">
                Try it now →
              </Link>
            </p>
          </div>

          {/* Bottom interactive area */}
          <div className="w-full max-w-2xl">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <div className="flex items-center space-x-4">
                <div className="rounded-lg bg-white/20 p-3">
                  <svg
                    className="h-5 w-5 text-white/80"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-white/80">
                    Upload audio files or paste URLs
                  </p>
                </div>
                <button className="rounded-full bg-white p-2 text-black hover:bg-white/90">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
