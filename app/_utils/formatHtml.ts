// ฟังก์ชันสำหรับ decode HTML entities และตัดข้อความ
export const truncateText = (
  htmlContent: string,
  maxLength: number = 100
): string => {
  if (typeof window !== 'undefined') {
    // สำหรับ client-side: ใช้ DOM API
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    const plainText = tempDiv.textContent || tempDiv.innerText || '';

    // ตรวจสอบความยาวและตัดข้อความ
    return plainText.length > maxLength
      ? plainText.slice(0, maxLength) + '...'
      : plainText;
  } else {
    // สำหรับ server-side: ใช้ regular expression เพื่อ decode HTML entities
    const plainText = htmlContent
      .replace(/<[^>]*>/g, '') // ลบ HTML tags
      .replace(/&nbsp;/g, ' ') // แทนที่ &nbsp; ด้วยช่องว่าง
      .replace(/&amp;/g, '&') // แทนที่ &amp; ด้วย &
      .replace(/&lt;/g, '<') // แทนที่ &lt; ด้วย <
      .replace(/&gt;/g, '>') // แทนที่ &gt; ด้วย >
      .replace(/&quot;/g, '"') // แทนที่ &quot; ด้วย "
      .replace(/&#39;/g, "'") // แทนที่ &#39; ด้วย '
      .replace(/&hellip;/g, '...') // แทนที่ &hellip; ด้วย ...
      .trim(); // ลบช่องว่างหน้าหลัง

    return plainText.length > maxLength
      ? plainText.slice(0, maxLength) + '...'
      : plainText;
  }
};
