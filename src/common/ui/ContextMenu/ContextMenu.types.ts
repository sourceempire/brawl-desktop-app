/**
 * In pixels
 */
export type Position = { top?: number; right?: number; bottom?: number; left?: number };
/**
 * Unit: pixels
 *
 * Left will override right
 */
export type ArrowPosition = { left?: number; right?: number };

export type ContextMenuRef = { contextMenuContainer: HTMLDivElement };
