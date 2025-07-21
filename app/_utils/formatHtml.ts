// ฟังก์ชันสำหรับ decode HTML entities และตัดข้อความ
export const truncateText = (
  htmlContent: string,
  maxLength: number = 100
): string => {
  if (typeof window !== 'undefined') {
    // สำหรับ client-side: ใช้ DOM API (วิธีที่ปลอดภัยและแม่นยำที่สุด)
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    const plainText = tempDiv.textContent || tempDiv.innerText || '';

    // ตรวจสอบความยาวและตัดข้อความ
    return plainText.length > maxLength
      ? plainText.slice(0, maxLength) + '...'
      : plainText;
  } else {
    // สำหรับ server-side: ใช้ regular expression ที่ครอบคลุมมากขึ้น
    const plainText = htmlContent
      // ลบ HTML tags ทั้งหมด รวมถึง attributes ที่ซับซ้อน
      .replace(/<[^>]*>/g, '')
      // ลบ HTML comments
      .replace(/<!--[\s\S]*?-->/g, '')
      // แทนที่ HTML entities ทั่วไป
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&#x27;/g, "'")
      .replace(/&hellip;/g, '...')
      .replace(/&mdash;/g, '—')
      .replace(/&ndash;/g, '–')
      .replace(/&rsquo;/g, "'")
      .replace(/&lsquo;/g, "'")
      .replace(/&rdquo;/g, '"')
      .replace(/&ldquo;/g, '"')
      .replace(/&copy;/g, '©')
      .replace(/&reg;/g, '®')
      .replace(/&trade;/g, '™')
      // แทนที่ numeric HTML entities (&#xxx; และ &#xxxx;)
      .replace(/&#\d+;/g, ' ')
      // แทนที่ hex HTML entities (&#xXX; และ &#xXXX;)
      .replace(/&#x[0-9a-fA-F]+;/g, ' ')
      // แทนที่ช่องว่างหลายตัวซ้อนเป็นช่องว่างเดียว
      .replace(/\s+/g, ' ')
      // ลบช่องว่างหน้าหลัง
      .trim();

    return plainText.length > maxLength
      ? plainText.slice(0, maxLength) + '...'
      : plainText;
  }
};
