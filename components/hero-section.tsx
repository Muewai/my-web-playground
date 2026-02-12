"use client"

import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from "next/image"

const bulletPoints = [
  "สำรวจหน้างานฟรี ไม่มีค่าใช้จ่าย",
  "ผ่อนสบายสูงสุด 84 เดือน",
  "ศูนย์ดูแล 24 ชม. ตลอด 365 วัน",
]

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-solar.jpg"
          alt="Modern house with solar panels"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/20" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-background">
            <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-semibold text-primary">
              Solar + Smart Security
            </span>
            <h1 className="mb-6 text-balance text-4xl font-bold leading-tight lg:text-5xl xl:text-6xl">
              ติดโซลาร์เซลล์วันนี้นะ แถมระบบความปลอดภัยอัจฉริยะ
            </h1>
            <p className="mb-8 text-lg text-background/80 lg:text-xl">
              ลดค่าไฟฟ้าได้ถึง 70% พร้อมระบบ Smart Security ดูแลบ้านคุณ 24
              ชั่วโมง
            </p>
            <ul className="mb-8 flex flex-col gap-3">
              {bulletPoints.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-background/90">{point}</span>
                </li>
              ))}
            </ul>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 lg:hidden"
            >
              ขอประเมินฟรี
            </Button>
          </div>

          <div className="hidden rounded-2xl bg-background p-8 shadow-2xl lg:block">
            <h3 className="mb-6 text-center text-xl font-bold text-foreground">
              ขอใบเสนอราคาฟรี
            </h3>
            <form className="flex flex-col gap-4">
              <div>
                <Label htmlFor="name" className="text-foreground">
                  ชื่อ-นามสกุล
                </Label>
                <Input
                  id="name"
                  placeholder="กรอกชื่อ-นามสกุล"
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-foreground">
                  เบอร์โทรศัพท์
                </Label>
                <Input
                  id="phone"
                  placeholder="0XX-XXX-XXXX"
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="bill" className="text-foreground">
                  ค่าไฟต่อเดือน (บาท)
                </Label>
                <Select>
                  <SelectTrigger id="bill" className="mt-1.5">
                    <SelectValue placeholder="เลือกช่วงค่าไฟ" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3000">น้อยกว่า 3,000 บาท</SelectItem>
                    <SelectItem value="5000">3,000 - 5,000 บาท</SelectItem>
                    <SelectItem value="10000">5,000 - 10,000 บาท</SelectItem>
                    <SelectItem value="20000">10,000 - 20,000 บาท</SelectItem>
                    <SelectItem value="more">มากกว่า 20,000 บาท</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="property" className="text-foreground">
                  ประเภทอสังหาริมทรัพย์
                </Label>
                <Select>
                  <SelectTrigger id="property" className="mt-1.5">
                    <SelectValue placeholder="เลือกประเภท" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="house">บ้านเดี่ยว</SelectItem>
                    <SelectItem value="townhouse">ทาวน์เฮ้าส์</SelectItem>
                    <SelectItem value="condo">คอนโดมิเนียม</SelectItem>
                    <SelectItem value="factory">โรงงาน / อาคาร</SelectItem>
                    <SelectItem value="other">อื่นๆ</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                type="submit"
                size="lg"
                className="mt-2 w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base"
              >
                ขอประเมินฟรี
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                ข้อมูลของคุณจะถูกเก็บเป็นความลับ
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
