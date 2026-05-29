import { Principle, AcronymLetter, EthicsRule, AnnouncementMemo, DocumentItem } from './types';

export const ACRONYM_DATA: AcronymLetter[] = [
  {
    letter: 'G',
    english: 'Gentlemen',
    filipino: 'Maginoo',
    description: 'We carry ourselves with honor, chivalry, and respect toward all individuals in both private and public life, setting a premium example of character.'
  },
  {
    letter: 'U',
    english: 'United',
    filipino: 'Nagkakaisa',
    description: 'Bound together in single-minded purpose, bridging distances and diverse backgrounds to promote real solidarity.'
  },
  {
    letter: 'A',
    english: 'Associates',
    filipino: 'Katuwang',
    description: 'Collaborating actively with community leaders, regional chapters, and stakeholders to deliver public service and civic programs.'
  },
  {
    letter: 'R',
    english: 'Race',
    filipino: 'Lahi',
    description: 'Honoring and defending the heritage, culture, and rich historical values of the Filipino citizens and our global brothers.'
  },
  {
    letter: 'D',
    english: 'Dauntless',
    filipino: 'Magigiting',
    description: 'Courageous in standing up for justice, holding firm to what is right, and protecting the defenseless against adversity.'
  },
  {
    letter: 'I',
    english: 'Ingenuous',
    filipino: 'Matapat',
    description: 'Honest, innocent of malice, transparent, and completely sincere in our dealings with other people.'
  },
  {
    letter: 'A',
    english: 'Advocators',
    filipino: 'Tagapagtanggol',
    description: 'Championing civic righteousness, constitutional rights, national peace, and ecological responsibility.'
  },
  {
    letter: 'N',
    english: 'Nation',
    filipino: 'Bansa',
    description: 'Upholding state sovereignty, civic duties, and contributing proactively to national development and democratic ideals.'
  },
  {
    letter: 'S',
    english: 'Society',
    filipino: 'Lipunan',
    description: 'Dedicating our efforts to elevate the social, intellectual, moral, economic, and general well-being of the broader community.'
  }
];

export const PRINCIPLES_DATA: Principle[] = [
  {
    name: 'Brotherhood',
    iconName: 'Users',
    description: 'Fostering a genuine, resilient family bond where members protect, support, and lift one another in times of need.'
  },
  {
    name: 'Integrity',
    iconName: 'ShieldCheck',
    description: 'Aligning our private and public deeds with moral goodness, absolute honesty, and transparency in leadership.'
  },
  {
    name: 'Peace',
    iconName: 'HeartHandshake',
    description: 'Seeking peaceful dialogue, conflict mitigation, and serving as peacemakers standardizing community tranquility.'
  },
  {
    name: 'Discipline',
    iconName: 'BookmarkCheck',
    description: 'Adhering strictly to standard governance, respect for rules, lawful authorities, and personal self-control.'
  },
  {
    name: 'Service',
    iconName: 'HandHoldingHeart',
    description: 'Dedicating time, wisdom, and resource to help the disadvantaged, our colleagues, and standard social uplift.'
  },
  {
    name: 'Equality',
    iconName: 'Scale',
    description: 'Embracing all men and women of goodwill on equal footing, rejecting any class, racial, or economic discrimination.'
  },
  {
    name: 'Justice',
    iconName: 'Gavel',
    description: 'Defending basic human rights, enforcing fair procedures internally, and promoting public righteousness.'
  }
];

export const ETHICS_RULES: EthicsRule[] = [
  {
    id: 1,
    duty: "Adhere to the seven (7) guiding principles of brotherhood, discipline, equality, service, peace, justice, and integrity.",
    iconName: "Compass"
  },
  {
    id: 2,
    duty: "Treat fellow officers and members equally with the utmost respect, standardizing mutual treatment with high dignity.",
    iconName: "Smile"
  },
  {
    id: 3,
    duty: "Respect the women, the elders, and persons in authority; respect the Constitutional rights of everyone without exception.",
    iconName: "Award"
  },
  {
    id: 4,
    duty: "Help fellow officers and members in times of need or distress to the absolute best of my personal capabilities.",
    iconName: "ShieldAlert"
  },
  {
    id: 5,
    duty: "Perform the jobs inherent to my organizational position diligently, honestly, transparently, and in good faith.",
    iconName: "FileCheck"
  },
  {
    id: 6,
    duty: "Continuously uphold and defend the ultimate honor, legacy, and structural integrity of the Association.",
    iconName: "Flag"
  },
  {
    id: 7,
    duty: "Keep my private and public life completely unsullied as an inspiring example of clean thought, speech, and deed.",
    iconName: "Flame"
  },
  {
    id: 8,
    duty: "Harbor no grudges, hatred, or malice against anyone; letting love, peace, humility, and understanding reign in my heart.",
    iconName: "Infinity"
  },
  {
    id: 9,
    duty: "Never exploit or take advantage of my designated office or position to promote self-serving commercial or personal interest.",
    iconName: "Coins"
  },
  {
    id: 10,
    duty: "Course all internal misunderstandings strictly through the proper grievance machinery and refrain from airing them to the public.",
    iconName: "Lock"
  }
];

export const ANNOUNCEMENTS: AnnouncementMemo[] = [
  {
    id: 'MEMO-2025-1028',
    date: 'October 28, 2025',
    title: 'Remittances for the 41st Founding Anniversary & Summit',
    summary: 'Acknowledgment of Mandatory Remittances for the 41st Founding Anniversary, Summit, and Convention from Brunei, Qatar, and NCR Regional Chapters. Congratulations to everyone for their continuous support.',
    category: 'Memo',
    isImportant: true
  },
  {
    id: 'ANNC-2025-1102',
    date: 'November 2, 2025',
    title: 'Implementation of Parliamentary Procedure',
    summary: 'Notice is hereby given to all chapters that systematic parliamentary rules and Roberts Rules of Order are now fully implemented in all official organizational, regional, and national assembly meetings.',
    category: 'Announcement',
    isImportant: false
  },
  {
    id: 'MEMO-2026-0415',
    date: 'April 15, 2026',
    title: 'Preparation for the 2026 General Assembly & Oath Retaking',
    summary: 'Guidelines for Regional Directors and Chapter Presidents on the alignment of local registers in preparation for the annual assembly under General Headquarters direction in Bago Bantay, Quezon City.',
    category: 'Memo',
    isImportant: true
  },
  {
    id: 'ANNC-2026-0520',
    date: 'May 20, 2026',
    title: 'Launch of Online Global Registry Verification System',
    summary: 'The administrative secretariat has initiated the digitizing of master rosters. ID and Certificate applications must be requested via the designated digital forms portal with proper local endorsers.',
    category: 'System',
    isImportant: false
  }
];

export const OFFICIAL_DOCUMENTS: DocumentItem[] = [
  {
    id: 'DOC-SEC-123899',
    title: 'SEC Registration Certificate',
    type: 'Legal Document',
    status: 'Official',
    description: 'Registered under SEC No. 123899, establishing the legal status of The Guardians Brotherhood, Inc. - The Original.'
  },
  {
    id: 'DOC-CONST-1984',
    title: 'Constitution & By-Laws (1984 Legacy)',
    type: 'Governing Policy',
    status: 'Official',
    description: 'The foundational statutes, authority hierarchies, and structure written by the original incorporators on Dec 10, 1984.'
  },
  {
    id: 'DOC-POI-GUIDE',
    title: 'POI (Program of Instruction) Guidelines',
    type: 'Training Manual',
    status: 'Public',
    description: 'The structured training curriculum and test procedures required for candidates undergoing probationary membership.'
  }
];
