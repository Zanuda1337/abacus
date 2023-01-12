import React from "react";
import classes from "src/features/Abacus/Abacus.module.css";
import clsx from "clsx";

type TAbacusProps = {
  framesCount: number;
  ballsCount: number;
  frameImg: string;
  ballImg: string;
};

const Abacus: React.FC<TAbacusProps> = ({
  framesCount,
  ballsCount,
  frameImg,
  ballImg,
}) => {
  const frames: { id: number }[] = [];
  const balls: { id: number; offset: number }[] = [];

  for (let i = 0; i < ballsCount; i++) {
    balls.push({ id: i, offset: i * 3 });
  }
  for (let i = 0; i < framesCount; i++) {
    frames.push({ id: i });
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.frames}>
        {frames.map((frame) => (
          <div key={frame.id} className={classes.frame}>
            <img
              className={clsx(classes.ball, classes["top-ball"])}
              src={ballImg}
              alt=""
            />
            <img className={classes["frame-img"]} src={frameImg} alt="" />
            <div className={classes.balls}>
              {balls.map((ball) => (
                <img
                  key={ball.id}
                  className={classes.ball}
                  style={{ bottom: ball.offset + "rem" }}
                  src={ballImg}
                  alt=""
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Abacus;
