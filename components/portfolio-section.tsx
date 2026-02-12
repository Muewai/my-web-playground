import Image from "next/image"

const portfolioItems = [
  {
    src: "/images/portfolio-1.jpg",
    alt: "Solar installation on modern house",
    label: "บ้านเดี่ยว 5 kW",
  },
  {
    src: "/images/portfolio-2.jpg",
    alt: "Factory solar panel installation",
    label: "โรงงาน 50 kW",
  },
  {
    src: "/images/portfolio-3.jpg",
    alt: "Townhouse solar installation",
    label: "ทาวน์เฮ้าส์ 3 kW",
  },
  {
    src: "/images/portfolio-4.jpg",
    alt: "Commercial building solar panels",
    label: "อาคารพาณิชย์ 20 kW",
  },
  {
    src: "/images/portfolio-5.jpg",
    alt: "Luxury villa solar installation",
    label: "บ้านหรู 10 kW",
  },
  {
    src: "/images/portfolio-6.jpg",
    alt: "Warehouse solar installation",
    label: "คลังสินค้า 100 kW",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center lg:mb-16">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            ผลงานการติดตั้ง
          </span>
          <h2 className="text-balance text-3xl font-bold text-foreground lg:text-4xl">
            ไว้วางใจโดยลูกค้ากว่า 1,500 โครงการ
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <div
              key={item.label}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-background translate-y-full transition-transform group-hover:translate-y-0">
                  <span className="font-semibold">{item.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
