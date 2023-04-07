# styled-media-queries

Shorthand for media queries within [styled-components](https://styled-components.com/).

[Find on NPM](https://www.npmjs.com/package/@doubleedesign/styled-media-queries)

---

## Usage Examples

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
export const SampleElement = styled.div`
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
**Note**: `css` is optional for basic CSS - you _can_ just pass a template literal on its own; but including `css` is helpful for enabling syntax highlighting. That said, [if you have functions inside, you _do_ need to use `css`](https://styled-components.com/docs/api#css):

```typescript
export const SampleElement = styled.div`
    background: ${({ theme }): string => theme.colors.light};
    
    ${props => breakpointUp(props.theme.breakpoints.md, css`
        background: ${props.theme.colors.dark};
    `)};
`;


```

For a full list of available functions and more details, please see [this doc](https://github.com/doubleedesign/styled-media-queries/blob/master/docs.md).
