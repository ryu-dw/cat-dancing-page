import { useCallback, useState } from 'react'

export const DANCE_MOVES = [
  { id: 'wiggle', label: '흔들기', emoji: '🎵' },
  { id: 'jump', label: '점프', emoji: '⬆️' },
  { id: 'spin', label: '회전', emoji: '🔄' },
  { id: 'bounce', label: '통통', emoji: '🏀' },
  { id: 'party', label: '파티', emoji: '🎉' },
]

const MIN_SPEED = 0.5
const MAX_SPEED = 2

// 시스템 "동작 줄이기" 설정이 켜져 있으면 처음에는 정지 상태로 시작한다
const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

/**
 * 애니메이션 상태(재생 여부, 동작 종류, 속도)를 관리하는 커스텀 훅
 */
export function useAnimation(initialMove = 'wiggle') {
  const [isPlaying, setIsPlaying] = useState(() => !prefersReducedMotion())
  const [move, setMove] = useState(initialMove)
  const [speed, setSpeed] = useState(1)

  const toggle = useCallback(() => setIsPlaying((prev) => !prev), [])
  const play = useCallback(() => setIsPlaying(true), [])
  const pause = useCallback(() => setIsPlaying(false), [])

  const changeSpeed = useCallback((value) => {
    const next = Math.min(MAX_SPEED, Math.max(MIN_SPEED, Number(value)))
    setSpeed(next)
  }, [])

  const nextMove = useCallback(() => {
    setMove((current) => {
      const index = DANCE_MOVES.findIndex((m) => m.id === current)
      return DANCE_MOVES[(index + 1) % DANCE_MOVES.length].id
    })
  }, [])

  return {
    isPlaying,
    move,
    speed,
    toggle,
    play,
    pause,
    setMove,
    nextMove,
    changeSpeed,
    minSpeed: MIN_SPEED,
    maxSpeed: MAX_SPEED,
  }
}
