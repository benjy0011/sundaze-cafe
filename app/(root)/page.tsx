import { Button } from "@/components/animate-ui/components/buttons/button";


export default function Home() {
  return (
    <div className="home-page">
      <div className="size-full relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-14">
          <p className="text-white text-7xl text-center leading-25">Savor the Moment <br /> In Every Ray of Light</p>

          <Button
            className="font-playfair-display"
            variant="secondary"
            size="xl"
          >
            About Us
          </Button>
        </div>
      </div>
    </div>
  );
}
