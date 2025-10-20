import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsList,
  TabsTrigger,
} from '@/components/animate-ui/components/animate/tabs';
import { Button } from '@/components/ui/button';


const MenuCatalogue = () => {
  return (
    <div className="flex w-full flex-col gap-6 items-center p-10">
      <Tabs className="flex w-full justify-center items-center" defaultValue="account">
        <TabsList className="flex gap-2 lg:gap-15 justify-between font-playfair-display text-xl">
          
          <TabsTrigger className="tabs-trigger" value="account">Account</TabsTrigger>
          <TabsTrigger className="tabs-trigger" value="password">Password</TabsTrigger>
          <TabsTrigger className="tabs-trigger" value="account1">Account1</TabsTrigger>
          <TabsTrigger className="tabs-trigger" value="password1">Password1</TabsTrigger>

        </TabsList>
          <TabsContents className="py-6">
            <TabsContent value="account" className="flex flex-col gap-6">

                <h6>Account</h6>
                <p>
                  Make changes to your account here. Click save when you&apos;re
                  done.
                </p>

              <div className="grid gap-6">
                <div className="grid gap-3">
                  <p>Name</p>
                  <input id="tabs-demo-name" defaultValue="Pedro Duarte" />
                </div>
              </div>

                <Button>Save changes</Button>

            </TabsContent>
            <TabsContent value="password" className="flex flex-col gap-6">

                <h6>Password</h6>
                <p>
                  Change your password here. After saving, you&apos;ll be logged
                  out.
                </p>


                <div className="grid gap-3">
                  <p>Current password</p>
                  <input id="tabs-demo-current" type="password" />
                </div>
                <div className="grid gap-3">
                  <label htmlFor="tabs-demo-new">New password</label>
                  <input id="tabs-demo-new" type="password" />
                </div>


                <Button>Save password</Button>

            </TabsContent>
          </TabsContents>

      </Tabs>
    </div>
  )
}
export default MenuCatalogue