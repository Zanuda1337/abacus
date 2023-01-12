import React from "react";
import classes from "src/features/Abacus/Abacus.module.css";
import { ballOptions, frameOptions } from "src/consts";

type TSettingsProps = {
  framesCount: number;
  ballsCount: number;
  ballType: string;
  frameType: string;
  onBallColorSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onFrameColorSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onSetFrames: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSetBalls: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Settings: React.FC<TSettingsProps> = ({
  ballType,
  frameType,
  framesCount,
  ballsCount,
  onBallColorSelect,
  onFrameColorSelect,
  onSetFrames,
  onSetBalls,
}) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.settings}>
        <div className={classes.field}>
          <p>Цвет косточки</p>
          <select value={ballType} onChange={onBallColorSelect}>
            {ballOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className={classes.field}>
          <p>Цвет рамки</p>
          <select value={frameType} onChange={onFrameColorSelect}>
            {frameOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className={classes.field}>
          <p>Количество стержней</p>
          <input type="number" value={framesCount} onChange={onSetFrames} />
        </div>
        <div className={classes.field}>
          <p>Кол-во косточек под разделителем</p>
          <input type="number" value={ballsCount} onChange={onSetBalls} />
        </div>
      </div>
    </div>
  );
};

export default Settings;
