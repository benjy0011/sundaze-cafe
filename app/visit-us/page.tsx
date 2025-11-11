'use client'

import Input from "@/components/Input"
import { Button } from "@/components/ui/button"
import { GET_IN_TOUCH } from "@/lib/constants"
import { getCurrentDateFormatted } from "@/lib/date"
import Image from "next/image"
import { ChangeEvent, useState } from "react"
import { toast } from "sonner"

import dynamic from 'next/dynamic'

// Dynamically import Map component so it's only rendered on the client
const Map = dynamic(() => import('@/components/LeafletMap'), { ssr: false })

const Page = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Clear form after submit
    setForm({ name: "", phone: "", email: "", message: "" })

    toast("We recieved your message. Thanks!", { description: getCurrentDateFormatted() })

    setLoading(false);
  }

  return (
    <>
      <section id="get-in-touch" className="get-in-touch">
        <div className="w-[80vw] lg:w-full h-full lg:px-5 flex max-lg:flex-col items-stretch">

          {/* Form section */}
          <div className="flex-[1.2] lg:border-r-2 border-foreground max-lg:py-10 lg:px-15 flex flex-col">
            <h4 className="text-5xl mb-8">Get in touch</h4>

            <h6 className="font-playfair-display font-bold text-2xl mb-3">Send a Message</h6>

            <p className="font-nunito-sans italic">Have a question or just want to say hi? <br />Drop us a message — we’d love to hear from you. </p>


            <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-15">

              <div className="flex justify-between gap-6">
                <div className="flex-1">
                  <h6 className="contact-us-form-label">Name</h6>
                  <Input name="name" value={form.name} onChange={handleChange} />
                </div>

                <div className="flex-1">
                  <h6 className="contact-us-form-label">Phone Number</h6>
                  <Input name="phone" type="tel" value={form.phone} onChange={handleChange} />
                </div>
              </div>
              
              <div className="flex-1">
                <h6 className="contact-us-form-label">Email Address</h6>
                <Input name="email" type="email" value={form.email} onChange={handleChange} />
              </div>

              <div className="flex-1">
                <h6 className="contact-us-form-label">Message</h6>
                <div className="input-wrapper">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    className="textfield"
                  />
                </div>
              </div>

              <div className="w-full flex justify-end">
                <Button type="submit" size={"lg"} className="font-playfair-display hover:cursor-pointer lg:text-lg" loading={loading}>
                  Submit
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex-[1] flex flex-col gap-12 lg:gap-15 max-lg:py-25 lg:p-20">
            {GET_IN_TOUCH.map(( { description, link, ...imgInfo }, idx ) => (
              <div
                key={`${idx}-${imgInfo.alt}`}
                className="flex gap-4 items-center hover:cursor-pointer"
                onClick={() => {
                  window.open(link, '_blank');
                }}
              >
                <div className="flex-[1] size-10 lg:size-12 flex justify-center items-center">
                  <Image
                    {...imgInfo}
                    className="h-full w-auto"
                  />
                </div>
                

                <div className="flex-[4]">
                  <p className="font-nunito-sans lg:text-lg">{description}</p>
                </div>
              </div>  
            ))

            }

            <div className="max-lg:hidden">
              <Map />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full my-10 px-2 flex justify-center items-center lg:hidden">
        <Map />
      </section>
    </>
  )
}
export default Page