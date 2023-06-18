import { useCallback, useEffect, useRef, useState } from 'react';
import { useFeaturedTourmanentsFeed } from 'api/feeds';
import { useNavigate } from 'react-router-dom';
import FeaturedTournament from 'pages/tournament-list/components/FeaturedTournament/FeaturedTournament';
import {
  Dot,
  DotContainer,
  Dots,
  Slider,
  SliderButtonContainer,
  SliderButtonPrev,
  SliderContainer,
  TimerAnimation
} from './FeaturedTournamentSlider.styles';
import countdownCircleSlider from 'assets/animations/countdown-circle-slider.json';

type Props = {
  expanded: boolean;
};

const sliderTimer = 5000;

export default function FeaturedTournamentSlider({ expanded }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const currentSlideRef = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const timeRemainingRef = useRef(sliderTimer);
  const [autoSlideActive, setAutoSlideActive] = useState(true);
  const [sliderWidth, setSliderWidth] = useState(0);

  const { featuredTournamentHubs } = useFeaturedTourmanentsFeed();

  const navigate = useNavigate();

  const changeSlide = useCallback(
    (step: number) => {
      const slideCount = featuredTournamentHubs.length;
      const nextSlideIndex = (currentSlideRef.current + step + slideCount) % slideCount;
      setCurrentSlide(nextSlideIndex);
      currentSlideRef.current = nextSlideIndex;
    },
    [featuredTournamentHubs.length]
  );

  const handleDotClick = (index: number) => changeSlide(index - currentSlideRef.current);

  const handleMouseEnter = () => {
    setAutoSlideActive(false);
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    setAutoSlideActive(true);
    if (timeoutRef.current === null) {
      timeoutRef.current = setInterval(() => {
        changeSlide(1);
        timeRemainingRef.current = sliderTimer;
      }, timeRemainingRef.current);
    }
  };

  useEffect(() => {
    const nrOfSlides = featuredTournamentHubs.length;
    setSliderWidth(100 * nrOfSlides);
    if (autoSlideActive) {
      timeoutRef.current = setInterval(() => {
        changeSlide(1);
        timeRemainingRef.current = sliderTimer;
      }, timeRemainingRef.current);
    }

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [autoSlideActive, changeSlide, featuredTournamentHubs.length]);

  return (
    <>
      {featuredTournamentHubs.length === 1 ? (
        <Slider>
          <SliderContainer width={sliderWidth}>
            <FeaturedTournament
              key={featuredTournamentHubs[0].id}
              tournamentHub={featuredTournamentHubs[0]}
              visible={expanded}
              onClick={() => navigate(`hub/${featuredTournamentHubs[0].id}`)}
            />
          </SliderContainer>
        </Slider>
      ) : (
        <Slider onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
          <SliderContainer
            width={sliderWidth}
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
            <SliderButtonPrev onClick={() => changeSlide(1)} />
          </SliderButtonContainer>
          <SliderButtonContainer visible={expanded} rightContainer>
            {/* <SliderButtonNext visible={expanded} onClick={() => changeSlide(-1)} /> */}
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
                    speed={autoSlideActive ? 10000 / sliderTimer : 0}
                    loop={false}
                  />
                )}
              </DotContainer>
            ))}
          </Dots>
        </Slider>
      )}
    </>
  );
}
