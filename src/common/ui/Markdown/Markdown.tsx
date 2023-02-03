import ReactMarkdown from 'react-markdown';
import { MarkdownStyling } from './Markdown.styles';

type Props = {
  children: string;
  className?: string;
};

export function Markdown({ children, className }: Props) {
  return (
    <MarkdownStyling className={className}>
      <ReactMarkdown>{children}</ReactMarkdown>
    </MarkdownStyling>
  );
}

export default Markdown;
