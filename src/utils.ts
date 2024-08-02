import { COLOR_CODE } from './constants'

/**
 * target이 COLOR_CODE 객체의 키 중 하나인지 확인합니다.
 * @param target 검사할 값
 * @returns 일치시 true, 불일치시 false를 반환합니다.
 */
export const isColorCodeKey = (target: unknown): target is keyof typeof COLOR_CODE => {
  return typeof target === 'string' && target in COLOR_CODE
}

/**
 * target이 null 또는 undefined인지 확인합니다.
 * @param target 검사할 값
 * @returns null 또는 undefined이면 true, 그렇지 않으면 false를 반환합니다.
 */
export const isNil = (target: unknown): target is null | undefined => {
  return target === null || target === undefined
}
