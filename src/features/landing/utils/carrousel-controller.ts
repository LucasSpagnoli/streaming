import { useState } from "react";

const useCarrouselController = () => {

    const [index, setIndex] = useState(0);

    const prev = () => {
        const i = index === 0 ? 2 : index - 1;
        setIndex(i)
    }
    const next = () => {
        const i = index === 2 ? 0 : index + 1;
        setIndex(i)
    }

    return { index, prev, next };
}

export default useCarrouselController;