import { Children, FC, FunctionComponent, ReactChild, ReactText } from "react";
import { LayoutProps } from "@doar/shared/styled";
import {
    GoogleMap as GoogleMapComponent,
    useJsApiLoader,
    Marker as MarkerComponent,
} from "@react-google-maps/api";
import { MapKey } from "@doar/shared/data";
import { StyledMap } from "./style";

interface IProps extends LayoutProps {
    /**
     * Required. Pass google maps latitude
     */
    lat: number;
    /**
     * Required. Pass google maps longitude
     */
    lng: number;
    /**
     * 	The initial Map zoom level. Required. Valid values: Integers between zero, and up to the supported maximum zoom level.
     */
    zoom?: number;
}

type IChild = Exclude<ReactChild, ReactText>;

export const GoogleMap: FC<IProps> = ({
    width,
    height,
    lat,
    lng,
    zoom,
    children,
}) => {
    const { isLoaded, loadError } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: MapKey,
    });
    if (loadError) {
        return <div>Map cannot be loaded right now, sorry.</div>;
    }
    const RenderChild = Children.map(children, (el) => {
        const child = el as IChild;
        if (child !== null) {
            const childType = child.type as FunctionComponent;
            const name = childType.displayName || childType.name;
            if (name === "GoogleMapMarker") {
                return <child.type lat={lat} lng={lng} {...child.props} />;
            }
        }
        return null;
    });
    return isLoaded ? (
        <StyledMap width={width} height={height}>
            <GoogleMapComponent
                mapContainerStyle={{ width: "100%", height: "100%" }}
                center={{ lat, lng }}
                zoom={zoom}
            >
                {RenderChild}
            </GoogleMapComponent>
        </StyledMap>
    ) : (
        <div>Map is loading.</div>
    );
};

interface IMarkerProps {
    /**
     * Required. Pass google maps latitude
     */
    lat: number;
    /**
     * Required. Pass google maps longitude
     */
    lng: number;
}

export const GoogleMapMarker: FC<IMarkerProps> = ({ lat, lng }) => {
    return <MarkerComponent position={{ lat, lng }} />;
};

GoogleMap.defaultProps = {
    width: "100%",
    height: "400px",
    lat: -3.745,
    lng: -38.523,
    zoom: 12,
};
