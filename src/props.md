
export const name = 'Props'

# Props

## Styled System

Rebass components use [styled-system][] for responsive, theme-based style props.
Each Rebass component extends the base `Box` component, which includes several general-purpose style props.

## Colors

All Rebass components use [styled-system][]'s [color][] function to add the `color` and `bg` props.
The `color` and `bg` props make using colors from the color palette simple to help promote design consistency.

The color values can be defined in the `theme.colors` object.

```.jsx
<Box color='white' bg='magenta' p={3}>
  Hello
</Box>
```

```jsx
// Keys reference values in the color palette object
<Text color='blue' />

// Background color can be set with the `bg` prop
<Button bg='red' />

// Values that do not map to a key in `theme.colors` can be used
<Button bg='tomato' />

// Arrays can be used to change colors responsively
<Text color={[ 'blue', 'green' ]} />
```

## Margin and Padding

All Rebass component use the [space][] utility from [styled-system][] to handle responsive margin and padding props based on a global spacing scale (`theme.space`).
The margin and padding props help promote consistency in layout
without the need to add custom margin and padding declarations throughout an application.
The margin and padding props use a shorthand syntax, similar to other OOCSS approaches and many CSS libraries.

```.jsx
<Box
  p={3}
  mx={2}
  my={4}
  color='white'
  bg='blue'>
  Hello
</Box>
```

- `m`: margin
- `mt`: margin-top
- `mr`: margin-right
- `mb`: margin-bottom
- `ml`: margin-left
- `mx`: margin-left and margin-right
- `my`: margin-top and margin-bottom
- `p` : padding
- `pt`: padding-top
- `pr`: padding-right
- `pb`: padding-bottom
- `pl`: padding-left
- `px`: padding-left and padding-right
- `py`: padding-top and padding-bottom

```jsx
// Numbers reference steps on the spacing scale
// e.g. 8px
<Text m={2} />

// Numbers greater than the length of `theme.space.length` are converted to pixels
<Text my={256} />

// Negative values can be used to add negative margins
<Text mx={-2} />

// Strings can be used for other values
<Text mx='auto' />

// Arrays can be used for mobile-first responsive styles
<Text m={[ 0, 1, 2 ]} />
```

## Font Size

The `fontSize` prop can pick up values from a typographic scale defined in your theme as a `theme.fontSizes` array.

## Width

The `width` prop can set fixed or percentage-based widths on an element.

The `width` prop accepts number, string, or array values, where:

- Numbers between 0 and 1 are converted to percentage based widths (e.g. `1/2` becomes `50%`)
- Numbers greater than 1 are converted to pixels
- Strings can be used for other CSS values (e.g. `50vw` or `30em`)
- Arrays can be used for responsive styles

## Responsive Styles

All Rebass props accept arrays as values to set mobile-first responsive styles.
The first value is not scoped to a media query and applies to all breakpoints.
Each value after the first corresponds to a media query derived from `theme.breakpoints`.

See the [styled-system][responsive] docs for more info.

```.jsx
<Flex flexWrap='wrap'>
  <Box
    width={[ 1, 1/2 ]}
    p={2}
    color='white'
    bg='blue'>
    Hello
  </Box>
  <Box
    width={[ 1, 1/2 ]}
    p={2}
    color='white'
    bg='dark'>
    Hello
  </Box>
</Flex>
```

```jsx
<Text
  width={[
    1,    // 100% width at the smallest breakpoint
    1/2,  // 50% width at the next breakpoint
    null, // null skips a breakpoint
    1/4   // 25% width at the next
  ]}
/>
```

## Component-Specific Props

Refer to each component's docs for addition props:

- [Box](/Box)
- [Flex](/Flex)
- [Text](/Text)
- [Heading](/Heading)
- [Button](/Button)
- [Link](/Link)
- [Image](/Image)
- [Card](/Card)

[styled-system]: https://github.com/jxnblk/styled-system
[space]: https://github.com/jxnblk/styled-system/blob/master/docs/api.md#space-responsive
[color]: https://github.com/jxnblk/styled-system/blob/master/docs/api.md#color-responsive
[responsive]: https://github.com/jxnblk/styled-system/blob/master/docs/responsive-styles.md
[system-components]: https://github.com/jxnblk/styled-system/tree/master/system-components
