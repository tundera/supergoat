import { render as defaultRender } from '@testing-library/react'
import { renderHook as defaultRenderHook } from '@testing-library/react-hooks'
export * from '@testing-library/react'
export declare function render(
  ui: RenderUI,
  { wrapper, ...options }?: RenderOptions,
): import('@testing-library/react').RenderResult<
  typeof import('@testing-library/dom/types/queries'),
  HTMLElement
>
export declare function renderHook(
  hook: RenderHook,
  { wrapper, ...options }?: RenderHookOptions,
): import('@testing-library/react-hooks').RenderHookResult<
  unknown,
  unknown,
  import('@testing-library/react-hooks').Renderer<unknown>
>
declare type DefaultParams = Parameters<typeof defaultRender>
declare type RenderUI = DefaultParams[0]
declare type RenderOptions = DefaultParams[1]
declare type DefaultHookParams = Parameters<typeof defaultRenderHook>
declare type RenderHook = DefaultHookParams[0]
declare type RenderHookOptions = DefaultHookParams[1]
