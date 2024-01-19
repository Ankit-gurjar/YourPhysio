import { ReactElement, useState } from "react";

export function useMultistepForm(steps: ReactElement[]) {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);

  function next() {
    setCurrentStepIdx((i) => {
      if (i >= steps.length - 1) return i;
      else return i + 1;
    });
  }
  function back() {
    setCurrentStepIdx((i) => {
      if (i <= 0) return i;
      else return i - 1;
    });
  }
  function goTo(index: number) {
    setCurrentStepIdx(index);
  }
  return {
    currentStepIdx,
    step: steps[currentStepIdx],
    steps,
    isFirstStep: currentStepIdx === 0,
    isLastStep: currentStepIdx === steps.length - 1,
    goTo,
    next,
    back,
  };
}
