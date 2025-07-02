"use client";

import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="border-b bg-white/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Heariffy</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button variant="ghost">Log In</Button>
              </Link>
              <Link href="/signup">
                <Button>Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            AI-Powered
            <span className="block text-blue-600">Audio Analysis</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-600">
            Upload any audio file and watch our advanced CNN model analyze and
            classify sounds in real-time with beautiful visualizations.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/signup">
              <Button size="lg" className="px-8 py-3 text-lg">
                Get Started Free
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                Try Demo Now
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🎵 <span>Real-time Analysis</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Upload WAV files and get instant AI-powered audio classification
                with confidence scores and detailed visualizations.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🧠 <span>CNN Visualization</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                See exactly how our neural network processes your audio with
                interactive feature maps and layer visualizations.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                📊 <span>50+ Sound Classes</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Recognize everything from animal sounds to mechanical noises
                with our ESC-50 trained model.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Demo Preview */}
        <div className="mt-20">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
            See It In Action
          </h2>
          <div className="mx-auto max-w-4xl">
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8">
                <div className="flex aspect-video items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-purple-100">
                  <div className="text-center">
                    <div className="mb-4 text-6xl">🎵</div>
                    <h3 className="mb-2 text-2xl font-semibold text-gray-800">
                      Interactive Audio Visualizer
                    </h3>
                    <p className="mb-6 text-gray-600">
                      Upload an audio file to see real-time CNN analysis
                    </p>
                    <Link href="/">
                      <Button size="lg">Try It Now →</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-20">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
            How It Works
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <span className="text-2xl">📤</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Upload Audio
              </h3>
              <p className="text-gray-600">
                Upload any WAV file from your device - music, speech, nature
                sounds, anything!
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                AI Analysis
              </h3>
              <p className="text-gray-600">
                Our CNN model processes the audio and extracts meaningful
                features in seconds.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                View Results
              </h3>
              <p className="text-gray-600">
                Get predictions, confidence scores, and beautiful neural network
                visualizations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 border-t bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="mb-2 text-2xl font-bold text-gray-900">Heariffy</h3>
            <p className="text-gray-600">
              Advanced audio analysis powered by artificial intelligence
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <Link href="/">
                <Button variant="ghost">Try Demo</Button>
              </Link>
              <Link href="/signup">
                <Button variant="ghost">Sign Up</Button>
              </Link>
              <Link href="/login">
                <Button variant="ghost">Log In</Button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
