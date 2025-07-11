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
        // Calculate bars needed to fill width: each bar is 1.5px + 2px gap = 3.5px total
        // Use a more generous calculation to ensure full coverage
        const containerWidth =
          width > 1024 ? width * 0.8 : width > 640 ? width * 0.85 : width * 0.9;
        const newCount = Math.floor(containerWidth / 2.5); // Adjusted for thinner bars
        setBarCount(Math.max(newCount, 150)); // Increased minimum for thinner bars
        setHeights(
          Array.from({ length: Math.max(newCount, 150) }, () => Math.random()),
        );
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
      <div className="flex h-16 items-end justify-center space-x-0.5 overflow-hidden">
        {heights.map((h, i) => (
          <div
            key={i}
            className="rounded-sm bg-white/70 transition-all duration-300 ease-in-out"
            style={{ height: `${15 + h * 60}%`, width: "1.5px" }}
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

      <div className="base-sm relative min-h-screen overflow-hidden rounded-b-3xl">
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

        {/* Soft bottom fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>

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
      <section className="relative overflow-hidden bg-[#FAF9F6] py-24 text-center">
        {/* Black Snow overlay */}
        <BlackSnowfall />

        {/* Top soft fade */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20"
          style={{
            background:
              "linear-gradient(to bottom, #FAF9F6 0%, transparent 100%)",
          }}
        ></div>

        {/* Bottom soft fade */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20"
          style={{
            background: "linear-gradient(to top, #FAF9F6 0%, transparent 100%)",
          }}
        ></div>

        {/* Dot grid background overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(0,0,0,0.25) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        {/* Vertical CTA */}
        <div className="pointer-events-none absolute top-1/2 left-4 z-20 -translate-y-1/2 md:left-8">
          <span
            className={`text-3xl font-medium tracking-tight text-amber-600 sm:text-4xl lg:text-5xl xl:text-6xl ${domine.className}`}
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Try the demo and hear the AI in action.
          </span>
        </div>

        <div className="relative z-20">
          <h2
            className={`text-6xl font-light text-amber-950 italic md:text-7xl ${dancing.className}`}
          >
            Heariffy is for Listening
          </h2>
          <p className="mt-4 text-gray-500 md:text-lg">
            A partner in every audio workflow
          </p>

          {/* Indicator controls */}
          <ShowcaseControls />

          <p className="mt-10 text-gray-500">
            <span className="font-medium text-gray-900">
              An extra set of ears
            </span>{" "}
            to always hit your quality bar
          </p>

          <div className="relative mx-auto mt-12 w-full max-w-sm overflow-hidden rounded-3xl shadow-lg sm:max-w-lg md:max-w-xl lg:max-w-3xl">
            <div className="relative bg-[url('/hg.jpg')] bg-cover bg-center">
              <Slideshow />
              {/* bottom fade */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Claims section */}
      <section className="bg-[#FAF9F6] py-24 text-center">
        <div className="grid grid-cols-1 overflow-hidden rounded-4xl lg:grid-cols-2">
          {/* Left side - White with content */}
          <div className="bg-white bg-[url('/whi.jpg')] bg-cover bg-center">
            <div className="max-w-xl px-4 py-12 lg:px-16 lg:py-16">
              <h2 className="mb-6 font-serif text-4xl leading-tight font-medium text-amber-950 lg:text-5xl">
                Deep learning meets sound
                <br />
                classify audio events with confidence
              </h2>

              <p
                className={`mb-8 text-2xl leading-normal font-normal text-amber-800 lg:text-3xl ${dancing.className}`}
              >
                Serverless GPU inference with lightning-fast response times.
              </p>
              <Button className="rounded-md bg-yellow-500 px-6 py-3 text-base font-medium text-black hover:bg-yellow-300">
                Get a Free Revenue Assessment
              </Button>
            </div>
          </div>

          {/* Right side - cd.png background with layered images - full width */}
          <div className="relative min-h-[500px] bg-[url('/cd.png')] bg-cover bg-center">
            {/* Image 1 - Top left area */}
            <div className="absolute top-6 left-8 w-64 rotate-2 rounded-2xl bg-white p-4 shadow-lg">
              <div className="mb-2 flex items-center">
                <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-100">
                  <span className="text-xs text-red-600">⚠</span>
                </div>
                <span className="text-xs font-medium text-gray-600">
                  Real-time audio classification
                </span>
              </div>

              <div className="h-16 w-full overflow-hidden rounded-lg">
                <Image
                  src="/1.png"
                  alt="Chart 1"
                  width={240}
                  height={64}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Image 2 - Top right area */}
            <div className="absolute top-4 right-12 w-72 -rotate-1 rounded-2xl bg-white p-4 shadow-lg">
              <div className="mb-2 flex items-center">
                <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-100">
                  <span className="text-xs text-red-600">📍</span>
                </div>
                <span className="text-xs font-medium text-gray-600">
                  Real-time audio classification
                </span>
                <Button
                  size="sm"
                  className="ml-auto bg-yellow-400 px-2 py-1 text-xs font-semibold text-black hover:bg-yellow-500"
                >
                  Hand off to Joyful →
                </Button>
              </div>

              <p className="mb-2 text-xs text-gray-600">
                in claims that have not been denied by payers and need immediate
                follow-up.
              </p>
              <div className="h-16 w-full overflow-hidden rounded-lg">
                <Image
                  src="/2.png"
                  alt="Chart 2"
                  width={280}
                  height={64}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Image 3 - Bottom center area */}
            <div className="absolute bottom-8 left-1/2 w-56 -translate-x-1/2 rotate-1 rounded-2xl bg-white p-4 shadow-lg">
              <div className="mb-2 flex items-center">
                <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-100">
                  <span className="text-xs text-red-600">⚠</span>
                </div>
                <span className="text-xs font-medium text-gray-600">
                  Real-time audio classification
                </span>
              </div>

              <div className="h-16 w-full overflow-hidden rounded-lg">
                <Image
                  src="/3.png"
                  alt="Chart 3"
                  width={224}
                  height={64}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics section */}
      <section className="bg-[#FAF9F6] py-24">
        <div className="mx-auto max-w-7xl px-4 lg:grid lg:grid-cols-[200px_1fr] lg:gap-16">
          {/* Illustration */}
          <div className="mb-12 flex items-center justify-center lg:mb-0 lg:items-start">
            <Image
              src="/dl.png"
              alt="Girl with binoculars"
              width={160}
              height={280}
              className="h-48 w-auto object-contain sm:h-56 lg:h-64"
            />
          </div>

          {/* Content */}
          <div>
            <h2
              className={`mb-12 max-w-md text-xl leading-snug sm:text-2xl lg:text-3xl ${domine.className} text-amber-950`}
            >
              Real-time sound classification powered by deep convolutional
              neural networks.
            </h2>
            <div className="space-y-10 divide-y divide-gray-900/60">
              {[
                {
                  value: "15%",
                  label:
                    "From waveform to prediction a full-stack audio recognition system.",
                },
                {
                  value: "65%",
                  label:
                    "Deep learning meets sound classify audio events with confidence.",
                },
                {
                  value: "10–15%",
                  label:
                    "Converts audio to spectrogram images for CNN-based classification.",
                },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col pt-0 sm:flex-row sm:items-baseline sm:gap-6"
                >
                  <span
                    className={`text-3xl font-semibold sm:text-4xl lg:text-5xl ${domine.className} text-amber-950 sm:min-w-[110px]`}
                  >
                    {stat.value}
                  </span>
                  <p className="mt-3 text-base font-light text-gray-500 sm:mt-0 sm:text-lg">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA + Footer Links section */}
      <section className="bg-[#F5F3EE] py-16">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
            {/* Left column */}
            <div className="lg:col-span-1 lg:border-r lg:border-gray-300 lg:pr-8">
              {/* Top buttons - side by side */}
              <div className="mb-8 flex flex-wrap gap-3">
                <button className="min-w-[48%] flex-1 rounded-full bg-amber-950 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-[#3A4A1A] sm:flex-none sm:px-6 sm:py-2.5 sm:text-sm">
                  Let&apos;s Chat
                </button>
                <button className="min-w-[48%] flex-1 rounded-full border border-gray-400 px-4 py-2 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-50 sm:flex-none sm:px-6 sm:py-2.5 sm:text-sm">
                  Sign In
                </button>
              </div>

              {/* Headline */}
              <h2
                className={`max-w-xs text-xl leading-tight font-normal text-amber-950 ${dancing.className}`}
              >
                Displays real-time classification results with confidence
                scores.
              </h2>
            </div>

            {/* Right column links */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-3 lg:pl-8">
              <div>
                <h3 className="mb-6 text-sm font-medium text-gray-500">
                  What We Do
                </h3>
                <ul className="space-y-3">
                  {[
                    "Revenue Advisor",
                    "Ongoing Claims Follow‑up",
                    "Historical A/R Recovery",
                    "Bank Reconciliation",
                  ].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm text-gray-700 hover:text-gray-900"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-6 text-sm font-medium text-gray-500">
                  Who We Work With
                </h3>
                <ul className="space-y-3">
                  {[
                    "Healthcare Practices",
                    "Billing Companies",
                    "Digital Health Organizations",
                    "Practice Management Groups",
                  ].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm text-gray-700 hover:text-gray-900"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-6 text-sm font-medium text-gray-500">
                  Company
                </h3>
                <ul className="space-y-3">
                  {["Who We Are", "Careers", "Contact Us", "Resources"].map(
                    (item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="text-sm text-gray-700 hover:text-gray-900"
                        >
                          {item}
                        </a>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF9F6] py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h1
            className={`text-center text-8xl leading-tight text-amber-950 md:text-9xl lg:text-8xl xl:text-9xl ${dancing.className}`}
            style={{
              fontWeight: 400,
              opacity: 0.9,
              lineHeight: 0.9,
              margin: 0,
              WebkitMaskImage:
                "linear-gradient(to top, transparent 0%, black 45%, black 100%)",
              maskImage:
                "linear-gradient(to top, transparent 0%, black 45%, black 100%)",
            }}
          >
            Deep Audio
          </h1>
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

// Black Snowfall component
function BlackSnowfall() {
  const flakes = Array.from({ length: 15 });
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {flakes.map((_, i) => (
        <span
          key={i}
          className="absolute block h-0.5 w-0.5 rounded-full bg-black"
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
