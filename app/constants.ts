import facebookIcon from '@/public/icon/facebook.svg';
import tiktokIcon from '@/public/icon/tiktok.svg';
import youtubeIcon from '@/public/icon/youtube.svg';
import mailIcon from '@/public/icon/mail.svg';

import headAbout from '@/public/headSection/head-about.svg';
import headMedia from '@/public/headSection/head-media.svg';
import headContact from '@/public/headSection/head-contact.svg';

export const HEAD_SECTION_ABOUT = {
  title: 'เกี่ยวกับเรา',
  description:
    'มูลนิธิเครือข่ายครอบครัว ก่อตั้งในปี พ.ศ. 2542 จากการรวมตัวของกลุ่มพ่อแม่ที่ต้องการปฏิรูปการศึกษา พัฒนาสู่การเป็นองค์กรสาธารณกุศลที่มุ่งมั่น สร้างความเข้มแข็งให้ครอบครัวไทย ผ่านความร่วมมือและการมีส่วนร่วมจากทุกภาคส่วน',
  image: headAbout,
};

export const HEAD_SECTION_MEDIA = {
  title: 'สื่อและบทความ',
  description:
    'แหล่งรวมสื่อความรู้ บทความ และแนวคิดเพื่อเสริมสร้างครอบครัวที่เข้มแข็งและสังคมที่เกื้อกูลกัน',
  image: headMedia,
};

export const HEAD_SECTION_CONTACT = {
  title: 'ติดต่อเรา',
  description: '',
  image: headContact,
};

export const MENU_ITEMS = [
  { title: 'หน้าแรก', href: '/' },
  { title: 'เกี่ยวกับเรา', href: '/about' },
  { title: 'ข่าวสาร & กิจกรรม', href: '/news' },
  { title: 'สื่อ & บทความ', href: '/media' },
  { title: 'ติดต่อเรา', href: '/contact' },
];

export const SOCIAL_LINKS = [
  {
    title: 'มูลนิธิเครือข่ายครอบครัว',
    href: 'https://www.facebook.com/profile.php?id=100064714205056',
    icon: facebookIcon,
  },
  {
    title: 'familynetwork2568',
    href: 'https://www.tiktok.com/@familynetwork2568?_t=ZS-8xROcWFnSB5&_r=1',
    icon: tiktokIcon,
  },
  {
    title: 'มูลนิธิเครือข่ายครอบครัว',
    href: 'https://youtube.com/@familynetwork-e1f?si=XY0vZ_P7v2yBTUJn',
    icon: youtubeIcon,
  },
];

export const CONTACT_INFO = [
  {
    title: 'familynetwork2568@gmail.com',
    href: 'mailto:familynetwork2568@gmail.com',
    icon: mailIcon,
  },
];

export const LOCATION_INFO =
  '77/47  ซอยแจ้งวัฒนะ 15 แยก 2 แขวงทุ่งสองห้อง เขตหลักสี่ กรุงเทพมหานคร\n10220';

export const OBJECTIVES = [
  {
    index: 1,
    title: 'พ่อแม่มีส่วนร่วม พัฒนาการเรียนรู้ลูก',
    description:
      'สนับสนุนส่งเสริมบทบาทของพ่อแม่ และครอบครัวเข้ามามีส่วนร่วมในการสร้างสรรค์กระบวนการเรียนรู้ ตลอดจนร่วมจัดการศึกษาให้แก่ลูกและเด็ก',
  },
  {
    index: 2,
    title: 'ปกป้องสิทธิเด็กและครอบครัว',
    description:
      'ร่วมมือกันป้องกันคุ้มครองสิทธิอันชอบธรรมของเด็กและครอบครัวจากการล่วงละเมิดหรือลิดรอนสิทธิเสรีภาพในทุกๆ ด้าน',
  },
  {
    index: 3,
    title: 'รวมพลังครอบครัว ทำกิจกรรมเพื่อส่วนรวม',
    description:
      'ดำเนินการให้เกิดการรวมกลุ่มเป็นองค์กรของพ่อแม่และครอบครัวในรูปแบบต่างๆ เพื่อจัดกิจกรรมสาธารณะประโยชน์ร่วมกัน',
  },
  {
    index: 4,
    title: 'เชื่อมโยงทุกภาคส่วน ร่วมฟื้นฟูครอบครัวไทย',
    description:
      'ระดมความร่วมมือสนับสนุนจากบุคคล องค์กรทั่วไป ทั้งภาครัฐ รัฐวิสาหกิจและเอกชนในทุกๆ ด้าน เพื่อฟื้นฟูสถาบันครอบครัวไทยให้เข้มแข็งมีพลัง',
  },
  {
    index: 5,
    title: 'สืบสานวัฒนธรรมครอบครัวไทย',
    description:
      'ส่งเสริมงานวัฒนธรรม ส่งเสริมสัมพันธภาพความเป็นครอบครัวไทยที่อบอุ่นและเข้มแข็งให้กลับมามีบทบาททางสังคม สืบทอดวัฒนธรรมการเกื้อกูลกันระหว่างสมาชิกในครอบครัวและระหว่างครอบครัว วัฒนธรรมเมตตาผู้น้อยมีสัมมาคารวะผู้อาวุโสของบรรพชนไทย',
  },
  {
    index: 6,
    title: 'ใช้สื่อสร้างสรรค์ พัฒนาเด็กและครอบครัว',
    description:
      'เพื่อใช้สื่อทุกรูปแบบให้เป็นประโยชน์ในการศึกษา พัฒนาเด็กและเครือข่ายครอบครัวในปัจจุบัน',
  },
];

export const COMMITTEE_MEMBERS = [
  {
    name: 'แพทย์หญิง พรรณพิมล วิปุลากร',
    position: 'ประธานกรรมการ',
    image: '/committee/p-1.png',
  },
  {
    name: 'นางสาว จิตตินันท์ เดชะคุปต์',
    position: 'รองประธานกรรมการ',
    image: '/committee/p-2.png',
  },
  {
    name: 'นางสาว พัชรา อุบลสวัสดิ์',
    position: 'กรรมการและเหรัญญิก',
    image: '/committee/p-3.png',
  },
  {
    name: 'นาง อำนวยพร เอี่ยมพันธ์',
    position: 'กรรมการและเลขานุการ',
    image: '/committee/p-4.png',
  },
  {
    name: 'นางสาว อุทุมพร อินทจักร์',
    position: 'กรรมการ',
    image: '/committee/temp.png',
  },
  {
    name: 'นางสาว ปิยะธิดา ขจรชัยกุล',
    position: 'กรรมการ',
    image: '/committee/p-6.png',
  },
  {
    name: 'นางสาว กนกวรรณ รับพรดี',
    position: 'กรรมการ',
    image: '/committee/temp.png',
  },
];

export const ANIMATION_SLIDE_AUTO = [
  {
    image: '/introduce/introduce-1.jpg',
  },
  {
    image: '/introduce/introduce-2.jpg',
  },
  {
    image: '/introduce/introduce-3.jpg',
  },
  {
    image: '/introduce/introduce-4.jpg',
  },
  {
    image: '/introduce/introduce-5.jpg',
  },
  {
    image: '/introduce/introduce-6.jpg',
  },
  {
    image: '/introduce/introduce-7.jpg',
  },
  {
    image: '/introduce/introduce-8.jpg',
  },
  {
    image: '/introduce/introduce-9.jpg',
  },
  {
    image: '/introduce/introduce-10.jpg',
  },
];
