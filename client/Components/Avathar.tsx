import Image from "next/image"
import { useRouter } from "next/router"
import { useCallback } from "react"

interface AvatharProp {
    userId: string
    isLarge?: boolean
    hasBorder?: boolean
}

const Avathar: React.FC<AvatharProp> = ({
    userId, hasBorder, isLarge
}) => {
    const router = useRouter()
    const onClick = useCallback((event: any) => {
        event.stopPropagation();
        const url = `/users/${userId}`
        router.push(url)
    }, [router, userId])

    return (
        <div className={`
        ${hasBorder ? 'border-4 border-black' : ''}
        ${isLarge ? 'h-32' : 'h-12'}
        ${isLarge ? 'w-32' : 'w-12'}
        rounded-full hover:opacity-90 transition cursor-pointer relative
        `}>
            <Image
                fill
                style={{
                    objectFit: "cover",
                    borderRadius: '100%'
                }}
                alt="Avathar"
                onClick={onClick}
                src='/image/avathar.jpg'
            />
        </div>
    )
}

export default Avathar