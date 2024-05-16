import dynamic from "next/dynamic";

const Restaurant = dynamic(() => import("./_internal/components/restaurant"))

export default function Page({ params }: { params: { id: string } }) {
    return (
        <Restaurant id={params.id} />
    )
}