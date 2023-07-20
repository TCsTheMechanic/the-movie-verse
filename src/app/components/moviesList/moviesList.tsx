export default function MoviesList({
  children,
  listType,
}: {
  children: React.ReactNode
  listType: string
}) {
  return (
    <main className="flex flex-col space-y-2 p-6">
      <p className="font-bold">{listType}</p>
      <div className="flex flex-wrap space-y-2 items-center justify-between">
        {children}
      </div>
    </main>
  )
}
