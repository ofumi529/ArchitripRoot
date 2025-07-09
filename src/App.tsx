import { Suspense, useState } from 'react';
import './i18n';
import { SelectionProvider } from './context/SelectionContext';
import StepProgress from './components/StepProgress';
import OriginStep from './components/OriginStep';
import SelectWorksStep from './components/SelectWorksStep';
import PlanStep from './components/PlanStep';
import { countryCenters } from './data/countryCenters';

export default function App() {
  const [step, setStep] = useState<'origin' | 'select' | 'plan'>('origin');
  const [origin, setOrigin] = useState<string | null>(null);

  return (
    <Suspense fallback={<div className="p-4">Loading...</div>}>
      <SelectionProvider>
        <div className="h-screen flex flex-col">
          <StepProgress current={step} />
          <div className="flex-1 min-h-0">
            {step === 'origin' && (
              <OriginStep
                origin={origin}
                setOrigin={setOrigin}
                onNext={() => setStep('select')}
              />
            )}
            {step === 'select' && (
              <SelectWorksStep
                onNext={() => setStep('plan')}
              />
            )}
            {step === 'plan' && (
              <PlanStep
                origin={origin}
                originCoords={origin ? countryCenters[origin] : null}
                onRestart={() => setStep('select')}
              />
            )}
          </div>
        </div>
      </SelectionProvider>
    </Suspense>
  );
}
