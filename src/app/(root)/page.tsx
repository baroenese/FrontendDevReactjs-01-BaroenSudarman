import dynamic from "next/dynamic"

const Restaurant = dynamic(() => import("./_internal/components/restaurant"))

export default function Home() {
    return <Restaurant />
}
