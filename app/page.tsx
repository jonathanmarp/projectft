import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section>
      {/* Home Page */}
      <div className="w-[100vw] h-[90vh] flex items-center justify-center" id="home">
        <div className="w-[80%] h-[90%] flex justify-center items-center">
          {/* Image */}
          <div className="w-[30%] h-[70%] bg-gradient-to-r from-gray-800 from-10%">
            
          </div>

          {/* Text */}
          <div className="h-[70%] w-[60%]">
            <div className="px-10 py-5">
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Something !
              </h1>

              <h2 className="scroll-m-20 mt-4 pb-2 pt-2 text-3xl font-semibold text-muted-foreground transition-colors first:mt-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text 
              </h2>

              <Button className="mt-4">
                Next !
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
