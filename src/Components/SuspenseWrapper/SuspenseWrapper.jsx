import { Suspense } from "react";
import Loading from "../Loading/Loading";


export default function SuspenseWrapper({element}) {
    return (
        <Suspense fallback={<Loading />}>
            {element}
        </Suspense>
    )
}