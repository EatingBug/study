import { useState } from 'react';
import { createStage } from '../gameHelpers';

export let useStage = () => {
  let [stage, setStage] = useState(createStage());

  return [stage, setStage];
}