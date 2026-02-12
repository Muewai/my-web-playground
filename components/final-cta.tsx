import { Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FinalCta() {
  return (
    <section id="contact" className="bg-primary py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-balance text-3xl font-bold text-primary-foreground lg:text-4xl">
          เริ่มลดค่าไฟวันนี้ พร้อมเพิ่มความปลอดภัยให้บ้านคุณ
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
          ปรึกษาฟรี ประเมินราคาฟรี ไม่มีค่าใช้จ่ายใดๆ
          ทีมผู้เชี่ยวชาญพร้อมดูแลคุณ
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="bg-background text-foreground hover:bg-background/90 text-base px-8 gap-2"
          >
            ขอประเมินฟรี
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8 gap-2 bg-transparent"
          >
            <Phone className="h-4 w-4" />
            โทรหาเรา
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8 gap-2 bg-transparent"
          >
            <MessageCircle className="h-4 w-4" />
            แอดไลน์
          </Button>
        </div>
      </div>
    </section>
  )
}
