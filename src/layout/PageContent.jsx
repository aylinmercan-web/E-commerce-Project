function PageContent({ children }) {
  return (
    <main className="flex flex-col w-full flex-1">
      {children}
    </main>
  )
}

export default PageContent