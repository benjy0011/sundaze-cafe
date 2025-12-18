'use client'

import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsList,
  TabsTrigger,
} from '@/components/animate-ui/components/animate/tabs';
import MenuCard from './MenuCard';
import { useWindowSize } from '@/hooks/useScreenSize';
import { cn } from '@/lib/utils';
import { useEffect, useMemo, useState } from "react";


export interface MenuCatalogueType {
    value: string;
    label: string;
    items: {
        id: number;
        src: string;
        name: string;
    }[];
};

interface MenuCatalogueProps {
  menus: MenuCatalogueType[]
}

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

const MenuCatalogue = ({
  menus
} : MenuCatalogueProps) => {
  const { xs, sm, md, lg } = useWindowSize();

  const menuTabs = useMemo(() => {
    return menus?.map(( { value, label, items } ) => {
      return {
        value,
        label,
        items: items.sort((a , b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }))
      }
    })
  }, [menus])

  const [ tabValue, setTabValue ] = useState<string>(menuTabs[0].value);

  useEffect(() => {
    setTabValue(menuTabs[0].value);
  }, [menuTabs[0].value])

  return (
    <div className="flex w-full flex-col gap-6 items-center p-10">
      <Tabs className="flex w-full justify-center items-center" value={tabValue}>
        <TabsList className="flex gap-2 lg:gap-15 justify-between font-playfair-display text-xl">
          {menuTabs.map(({ value, label }, idx) => (
            <TabsTrigger className="tabs-trigger" value={value} key={`${label}-${idx}`} onClick={() => setTabValue(value)}>{label}</TabsTrigger>
          ))}

        </TabsList>

        <TabsContents className={cn("py-6 h-full", getMenuGridWidth(xs, sm, md, lg))}>
          {menuTabs.map(({ value, label, items  }, idx) => (
            <TabsContent value={value} key={`${label}-${idx}`} className={ cn("menu-tab-list")}>
              {items.map(( { id, name, src }, idx) => (
                <MenuCard key={idx} src={src} name={name} />
              ))}
            </TabsContent>
          ))}
        </TabsContents>

      </Tabs>
    </div>
  )
}
export default MenuCatalogue