// ต้องมีคำว่า export default นำหน้า function เสมอ
export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-white bg-background">
      <h1 className="text-4xl font-bold text-primary mb-4">ยินดีต้อนรับสู่หน้า 2</h1>
      <p className="text-muted-foreground mb-8">นี่คือหน้าใหม่ที่คุณเพิ่งสร้างขึ้นมา!</p>
    </div>
  );
}