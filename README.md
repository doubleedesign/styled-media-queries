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
For a full list of available functions and more details, please see [this doc](https://github.com/doubleedesign/styled-media-queries/blob/master/docs.md).
