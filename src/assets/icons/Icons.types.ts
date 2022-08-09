export interface SVGComponent
  extends React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  > {
  url: string;
}
