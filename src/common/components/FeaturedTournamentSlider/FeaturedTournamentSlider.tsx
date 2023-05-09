import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PopupLevel } from 'common/popup/Popup.types';
import FeaturedTournament from 'pages/tournament-list/components/FeaturedTournament/FeaturedTournament';
import { TournamentHub } from 'types/tournaments/TournamentInfo';
import {
  Dot,
  DotContainer,
  Dots,
  Slider,
  SliderButtonContainer,
  SliderButtonNext,
  SliderButtonPrev,
  SliderContainer,
  TimerAnimation
} from './FeaturedTournamentSlider.styles';
import countdownCircleSlider from 'assets/animations/countdown-circle-slider.json';

type FeaturedTournamentSliderProps = {
  featuredTournamentHubs: TournamentHub[];
  expanded?: boolean;
};

export default function FeaturedTournamentSlider({
  featuredTournamentHubs,
  expanded
}: FeaturedTournamentSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [autoSlideInterval, setAutoSlideInterval] = useState(true);
  const currentSlideRef = useRef(0);
  const sliderTimer = 5000;

  const nextSlide = useCallback(() => {
    const nextSlideIndex =
      currentSlideRef.current === featuredTournamentHubs.length - 1
        ? 0
        : currentSlideRef.current + 1;
    setCurrentSlide(nextSlideIndex);
    currentSlideRef.current = nextSlideIndex;
  }, [featuredTournamentHubs.length]);

  const prevSlide = useCallback(() => {
    const prevSlideIndex =
      currentSlideRef.current === 0
        ? featuredTournamentHubs.length - 1
        : currentSlideRef.current - 1;
    setCurrentSlide(prevSlideIndex);
    currentSlideRef.current = prevSlideIndex;
  }, [featuredTournamentHubs.length]);

  const handleMouseEnter = () => {
    setAutoSlideInterval(false);
  };

  const handleMouseLeave = () => {
    setAutoSlideInterval(true);
  };

  const handleDotClick = useCallback((index: number) => {
    setCurrentSlide(index);
    currentSlideRef.current = index;
  }, []);

  useEffect(() => {
    const nrOfSlides = featuredTournamentHubs.length;
    setSliderWidth(100 * nrOfSlides);

    if (autoSlideInterval) {
      const interval = setInterval(() => {
        nextSlide();
      }, sliderTimer);

      return () => clearInterval(interval);
    }
  }, [autoSlideInterval, featuredTournamentHubs.length, nextSlide, prevSlide]);

  const navigate = useNavigate();

  return (
    <>
      <Slider onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
        <SliderContainer
          width={sliderWidth}
          ref={sliderRef}
          style={{
            transform: `translateX(-${(currentSlide / featuredTournamentHubs.length) * 100}%)`
          }}>
          {featuredTournamentHubs.map((tournamentHub) => (
            <FeaturedTournament
              key={tournamentHub.id}
              tournamentHub={tournamentHub}
              visible={expanded}
              onClick={() => navigate(`hub/${tournamentHub.id}`)}
            />
          ))}
        </SliderContainer>
        <SliderButtonContainer visible={expanded} leftContainer>
          <SliderButtonPrev onClick={() => prevSlide()} />
        </SliderButtonContainer>
        <SliderButtonContainer visible={expanded} rightContainer>
          <SliderButtonNext visible={expanded} onClick={() => nextSlide()} />
        </SliderButtonContainer>
        <Dots visible={expanded}>
          {featuredTournamentHubs.map((tournamentHub, index) => (
            <DotContainer active={index === currentSlide} key={tournamentHub.id}>
              <Dot
                key={tournamentHub.id}
                active={index === currentSlide}
                onClick={() => handleDotClick(index)}
              />
              {index === currentSlide && (
                <TimerAnimation
                  src={countdownCircleSlider}
                  level={PopupLevel.INFO}
                  speed={autoSlideInterval ? 10000 / sliderTimer : 0}
                  loop={false}
                />
              )}
            </DotContainer>
          ))}
        </Dots>
      </Slider>
    </>
  );
}
