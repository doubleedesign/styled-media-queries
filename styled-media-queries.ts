import { css, SimpleInterpolation, FlattenInterpolation, ThemeProps } from 'styled-components';

/**
 * Apply CSS at the given width breakpoint and above
 *
 * @param {number} breakpoint
 * @param {SimpleInterpolation | FlattenInterpolation<ThemeProps<unknown>>} styles
 */
export function viewportWidthUp(breakpoint: number, styles: SimpleInterpolation | FlattenInterpolation<ThemeProps<unknown>>) {
	return css`
		@media screen and (min-width: ${breakpoint}px) {
			${styles}
		}
	`;
}

/**
 * Apply CSS at the given width breakpoint and above
 * Alias for viewportWidthUp
 *
 * @param {number} breakpoint
 * @param {SimpleInterpolation | FlattenInterpolation<ThemeProps<unknown>>} styles
 */
export function breakpointUp(breakpoint: number, styles: SimpleInterpolation | FlattenInterpolation<ThemeProps<unknown>>) {
	return viewportWidthUp(breakpoint, styles);
}


/**
 * Apply CSS below the given width breakpoint
 * Follows Bootstrap's convention of subtracting 0.02px for the upper-bound
 * for more reliable results on high-res screens
 * @see https://getbootstrap.com/docs/5.2/layout/breakpoints/
 *
 * @param {number} breakpoint
 * @param {SimpleInterpolation | FlattenInterpolation<ThemeProps<unknown>>} styles
 */
export function viewportWidthDown(breakpoint: number, styles: SimpleInterpolation | FlattenInterpolation<ThemeProps<unknown>>) {
	return css`
		@media screen and (max-width: ${breakpoint - 0.02}px) {
			${styles}
		}
	`;
}


/**
 * Apply CSS below the given width breakpoint
 * Alias for viewportWidthDown
 *
 * @param {number} breakpoint
 * @param {SimpleInterpolation | FlattenInterpolation<ThemeProps<unknown>>} styles
 */
export function breakpointDown(breakpoint: number, styles: SimpleInterpolation | FlattenInterpolation<ThemeProps<unknown>>) {
	return viewportWidthDown(breakpoint, styles);
}


/**
 * Apply CSS between two given width breakpoints
 * Follows Bootstrap's convention of subtracting 0.02px for the upper-bound
 * for more reliable results on high-res screens
 * @see https://getbootstrap.com/docs/5.2/layout/breakpoints/
 *
 * @param {number} startBreakpoint
 * @param {number} endBreakpoint
 * @param {SimpleInterpolation | FlattenInterpolation<ThemeProps<unknown>>} styles
 */
export function viewportWidthBetween(startBreakpoint: number, endBreakpoint: number, styles: SimpleInterpolation | FlattenInterpolation<ThemeProps<unknown>>) {
	return css`
		@media screen and (min-width: ${startBreakpoint}px) and (max-width: ${endBreakpoint - 0.02}px) {
			${styles}
		}
	`;
}


/**
 * Apply CSS between two given width breakpoints
 * Alias for viewportWidthBetween
 *
 * @param {number} startBreakpoint
 * @param {number} endBreakpoint
 * @param {SimpleInterpolation | FlattenInterpolation<ThemeProps<unknown>>} styles
 */
export function breakpointBetween(startBreakpoint: number, endBreakpoint: number, styles: SimpleInterpolation | FlattenInterpolation<ThemeProps<unknown>>) {
	return viewportWidthBetween(startBreakpoint, endBreakpoint, styles);
}


/**
 * Apply CSS at the given height breakpoint and above
 *
 * @param {number} height
 * @param {SimpleInterpolation | FlattenInterpolation<ThemeProps<unknown>>} styles
 */
export function viewportHeightUp(height: number, styles: SimpleInterpolation | FlattenInterpolation<ThemeProps<unknown>>) {
	return css`
		@media screen and (min-height: ${height}px) {
			${styles}
		}
	`;
}


/**
 * Apply CSS below the given height breakpoint
 *
 * @param {number} height
 * @param {SimpleInterpolation | FlattenInterpolation<ThemeProps<unknown>>} styles
 */
export function viewportHeightDown(height: number, styles: SimpleInterpolation | FlattenInterpolation<ThemeProps<unknown>>) {
	return css`
		@media screen and (max-height: ${height - 0.02}px) {
			${styles}
		}
	`;
}


/**
 * Apply CSS at the given aspect ratio and above
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/aspect-ratio
 *
 * @param {number} width
 * @param {number} height
 * @param {SimpleInterpolation | FlattenInterpolation<ThemeProps<unknown>>} styles
 */
export function viewportMinAspectRatio(width: number, height: number, styles: SimpleInterpolation | FlattenInterpolation<ThemeProps<unknown>>) {
	return css`
		@media screen and (min-aspect-ratio: ${width}/${height}) {
			${styles}
		}
	`;
}


/**
 * Apply CSS at the given aspect ratio and below
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/aspect-ratio
 *
 * @param {number} width
 * @param {number} height
 * @param {SimpleInterpolation | FlattenInterpolation<ThemeProps<unknown>>} styles
 */
export function viewportMaxAspectRatio(width: number, height: number, styles: SimpleInterpolation | FlattenInterpolation<ThemeProps<unknown>>) {
	return css`
		@media screen and (max-aspect-ratio: ${width}/${height}) {
			${styles}
		}
	`;
}


/**
 * Apply styles for users who have settings indicating a preference for lower contrast
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast
 *
 * @param {SimpleInterpolation | FlattenInterpolation<ThemeProps<unknown>>} styles
 */
export function userPrefersLessContrast(styles: SimpleInterpolation | FlattenInterpolation<ThemeProps<unknown>>) {
	return css`
        @media (prefers-contrast: less) {
			${styles}
		}
	`;
}


/**
 * Apply styles for users who have settings indicating a preference for higher contrast
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast
 *
 * @param {SimpleInterpolation | FlattenInterpolation<ThemeProps<unknown>>} styles
 */
export function userPrefersMoreContrast(styles: SimpleInterpolation | FlattenInterpolation<ThemeProps<unknown>>) {
	return css`
        @media (prefers-contrast: more) {
			${styles}
		}
	`;
}


/**
 * Apply styles for users who have settings indicating a preference for reduced motion
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast
 *
 * @param {SimpleInterpolation | FlattenInterpolation<ThemeProps<unknown>>} styles
 */
export function userPrefersReducedMotion(styles: SimpleInterpolation | FlattenInterpolation<ThemeProps<unknown>>) {
	return css`
        @media (prefers-reduced-motion) {
			${styles}
		}
	`;
}
