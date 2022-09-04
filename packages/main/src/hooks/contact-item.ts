import { useState, MouseEvent } from "react";
import { useWindowSize } from "@doar/shared/hooks";
import { useAppDispatch } from "../redux/hooks";
import { toggleSidebar } from "../redux/slices/ui";

interface IReturn {
    clickHandler: (e: MouseEvent<HTMLDivElement>) => void;
    activeId: string;
}

export default (defaultActive: string): IReturn => {
    const [activeId, setActiveId] = useState<string>(defaultActive);
    const dispatch = useAppDispatch();
    const { width } = useWindowSize();
    const clickHandler = (e: MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;
        let targetId = activeId;
        if (!target.classList.contains("media")) {
            const id = target.closest(".media")?.id;
            targetId = id || activeId;
        } else {
            targetId = target.id || activeId;
        }
        setActiveId(targetId);
        if (width && width < 992) {
            dispatch(toggleSidebar({ isOpen: undefined }));
        }
    };

    return { clickHandler, activeId };
};
