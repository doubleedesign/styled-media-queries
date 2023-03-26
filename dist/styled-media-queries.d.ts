import { SimpleInterpolation } from 'styled-components';
/**
 * Apply CSS at the given width breakpoint and above
 *
 * @param {number} breakpoint
 * @param {SimpleInterpolation} styles
 */
export declare function viewportWidthUp(breakpoint: number, styles: SimpleInterpolation): import("styled-components").FlattenSimpleInterpolation;
/**
 * Apply CSS at the given width breakpoint and above
 * Alias for viewportWidthUp
 *
 * @param {number} breakpoint
 * @param {SimpleInterpolation} styles
 */
export declare function breakpointUp(breakpoint: number, styles: SimpleInterpolation): import("styled-components").FlattenSimpleInterpolation;
/**
 * Apply CSS below the given width breakpoint
 * Follows Bootstrap's convention of subtracting 0.02px for the upper-bound
 * for more reliable results on high-res screens
 * @see https://getbootstrap.com/docs/5.2/layout/breakpoints/
 *
 * @param {number} breakpoint
 * @param {SimpleInterpolation} styles
 */
export declare function viewportWidthDown(breakpoint: number, styles: SimpleInterpolation): import("styled-components").FlattenSimpleInterpolation;
/**
 * Apply CSS below the given width breakpoint
 * Alias for viewportWidthDown
 *
 * @param {number} breakpoint
 * @param {SimpleInterpolation} styles
 */
export declare function breakpointDown(breakpoint: number, styles: SimpleInterpolation): import("styled-components").FlattenSimpleInterpolation;
/**
 * Apply CSS between two given width breakpoints
 * Follows Bootstrap's convention of subtracting 0.02px for the upper-bound
 * for more reliable results on high-res screens
 * @see https://getbootstrap.com/docs/5.2/layout/breakpoints/
 *
 * @param {number} startBreakpoint
 * @param {number} endBreakpoint
 * @param {SimpleInterpolation} styles
 */
export declare function viewportWidthBetween(startBreakpoint: number, endBreakpoint: number, styles: SimpleInterpolation): import("styled-components").FlattenSimpleInterpolation;
/**
 * Apply CSS between two given width breakpoints
 * Alias for viewportWidthBetween
 *
 * @param {number} startBreakpoint
 * @param {number} endBreakpoint
 * @param {SimpleInterpolation} styles
 */
export declare function breakpointBetween(startBreakpoint: number, endBreakpoint: number, styles: SimpleInterpolation): import("styled-components").FlattenSimpleInterpolation;
/**
 * Apply CSS at the given height breakpoint and above
 *
 * @param {number} height
 * @param {SimpleInterpolation} styles
 */
export declare function viewportHeightUp(height: number, styles: SimpleInterpolation): import("styled-components").FlattenSimpleInterpolation;
/**
 * Apply CSS below the given height breakpoint
 *
 * @param {number} height
 * @param {SimpleInterpolation} styles
 */
export declare function viewportHeightDown(height: number, styles: SimpleInterpolation): import("styled-components").FlattenSimpleInterpolation;
/**
 * Apply CSS at the given aspect ratio and above
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/aspect-ratio
 *
 * @param {number} width
 * @param {number} height
 * @param {SimpleInterpolation} styles
 */
export declare function viewportMinAspectRatio(width: number, height: number, styles: SimpleInterpolation): import("styled-components").FlattenSimpleInterpolation;
/**
 * Apply CSS at the given aspect ratio and below
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/aspect-ratio
 *
 * @param {number} width
 * @param {number} height
 * @param {SimpleInterpolation} styles
 */
export declare function viewportMaxAspectRatio(width: number, height: number, styles: SimpleInterpolation): import("styled-components").FlattenSimpleInterpolation;
/**
 * Apply styles for users who have settings indicating a preference for lower contrast
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast
 *
 * @param {SimpleInterpolation} styles
 */
export declare function userPrefersLessContrast(styles: SimpleInterpolation): import("styled-components").FlattenSimpleInterpolation;
/**
 * Apply styles for users who have settings indicating a preference for higher contrast
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast
 *
 * @param {SimpleInterpolation} styles
 */
export declare function userPrefersMoreContrast(styles: SimpleInterpolation): import("styled-components").FlattenSimpleInterpolation;
/**
 * Apply styles for users who have settings indicating a preference for reduced motion
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast
 *
 * @param {SimpleInterpolation} styles
 */
export declare function userPrefersReducedMotion(styles: SimpleInterpolation): import("styled-components").FlattenSimpleInterpolation;
