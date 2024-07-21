import { Suspense } from "react";
import Loading from "../Loading/Loading";
import Loading2 from '../Loading/Loading2';


export default function SuspenseWrapper({ element, mode = 1 }) {
    return (
        <Suspense fallback={mode === 1 ? <Loading2 /> : <Loading />}>
            {element}
        </Suspense>
    )
}