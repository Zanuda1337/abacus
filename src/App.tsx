import React, { useCallback, useState } from "react";
import "./App.css";
import "src/assets/css/reset.css";
import "src/assets/css/global.css";
import Abacus from "./features/Abacus/Abacus";
import Settings from "src/features/Settings/Settings";
import { TOption } from "src/types";
import {
  ballOptions,
  DEFAULT_BALLS,
  DEFAULT_FRAMES,
  frameOptions,
  MAX_BALLS,
  MAX_FRAMES,
  MIN_BALLS,
  MIN_FRAMES,
} from "src/consts";

function App() {
  const [framesCount, setFramesCount] = useState<number>(DEFAULT_FRAMES);
  const [ballsCount, setBallsCount] = useState<number>(DEFAULT_BALLS);
  const [frameOption, setFrameOption] = useState<TOption>(frameOptions[0]);
  const [ballOption, setBallOption] = useState<TOption>(ballOptions[0]);

  const handleFrameColorSelect = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const option = frameOptions.find(
        (option) => option.value === event.target.value
      );
      if (!option) return;
      setFrameOption(option);
    },
    []
  );

  const handleBallColorSelect = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const option = ballOptions.find(
        (option) => option.value === event.target.value
      );
      if (!option) return;
      setBallOption(option);
    },
    []
  );
  const handleSetFrames = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(event.target.value);
      if (value > MAX_FRAMES || value < MIN_FRAMES) return;
      setFramesCount(value);
    },
    []
  );
  const handleSetBalls = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(event.target.value);
      if (value > MAX_BALLS || value < MIN_BALLS) return;
      setBallsCount(value);
    },
    []
  );

  return (
    <div className={"wrapper"}>
      <Abacus
        framesCount={framesCount}
        ballsCount={ballsCount}
        frameImg={frameOption.img}
        ballImg={ballOption.img}
      />
      <Settings
        framesCount={framesCount}
        ballsCount={ballsCount}
        frameType={frameOption.value}
        ballType={ballOption.value}
        onFrameColorSelect={handleFrameColorSelect}
        onBallColorSelect={handleBallColorSelect}
        onSetFrames={handleSetFrames}
        onSetBalls={handleSetBalls}
      />
    </div>
  );
}

export default App;
