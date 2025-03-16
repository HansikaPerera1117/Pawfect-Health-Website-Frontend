import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


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
          onClick={() => setSelectedDoctor(doctor)}
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
          <div>
            <h3>{selectedDoctor.name}</h3>
            <p>{selectedDoctor.specialty}</p>
            <button
              onClick={() => navigate(`/doctor-profile/${selectedDoctor?.id}`)}
            >
              View Details
            </button>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default DoctorMap;
