import { News as NewsType } from 'api/feeds/hooks/useNewsFeed';
import { Content, Image, Text, Title, Wrapper } from './News.styles';

type Props = {
  news: NewsType;
};

export default function News({ news }: Props) {
  const image = news.imageUrl;

  return (
    <Wrapper padding={false}>
      <Image src={image} />
      <Text>
        <Title>{news.title}</Title>
        <Content>{news.content}</Content>
      </Text>
    </Wrapper>
  );
}
