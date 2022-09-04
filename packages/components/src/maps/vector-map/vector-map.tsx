/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState, useEffect } from "react";
import { VectorMap as VectorMapComponent } from "@south-paw/react-vector-maps";
import worldLowRes from "@doar/shared/data/maps/world-low-res.json";
import { LayoutProps } from "@doar/shared/styled";
import { StyledMap } from "./style";

export interface VectorMapLayer {
    /** Unique ID of each layer. */
    id: string;
    /** Name of the layer. */
    name: string;
    /** SVG path for the layer. */
    d: string;
}
export interface VectorMapProps {
    /** Unique ID of the SVG element. */
    id: string;
    /** Name of the map. */
    name: string;
    /** View box for the map. */
    viewBox: string;
    /** Layers that represent the regions of the map. */
    layers: VectorMapLayer[];
    /** Tab index for each layer. Set to '-1' to disable layer focusing. */
    tabIndex?: number;
    /** Props to spread onto each layer. */
    layerProps?: any;
    /** Layer IDs to 'select' with the 'aria-checked' attribute. */
    checkedLayers?: string[];
    /** Layer IDs to 'select' with the 'aria-current' attribute. */
    currentLayers?: string[];
}

interface IProps extends LayoutProps {
    /**
     * Map's Background Color. Default color is `#fff`
     */
    backgroundColor?: string;
    /**
     * Map's Border Color. Default color is `transparent`
     */
    borderColor?: string;
    /**
     * Map's Border Color. Default color is `#8392a5`
     */
    color?: string;
    /**
     * Layer IDs to 'select' with the 'aria-checked' attribute.
     */
    checkedLayers?: string[];
    /**
     * Selected Layer's Color. Default color is `rgba(56, 43, 168, 1)`
     */
    selectedColor?: string;
    /**
     * Pass `true` to enable tooltip
     */
    tooltip?: boolean;
    /**
     * Map's JSON Data. `https://react-vector-maps.netlify.app/maps` visit this link to get your desired data. Default is `World Low Res`
     */
    data: VectorMapProps;
}

export const VectorMap: FC<IProps> = ({
    width,
    height,
    backgroundColor,
    borderColor,
    color,
    checkedLayers,
    selectedColor,
    tooltip,
    data = worldLowRes,
}) => {
    const [selected, setSelected] = useState<string[]>([]);
    const [tooltipeName, setTooltipeName] = useState<string>();
    const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);
    const [tooltipY, setTooltipY] = useState<number>(0);
    const [tooltipX, setTooltipX] = useState<number>(0);

    const onClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const id: string = (target.attributes as any)?.id.value;
        if (selected.includes(id)) {
            setSelected(selected.filter((sid) => sid !== id));
        } else {
            setSelected([...selected, id]);
        }
    };

    const onMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const name: string = (target.attributes as any)?.name.value;
        setTooltipeName(name);
        setIsTooltipVisible(true);
    };

    const onMouseMove = (e: MouseEvent) => {
        setTooltipY(e.clientY - 20);
        setTooltipX(e.clientX - 10);
    };

    const onMouseOut = () => {
        setTooltipeName("");
        setIsTooltipVisible(false);
    };

    useEffect(() => {
        if (!checkedLayers) return;
        setSelected([...checkedLayers]);
    }, [checkedLayers]);

    return (
        <StyledMap
            width={width}
            height={height}
            $bg={backgroundColor}
            $bdc={borderColor}
            $color={color}
            $slColor={selectedColor}
            className="vector-map"
        >
            <VectorMapComponent
                {...data}
                checkedLayers={selected}
                layerProps={{ onClick, onMouseOver, onMouseOut, onMouseMove }}
            />
            {tooltip && isTooltipVisible && (
                <div
                    className="tooltip"
                    style={{ top: tooltipY, left: tooltipX }}
                >
                    {tooltipeName}
                </div>
            )}
        </StyledMap>
    );
};

VectorMap.defaultProps = {
    backgroundColor: "transparent",
    borderColor: "#fff",
    color: "#8392a5",
    selectedColor: "rgba(56, 43, 168, 1)",
    width: "90%",
    height: "500px",
    tooltip: false,
};
