import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsList,
  TabsTrigger,
} from '@/components/animate-ui/components/animate/tabs';
import { Button } from '@/components/ui/button';
import MenuCard from './MenuCard';
import { useWindowSize } from '@/hooks/useScreenSize';
import { cn } from '@/lib/utils';


function getMenuGridWidth (
  xs: boolean,
  sm: boolean,
  md: boolean,
  lg: boolean,
) {
  return xs
    ? "w-[220px]"
    : sm
    ? "w-[460px]"
    : md
    ? "w-[460px]"
    : lg
    ? "w-[1000px]"
    : "w-[1000px]"
}

const MenuCatalogue = () => {
  const { xs, sm, md, lg } = useWindowSize();

  return (
    <div className="flex w-full flex-col gap-6 items-center p-10">
      <Tabs className="flex w-full justify-center items-center" defaultValue="breakfast-set">
        <TabsList className="flex gap-2 lg:gap-15 justify-between font-playfair-display text-xl">
          
          <TabsTrigger className="tabs-trigger" value="breakfast-set">Breakfast Set</TabsTrigger>
          <TabsTrigger className="tabs-trigger" value="noodles">Noodles</TabsTrigger>
          <TabsTrigger className="tabs-trigger" value="rice">Rice</TabsTrigger>
          <TabsTrigger className="tabs-trigger" value="vegan">Vegan</TabsTrigger>

        </TabsList>

        <TabsContents className={cn("py-6 h-full", getMenuGridWidth(xs, sm, md, lg))}>
          <TabsContent value="breakfast-set" className="menu-tab-list">
            {Array.from({ length: 8 }).map((_, idx) => (
              <MenuCard key={idx} />
            ))}
          </TabsContent>
          <TabsContent value="noodles" className="menu-tab-list">
            {Array.from({ length: 8 }).map((_, idx) => (
              <MenuCard key={idx} />
            ))}
          </TabsContent>
          <TabsContent value="rice" className="menu-tab-list">
            {Array.from({ length: 8 }).map((_, idx) => (
              <MenuCard key={idx} />
            ))}
          </TabsContent>
          <TabsContent value="vegan" className="menu-tab-list">
            {Array.from({ length: 8 }).map((_, idx) => (
              <MenuCard key={idx} />
            ))}
          </TabsContent>
        </TabsContents>

      </Tabs>
    </div>
  )
}
export default MenuCatalogue