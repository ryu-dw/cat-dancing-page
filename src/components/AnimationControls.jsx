import { DANCE_MOVES } from '../hooks/useAnimation'

/**
 * 애니메이션 제어 UI (재생/정지, 동작 선택, 속도 조절)
 */
function AnimationControls({
  isPlaying,
  move,
  speed,
  minSpeed,
  maxSpeed,
  onToggle,
  onMoveChange,
  onNextMove,
  onSpeedChange,
}) {
  return (
    <section className="controls" aria-label="애니메이션 제어">
      <div className="controls__row">
        <button
          type="button"
          className={`btn btn--primary ${isPlaying ? 'btn--active' : ''}`}
          onClick={onToggle}
          aria-pressed={isPlaying}
        >
          {isPlaying ? '⏸ 정지' : '▶ 시작'}
        </button>
        <button type="button" className="btn" onClick={onNextMove}>
          ⏭ 다음 동작
        </button>
      </div>

      <fieldset className="controls__moves">
        <legend className="controls__label">춤 동작</legend>
        <div className="controls__chips" role="radiogroup" aria-label="춤 동작 선택">
          {DANCE_MOVES.map((item) => {
            const checked = item.id === move
            return (
              <label
                key={item.id}
                className={`chip ${checked ? 'chip--checked' : ''}`}
              >
                <input
                  type="radio"
                  name="move"
                  value={item.id}
                  checked={checked}
                  onChange={() => onMoveChange(item.id)}
                  className="sr-only"
                />
                <span aria-hidden="true">{item.emoji}</span> {item.label}
              </label>
            )
          })}
        </div>
      </fieldset>

      <div className="controls__speed">
        <label htmlFor="speed" className="controls__label">
          속도 <output htmlFor="speed">{speed.toFixed(1)}x</output>
        </label>
        <input
          id="speed"
          type="range"
          min={minSpeed}
          max={maxSpeed}
          step="0.1"
          value={speed}
          onChange={(e) => onSpeedChange(e.target.value)}
          aria-valuetext={`${speed.toFixed(1)}배속`}
        />
      </div>

      <p className="controls__help">
        키보드: <kbd>Space</kbd> 재생/정지, <kbd>→</kbd> 다음 동작
      </p>
    </section>
  )
}

export default AnimationControls
