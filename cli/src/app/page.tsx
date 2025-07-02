"use client";

import Link from "next/link";
import { SignInButton, SignUpButton, UserButton, useAuth } from "@clerk/nextjs";
import { Button } from "~/components/ui/button";
import { Domine } from "next/font/google";
import { Dancing_Script } from "next/font/google";
import { useState, useEffect } from "react";
import Image from "next/image";

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
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Continuous animated frequency bars
  function AnimatedBars() {
    const BAR_COUNT = 100;
    const [heights, setHeights] = useState<number[]>(() =>
      Array.from({ length: BAR_COUNT }, () => Math.random()),
    );

    useEffect(() => {
      const id = setInterval(() => {
        setHeights(Array.from({ length: BAR_COUNT }, () => Math.random()));
      }, 400);
      return () => clearInterval(id);
    }, []);

    return (
      <div className="flex h-24 items-end justify-center space-x-0.5">
        {heights.map((h, i) => (
          <div
            key={i}
            className="rounded-sm bg-white/70 transition-all duration-400 ease-linear"
            style={{ height: `${20 + h * 80}%`, width: "2px" }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen">
        {/* Default transparent navbar visible at top */}
        <div className="absolute top-6 left-1/2 z-10 flex w-[60%] max-w-2xl -translate-x-1/2 items-center justify-between rounded-2xl border border-transparent bg-transparent px-2 py-1 backdrop-blur-md">
          {/* Logo */}
          <Image
            src="/aud.png"
            alt="Heariffy logo"
            width={80}
            height={80}
            priority
            className="h-10 w-10 rounded-full object-cover"
          />

          {/* Auth Buttons */}
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <div className="flex items-center space-x-3">
              <SignInButton mode="modal">
                <Button
                  variant="ghost"
                  size="sm"
                  className="font-light text-white/70 hover:bg-transparent hover:text-gray-300"
                >
                  Log In
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button
                  variant="ghost"
                  size="sm"
                  className="font-light text-white/70 hover:bg-transparent hover:text-gray-300"
                >
                  Sign Up
                </Button>
              </SignUpButton>
            </div>
          )}
        </div>

        {/* Sticky navbar that fades in on scroll */}
        {showSticky && (
          <div className="fixed top-4 left-1/2 z-20 w-[60%] max-w-2xl -translate-x-1/2 rounded-2xl border border-transparent bg-transparent px-2 py-1 backdrop-blur-md transition-all">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Image
                src="/aud.png"
                alt="Heariffy logo"
                width={80}
                height={80}
                priority
                className="h-10 w-10 rounded-full object-cover"
              />

              {/* Auth Buttons */}
              {isSignedIn ? (
                <UserButton afterSignOutUrl="/" />
              ) : (
                <div className="flex items-center space-x-3">
                  <SignInButton mode="modal">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="font-light text-white/70 hover:bg-transparent hover:text-gray-300"
                    >
                      Log In
                    </Button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="font-light text-white/70 hover:bg-transparent hover:text-gray-300"
                    >
                      Sign Up
                    </Button>
                  </SignUpButton>
                </div>
              )}
            </div>
          </div>
        )}

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
              className={`mb-6 text-lg text-gray-900 italic md:text-xl ${dancing.className}`}
            >
              Real-time sound classification powered by deep convolutional
              neural networks.
            </p>

            {isSignedIn ? (
              <Link href="/app">
                <Button
                  size="lg"
                  className="rounded-full border border-white bg-transparent px-8 py-3 text-white transition hover:bg-white/10"
                >
                  Open Heariffy
                </Button>
              </Link>
            ) : (
              <SignUpButton mode="modal">
                <Button
                  size="lg"
                  className="rounded-full border border-white bg-transparent px-8 py-3 text-white transition hover:bg-white/10"
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

          {/* Bottom animated frequency bars */}
          <div className="w-full max-w-sm rounded-xl bg-white/5 p-4 backdrop-blur-sm">
            <AnimatedBars />
          </div>
        </div>
      </div>
    </div>
  );
}
