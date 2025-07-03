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
    // Use more bars to fill the container width completely
    const [barCount, setBarCount] = useState(150);
    const [heights, setHeights] = useState<number[]>(() =>
      Array.from({ length: barCount }, () => Math.random()),
    );

    useEffect(() => {
      // Adjust bar count based on screen size to fill the width
      const updateBarCount = () => {
        const width = window.innerWidth;
        // Calculate bars needed to fill width: each bar is 2px + 2px gap = 4px total
        const containerWidth = Math.min(width * 0.9, 800); // approximate container width
        const newCount = Math.floor(containerWidth / 4);
        setBarCount(newCount);
        setHeights(Array.from({ length: newCount }, () => Math.random()));
      };

      updateBarCount();
      window.addEventListener("resize", updateBarCount);
      return () => window.removeEventListener("resize", updateBarCount);
    }, []);

    useEffect(() => {
      const id = setInterval(() => {
        setHeights(Array.from({ length: barCount }, () => Math.random()));
      }, 800); // Slower refresh for better mobile performance
      return () => clearInterval(id);
    }, [barCount]);

    return (
      <div className="flex h-24 items-end justify-center space-x-0.5 overflow-hidden">
        {heights.map((h, i) => (
          <div
            key={i}
            className="rounded-sm bg-white/70 transition-all duration-300 ease-in-out"
            style={{ height: `${20 + h * 80}%`, width: "2px" }}
          />
        ))}
      </div>
    );
  }

  return (
    <>
      {/* Snowfall keyframes style */}
      <style jsx global>{`
        @keyframes snow-fall {
          0% {
            transform: translateY(-10px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(110vh);
            opacity: 0;
          }
        }
      `}</style>

      <div className="base-sm relative min-h-screen overflow-hidden">
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

        {/* Snow overlay */}
        <Snowfall />

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="relative z-10 min-h-screen">
          {/* Default transparent navbar visible at top */}
          <div className="absolute top-6 left-1/2 z-10 flex w-[60%] max-w-2xl -translate-x-1/2 items-center justify-between rounded-2xl bg-white/10 px-2 py-1 backdrop-blur-md">
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
                    className="font-light text-gray-800 hover:bg-transparent hover:text-gray-600"
                  >
                    Log In
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="font-light text-gray-800 hover:bg-transparent hover:text-gray-600"
                  >
                    Sign Up
                  </Button>
                </SignUpButton>
              </div>
            )}
          </div>

          {/* Sticky navbar that fades in on scroll */}
          {showSticky && (
            <div className="fixed top-4 left-1/2 z-20 w-[60%] max-w-2xl -translate-x-1/2 rounded-2xl bg-white/10 px-2 py-1 backdrop-blur-md transition-all">
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
                        className="font-light text-gray-800 hover:bg-transparent hover:text-gray-600"
                      >
                        Log In
                      </Button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="font-light text-gray-800 hover:bg-transparent hover:text-gray-600"
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
              className={`mt-50 mb-8 text-center text-7xl tracking-tight text-white md:text-8xl ${dancing.className} italic`}
            >
              Analyze audio with AI
            </h1>

            {/* Subtitle and CTA */}
            <div className="mb-16 text-center">
              <p
                className={`mb-6 text-xl text-white italic md:text-2xl ${dancing.className}`}
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
                    className="rounded-full border-white bg-white/10 text-white transition"
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
            <div className="w-full rounded-xl bg-white/5 p-4 backdrop-blur-sm sm:px-8">
              <AnimatedBars />
            </div>
          </div>
        </div>
      </div>
      {/* White showcase section */}
      <section className="bg-white py-24 text-center">
        <h2
          className={`text-4xl font-light text-gray-500 italic md:text-5xl ${dancing.className}`}
        >
          Heariffy is for Listening
        </h2>
        <p className="mt-4 text-gray-600 md:text-lg">
          A partner in every audio workflow
        </p>

        {/* Indicator controls */}
        <ShowcaseControls />

        <p className="mt-10 text-gray-700">
          <span className="font-medium text-gray-900">
            An extra set of ears
          </span>{" "}
          to always hit your quality bar
        </p>

        <div className="mx-auto mt-12 w-full max-w-sm overflow-hidden rounded-3xl shadow-lg sm:max-w-lg md:max-w-xl lg:max-w-3xl">
          <div className="relative bg-[url('/hg.jpg')] bg-cover bg-center">
            <Slideshow />
            {/* bottom fade */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
          </div>
        </div>
      </section>
    </>
  );
}

// Snowfall component
function Snowfall() {
  const flakes = Array.from({ length: 10 });
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {flakes.map((_, i) => (
        <span
          key={i}
          className="absolute block h-1 w-1 rounded-full bg-white"
          style={{
            left: `${Math.random() * 100}%`,
            animation: `snow-fall ${8 + Math.random() * 4}s linear infinite`,
            animationDelay: `${Math.random() * 8}s`,
          }}
        />
      ))}
    </div>
  );
}

// Slideshow cycles through two GIFs endlessly
function Slideshow() {
  const images = ["/ye.gif", "/ye1.gif"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      4000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-[300px] w-full sm:h-[380px] md:h-[450px]">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt="showcase"
          fill
          className={`object-contain transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
        />
      ))}

      {/* Controls */}
      <button
        onClick={() => setIndex((index - 1 + images.length) % images.length)}
        aria-label="Prev"
        className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-white/60 p-1 text-gray-700 hover:bg-white/90"
      >
        ‹
      </button>
      <button
        onClick={() => setIndex((index + 1) % images.length)}
        aria-label="Next"
        className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-white/60 p-1 text-gray-700 hover:bg-white/90"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-1">
        {images.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${i === index ? "bg-gray-800" : "bg-gray-400/50"}`}
          />
        ))}
      </div>
    </div>
  );
}

// controls component using slideshow state via context workaround
function ShowcaseControls() {
  const [index, setIndex] = useState(0);
  const images = ["/ye.gif", "/ye1.gif"];

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      4000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mt-8 flex items-center justify-center space-x-4">
      {/* Prev */}
      <button
        onClick={() => setIndex((index - 1 + images.length) % images.length)}
        aria-label="Prev"
        className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
      >
        ‹
      </button>

      {/* Dots */}
      <div className="flex items-center space-x-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={
              i === index
                ? "h-2 w-6 rounded-full bg-gray-900"
                : "h-2 w-2 rounded-full bg-gray-300"
            }
          />
        ))}
      </div>

      {/* Next */}
      <button
        onClick={() => setIndex((index + 1) % images.length)}
        aria-label="Next"
        className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
      >
        ›
      </button>
    </div>
  );
}
