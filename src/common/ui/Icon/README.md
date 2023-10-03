# Icon library

To add a new icon to this library, you would need to follow these steps:

1. Create the SVG file for your new icon and save it in the "icons" directory.

2. Import the SVG file in the file where you have the Icons object defined, for example:
`import * as NewIcon from './icons/NewIcon.svg';`

3. Add a new key-value pair to the Icons object, using the appropriate enum value from the IconEnum type as the key and calling the createSVGIcon function on your imported SVG file as the value. `[IconEnum.New]: createSVGIcon(NewIcon)`,

Then you can use any of the below methods:

```tsx
<Icons.New fill="white" height={15} />
```

You can also use the icon as a regular img tag, by using the url property of the returned svgComponent, like this:

```tsx
<img src={Icons.New.url} alt="New Icon" height={15} />
```

You can also use the `Icon` component like this:

```tsx
<Icon icon={Icons.New} fill="white" height={15}/> 
```

or

```tsx
<Icon icon={IconEnum.New} fill="white" height={15} />
```

or

```tsx
import exampleIcon from 'path/to/example-example.svg'

<Icon icon={exampleIcon} fill="white" height={15}/>
```

Additionaly, You can use the "styled" function to wrap the Icon component, allowing you to add custom styles to it. Here's an example of how to use a styled component to add a custom background color to the Icon component:

```tsx
import styled from '@emotion/styled';

const StyledIcon = styled(Icon)`
  background-color: red;
`;
```

Now you can use the StyledIcon component in the same way as the regular Icon component, but it will have a red background color.

```tsx
<StyledIcon icon={Icons.New} fill="white" height={15} />
```

You can also use the "styled" function to wrap the imported SVG component, for example:

```tsx
const StyledNewIcon = styled(Icons.New)`
  background-color: red;
`;
```

And you can use it as a regular SVG component, but with the custom styles added:

```tsx
<StyledNewIcon fill="white" height={15} />
```
