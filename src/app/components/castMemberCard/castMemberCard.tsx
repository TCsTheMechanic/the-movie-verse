import Image from "next/image"

interface castMemberCardProps {
  imageUrl: string
  name: string
  character: string
  alt: string
}

export default function CastMemberCard({
  imageUrl,
  name,
  character,
  alt,
}: castMemberCardProps) {
  return (
    <div className="flex flex-col bg-zinc-700 rounded-md items-center">
      <Image
        className="rounded-md"
        priority={true}
        width={150}
        height={225}
        src={imageUrl}
        alt={alt}
      />
      <div className="flex flex-col w-36 mt-2">
        <p className="text-sm">
          {name} / {character}
        </p>
      </div>
    </div>
  )
}
