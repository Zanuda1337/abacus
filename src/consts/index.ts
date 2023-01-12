import { TOption } from "src/types";
import secondFrame from "src/assets/images/frame_2.png";
import firstFrame from "src/assets/images/frame_1.png";
import secondBall from "src/assets/images/ball_2.png";
import firstBall from "src/assets/images/ball_1.png";

export const frameOptions: TOption[] = [
  { label: "Серый", value: "gray", img: secondFrame },
  { label: "Кирпичный", value: "brick", img: firstFrame },
];
export const ballOptions: TOption[] = [
  { label: "Изумрудный", value: "emerald", img: secondBall },
  { label: "Коричневый", value: "brown", img: firstBall },
];

export const MAX_FRAMES = 22;
export const MIN_FRAMES = 1;
export const MAX_BALLS = 6;
export const MIN_BALLS = 1;

export const DEFAULT_FRAMES = 16;
export const DEFAULT_BALLS = 4;
