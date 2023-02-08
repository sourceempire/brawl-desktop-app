import { MutableRefObject, useEffect, useRef } from 'react';
import Lottie, { AnimationItem } from 'lottie-web/build/player/lottie_light'; // Using lottie light, as full lottie uses eval() to work, and eval() is blocked by the Content Security Policy
import { Wrapper } from './Animation.styles';

/**
 * **src**: Should be an imported json file generated by bodymovin
 */
type AnimationProps = {
  src: unknown;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  speed?: number;
};

export const Animation = ({
  src,
  className,
  loop = true,
  autoplay = true,
  speed = 1
}: AnimationProps) => {
  const container = useRef<HTMLDivElement>(null);
  const loadingAnimationItem = useRef() as MutableRefObject<AnimationItem>;

  useEffect(() => {
    loadingAnimationItem.current = Lottie.loadAnimation({
      container: container.current as HTMLDivElement,
      animationData: src,
      renderer: 'svg',
      loop,
      autoplay
    });

    loadingAnimationItem.current.setSpeed(speed);

    return () => {
      loadingAnimationItem.current.destroy();
    };
  }, [src, loop, autoplay, speed]);

  return <Wrapper ref={container} className={className} />;
};

export default Animation;
