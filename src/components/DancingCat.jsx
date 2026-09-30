import { useState } from 'react'
import catImage from '../assets/images/cat.svg'

/**
 * 춤추는 고양이 컴포넌트
 * - isPlaying: 애니메이션 재생 여부
 * - move: 춤 동작 종류 (wiggle | jump | spin | bounce | party)
 * - speed: 재생 속도 배율 (1 = 기본)
 * - onToggle: 고양이를 클릭/키보드로 눌렀을 때 재생 토글
 */
function DancingCat({ isPlaying, move, speed, onToggle }) {
  const [isHovered, setIsHovered] = useState(false)

  const duration = `${(1.2 / speed).toFixed(2)}s`
  const className = [
    'cat',
    `cat--${move}`,
    isPlaying ? 'cat--playing' : 'cat--paused',
    isHovered ? 'cat--hovered' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onToggle()
    }
  }

  return (
    <div className="stage">
      <div className="stage__spotlight" aria-hidden="true" />
      <button
        type="button"
        className={className}
        style={{ '--dance-duration': duration }}
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? '고양이 춤 멈추기' : '고양이 춤 시작하기'}
        title="클릭하면 춤을 시작/정지합니다"
      >
        <img className="cat__image" src={catImage} alt="" draggable="false" />
        <span className="cat__shadow" aria-hidden="true" />
      </button>
      <div className="notes" aria-hidden="true">
        <span className="note">🎵</span>
        <span className="note">🎶</span>
        <span className="note">🎵</span>
        <span className="note">🎶</span>
      </div>
      <p className="stage__hint" aria-live="polite">
        {isPlaying ? '🎶 신나게 춤추는 중!' : '😴 쉬는 중... 고양이를 눌러보세요'}
      </p>
    </div>
  )
}

export default DancingCat
