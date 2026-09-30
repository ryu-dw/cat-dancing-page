import { useEffect } from 'react'
import Layout from './components/Layout'
import DancingCat from './components/DancingCat'
import AnimationControls from './components/AnimationControls'
import { useAnimation } from './hooks/useAnimation'

function App() {
  const animation = useAnimation('wiggle')
  const { toggle, nextMove } = animation

  // 전역 키보드 단축키: Space = 재생/정지, ArrowRight = 다음 동작
  useEffect(() => {
    const handleKey = (event) => {
      const tag = event.target.tagName
      if (tag === 'INPUT' || tag === 'BUTTON' || tag === 'LABEL') return
      if (event.code === 'Space') {
        event.preventDefault()
        toggle()
      } else if (event.code === 'ArrowRight') {
        nextMove()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [toggle, nextMove])

  return (
    <Layout>
      <DancingCat
        isPlaying={animation.isPlaying}
        move={animation.move}
        speed={animation.speed}
        onToggle={toggle}
      />
      <AnimationControls
        isPlaying={animation.isPlaying}
        move={animation.move}
        speed={animation.speed}
        minSpeed={animation.minSpeed}
        maxSpeed={animation.maxSpeed}
        onToggle={toggle}
        onMoveChange={animation.setMove}
        onNextMove={nextMove}
        onSpeedChange={animation.changeSpeed}
      />
    </Layout>
  )
}

export default App
