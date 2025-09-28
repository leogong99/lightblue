'use client';

import { ThemeProvider, useTheme } from '../contexts/ThemeContext';
import { ZenMode, ZenCard, ZenButton, ZenHeading, ZenText } from '../components/themes/ZenMode';
import { RetroCard, RetroButton, RetroHeading, RetroText, RetroTerminal, RetroMatrix } from '../components/themes/RetroFuturistic';
import { BrutalCard, BrutalButton, BrutalHeading, BrutalText, BrutalCallout, BrutalStickyNote, BrutalSandbox } from '../components/themes/SoftBrutalism';

function ThemeDemo() {
  const { currentTheme } = useTheme();

  return (
    <ZenMode>
      <div className="min-h-screen p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Theme Showcase</h1>
            <p className="text-lg text-gray-600">Experience all three visual styles</p>
          </div>

          {/* Zen Mode Demo */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">🧘 Zen Mode - Clean & Modern</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ZenCard>
                <ZenHeading level={3} className="mb-3">Simplicity</ZenHeading>
                <ZenText>Clean lines, soft neutrals, subtle animations that don't distract from content.</ZenText>
                <div className="mt-4">
                  <ZenButton>Learn More</ZenButton>
                </div>
              </ZenCard>
              <ZenCard>
                <ZenHeading level={3} className="mb-3">Accessibility</ZenHeading>
                <ZenText>Every interaction designed with empathy and inclusion in mind.</ZenText>
                <div className="mt-4">
                  <ZenButton className="bg-white text-slate-600 border-2 border-slate-600 hover:bg-slate-50">
                    Explore
                  </ZenButton>
                </div>
              </ZenCard>
            </div>
          </div>

          {/* Retro-Futuristic Demo */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">🕹️ Retro-Futuristic - 80s Synth Vibes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <RetroCard glitch>
                <RetroHeading level={3} className="mb-3">EFFICIENCY</RetroHeading>
                <RetroText>OPTIMIZING CODE FOR MAXIMUM PERFORMANCE AND MINIMAL RESOURCE USAGE</RetroText>
                <div className="mt-4">
                  <RetroButton neon>EXECUTE</RetroButton>
                </div>
              </RetroCard>
              <RetroCard>
                <RetroTerminal>
                  <RetroText terminal>Loading system diagnostics...</RetroText>
                  <RetroText terminal>✓ Performance: OPTIMAL</RetroText>
                  <RetroText terminal>✓ Accessibility: ENABLED</RetroText>
                  <RetroText terminal>✓ User Experience: ENHANCED</RetroText>
                </RetroTerminal>
              </RetroCard>
            </div>
          </div>

          {/* Soft Brutalism Demo */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">🌈 Soft Brutalism - Bold & Human</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <BrutalCard handDrawn>
                <BrutalHeading level={3} className="mb-3">SIMPLICITY</BrutalHeading>
                <BrutalText>NO BULLSHIT. CLEAN CODE. CLEAR PURPOSE.</BrutalText>
                <div className="mt-4">
                  <BrutalButton size="large">GET STARTED</BrutalButton>
                </div>
              </BrutalCard>
              <BrutalCard>
                <BrutalCallout type="info" className="mb-4">
                  <strong>PRO TIP:</strong> This design philosophy prioritizes clarity over cleverness.
                </BrutalCallout>
                <BrutalStickyNote color="yellow" className="mb-4">
                  Remember: Every pixel should serve a purpose
                </BrutalStickyNote>
                <BrutalSandbox>
                  <BrutalText className="text-sm">
                    This is your creative sandbox. Build something amazing here.
                  </BrutalText>
                </BrutalSandbox>
              </BrutalCard>
            </div>
          </div>

          {/* Interactive Elements Demo */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">🎨 Interactive Elements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-3">Hover Effects</h3>
                <div className="space-y-2">
                  <div className="p-4 bg-gray-100 rounded hover:bg-gray-200 transition-colors cursor-pointer">
                    Subtle hover
                  </div>
                  <div className="p-4 bg-blue-100 rounded hover:bg-blue-200 hover:scale-105 transition-all cursor-pointer">
                    Scale hover
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-3">Animations</h3>
                <div className="space-y-2">
                  <div className="p-4 bg-green-100 rounded animate-pulse">
                    Pulsing
                  </div>
                  <div className="p-4 bg-purple-100 rounded hover:animate-bounce cursor-pointer">
                    Bounce on hover
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-3">Transitions</h3>
                <div className="space-y-2">
                  <div className="p-4 bg-yellow-100 rounded transition-all duration-300 hover:bg-yellow-200 hover:shadow-lg cursor-pointer">
                    Smooth transition
                  </div>
                  <div className="p-4 bg-red-100 rounded transition-all duration-500 hover:bg-red-200 hover:rotate-1 cursor-pointer">
                    Rotate on hover
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Current Theme Info */}
          <div className="text-center">
            <div className="inline-block p-6 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Current Theme</h3>
              <p className="text-2xl font-bold text-blue-600 capitalize">{currentTheme}</p>
              <p className="text-sm text-gray-600 mt-2">
                Switch themes using the theme switcher in the top right corner
              </p>
            </div>
          </div>
        </div>
      </div>
    </ZenMode>
  );
}

export default function DemoPage() {
  return (
    <ThemeProvider>
      <ThemeDemo />
    </ThemeProvider>
  );
}
