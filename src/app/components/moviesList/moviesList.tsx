export default function MoviesList({
  children,
  listTitle,
}: {
  children: React.ReactNode
  listTitle: string
}) {
  return (
    <main className="flex flex-col space-y-2 p-6">
      <p className="text-lg font-bold">{listTitle}</p>
      <div className="flex flex-wrap space-y-2 items-center justify-between">
        {children}
      </div>
    </main>
  )
}
