import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";
import { Button } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/common/map/googleMap.scss";

const containerStyle = {
  width: "100%",
  height: "65vh",
};

const defaultCenter = {
  lat: 6.9271,
  lng: 79.8612,
}; // Sri Lanka center

interface GoogleMapViewProps {
  doctors: {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
    specialty: string;
  }[];
  userLocation: { lat: number; lng: number } | null;
}

const DoctorMap: React.FC<GoogleMapViewProps> = ({ doctors, userLocation }) => {
  const navigate = useNavigate();

  const gMapKey = import.meta.env.VITE_GOOGLE_MAPS_PUBLIC_KEY as string;

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: gMapKey,
    libraries: ["places"],
  });

  const [selectedDoctor, setSelectedDoctor] = useState(null);

  if (!isLoaded) return <p>Loading Map...</p>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={userLocation || defaultCenter}
      zoom={15}
    >
      {/* User Location Marker */}
      {userLocation && <Marker position={userLocation} label="You" />}

      {/* Doctor Markers */}
      {doctors.map((doctor: any) => (
        <Marker
          key={doctor.id}
          position={{ lat: doctor.latitude, lng: doctor.longitude }}
          onClick={() => {
            setSelectedDoctor(doctor);
          }}
        />
      ))}

      {/* Info Window for Doctor */}
      {selectedDoctor && (
        <InfoWindow
          position={{
            lat: selectedDoctor.latitude,
            lng: selectedDoctor.longitude,
          }}
          onCloseClick={() => setSelectedDoctor(null)}
        >
          <div className="mt-3">
            <h3 className="font-size-4 m-0 pe-5">{selectedDoctor.name}</h3>
            <p className="font-size-5 mb-2-0">{selectedDoctor.specialty}</p>
            <Button
              className="py-3 font-size-5 w-100 rounded-3"
              size="middle"
              type="default"
              onClick={() =>
                navigate(`/doctor-profile/${selectedDoctor?.id}`, {
                  state: { doctorId: selectedDoctor?.id },
                })
              }
            >
              View Details
            </Button>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default DoctorMap;
