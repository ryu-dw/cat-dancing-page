/**
 * 페이지 공통 레이아웃 (헤더 / 메인 / 푸터)
 */
function Layout({ children }) {
  return (
    <div className="layout">
      <header className="layout__header">
        <h1 className="layout__title">🐱 춤추는 고양이</h1>
        <p className="layout__subtitle">고양이를 눌러서 춤을 시작하거나 멈춰보세요</p>
      </header>
      <main className="layout__main">{children}</main>
      <footer className="layout__footer">
        <small>Made with React + CSS keyframes</small>
      </footer>
    </div>
  )
}

export default Layout
