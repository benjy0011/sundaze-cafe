'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { SUNDAZE_MAP_COORDINATE } from '@/lib/constants'
import Image from 'next/image'

// Fix marker icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

const position: [number, number] = SUNDAZE_MAP_COORDINATE;

const LeafletMap = () => {
  return (
    <div style={{ height: '500px', width: '100%', padding: '10px' }}>
      <MapContainer center={position} zoom={20} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <div className="flex items-center gap-2">
              <Image
                src={"/Sundaze-logo-dark.png"}
                alt="logo"
                width={80}
                height={80}
                className="w-[50px] h-[50px]"
              />

              <h6>Sundaze Coffee! ☕</h6>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default LeafletMap
