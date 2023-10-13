import ReactMarkdown from 'react-markdown';
import { MarkdownStyling } from './Markdown.styles';

type Props = {
  text: string;
  className?: string;
};

export function Markdown({ text, className }: Props) {
  return (
    <MarkdownStyling className={className}>
      <ReactMarkdown>{text}</ReactMarkdown>
    </MarkdownStyling>
  );
}

export default Markdown;
