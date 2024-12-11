import React from 'react'
import Image from 'next/image'
function Cards() {
  return (
    <div>
         <div>
         <section>
  <div className="flex flex-col xl:flex-row  justify-center md:justify-center xl:justify-between items-center my-[100px] xl:my-[200px] px-4 xl:px-0 gap-3 xl:gap-0">
    <Image
      src="/Frame.png"
      width={639}
      height={216}
      alt="img"
      className="rounded-xl xl:rounded-none"
    />
    <Image
      src="/Frame2.png"
      width={639}
      height={216}
      alt="img"
      className="rounded-xl xl:rounded-l-xl"
    />
  </div>
</section>
    </div>
    </div>
  )
}

export default Cards