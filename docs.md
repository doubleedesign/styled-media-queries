# styled-media-queries


Shorthand for media queries within [styled-components](https://styled-components.com/).

[Find on NPM](https://www.npmjs.com/package/@doubleedesign/styled-media-queries)

---

## Motivation

I wanted a shorthand way of writing media queries within CSS declarations in styled components like I do in SCSS, e.g., Foundation's `@include breakpoint(large up)` and Bootstrap's `@include media-breakpoint-up(lg)` mixins.

There are various ways to do this documented throughout the internet, but sometimes I just want to figure out a way myself ;) 


## Usage Summary

```javascript
import { breakpointUp } from '@doubleedesign/styled-media-queries';
```

**Standalone, passing a number:**
```javascript
export const SampleElement = styled.div`
    width: 30%;
    flex-basis: 30%;
    
    ${breakpointUp(768, css`
        width: 15%;
        flex-basis: 15%;
    `)};
`;
```

**Components within a ThemeProvider:**

In these examples, the theme object passed to the ThemeProvider contains an object called `breakpoints` with key-value pairs like `sm: 576`, `md: 768`. Adjust to suit your own theme.

The below three examples are all equivalent. I like the first one because it's concise, others like to destructure the theme object, and sometimes explicity including a `return` statement can be clearer in more complex cases.

```javascript
export const SampleElement = styled.div`
    width: 30%;
    flex-basis: 30%;
    
    ${props => breakpointUp(props.theme.breakpoints.md, css`
        width: 15%;
        flex-basis: 15%;
    `)};
`;
```
```javascript
export const HeaderLogo = styled.div`
    width: 30%;
    flex-basis: 30%;
    
    ${({ theme }) => breakpointUp(theme.breakpoints.md, css`
        width: 15%;
        flex-basis: 15%;
    `)};
`;
```
```javascript
export const SampleElement = styled.div`
    width: 30%;
    flex-basis: 30%;
    
    ${({ theme }) => {
        return breakpointUp(theme.breakpoints.md, css`
            width: 15%;
            flex-basis: 15%;
        `);
    }};
`;
```
With functions inside: 

```typescript
export const SampleElement = styled.div`
    background: ${({ theme }): string => theme.colors.light};
    
    ${props => breakpointUp(props.theme.breakpoints.md, css`
        background: ${props.theme.colors.dark};
    `)};
`;


```

## Available functions

Most of these have only had minimal testing at the time of writing. Feedback via GitHub issues and PRs is very welcome.

|                       Function                       |               Parameters               |                                        Media query called                                        |
|:----------------------------------------------------:|:--------------------------------------:|:------------------------------------------------------------------------------------------------:|
|                  `viewportWidthUp`                   |           breakpoint, styles           |                         `@media screen and (min-width: ${breakpoint}px)`                         |
|      `breakpointUp` (alias for viewportWidthUp)      |           breakpoint, styles           |                         `@media screen and (min-width: ${breakpoint}px)`                         |
|                 `viewportWidthDown`                  |           breakpoint, styles           |                     `@media screen and (max-width: ${breakpoint - 0.02}px)`                      |
|    `breakpointDown` (alias for viewportWidthDown)    |           breakpoint, styles           |                     `@media screen and (max-width: ${breakpoint - 0.02}px)`                      |
|                `viewportWidthBetween`                | startBreakpoint, endBreakpoint, styles | `@media screen and (min-width: ${startBreakpoint}px) and (max-width: ${endBreakpoint - 0.02}px)` |
| `breakpointBetween` (alias for viewportWidthBetween) | startBreakpoint, endBreakpoint, styles | `@media screen and (min-width: ${startBreakpoint}px) and (max-width: ${endBreakpoint - 0.02}px)` |
|                  `viewportHeightUp`                  |             height, styles             |                          `@media screen and (min-height: ${height}px)`                           |
|                 `viewportHeightDown`                 |             height, styles             |                       `@media screen and (min-height: ${height - 0.02}px)`                       |
|               `viewportMinAspectRatio`               |         width, height, styles          |                    `@media screen and (min-aspect-ratio: ${width}/${height})`                    |
|               `viewportMaxAspectRatio`               |         width, height, styles          |                    `@media screen and (min-aspect-ratio: ${width}/${height})`                    |
|              `userPrefersLessContrast`               |                 styles                 |                                `@media (prefers-contrast: less)`                                 |
|              `userPrefersMoreContrast`               |                 styles                 |                                `@media (prefers-contrast: more)`                                 |
|              `userPrefersReducedMotion`              |                 styles                 |                                `@media (prefers-reduced-motion)`                                 |


I initially used phrasing such as `breakpointUp` and `breakpointDown` in line with existing common phrasing (notably Bootstrap's) but because I wanted to include options for querying viewport height, it made sense to label the width queries similarly. I have included `breakpointUp` and its ilk as well - they're aliases for `viewportWidthUp` etc.

### Parameters

|                                                 |                                                                                           |
|-------------------------------------------------|-------------------------------------------------------------------------------------------|
| `breakpoint`                                    | number; pixel value for a width breakpoint.                                               |
| `startBreakpoint` and `endBreakpoint`           | numbers; pixel values for the lower and upper bound of a between-breakpoints media query. |
| `height`                                        | number; pixel value for a height breakpoint.                                              |
| `width` and `height` for aspect ratio functions | numbers; proportional values for aspect ratio calculations                                |
| `styles`                                        | styled-components [`css` template literal](https://styled-components.com/docs/api#css) (see Usage section above for examples)            |
