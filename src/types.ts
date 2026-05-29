export interface Principle {
  name: string;
  description: string;
  iconName: string;
}

export interface AcronymLetter {
  letter: string;
  english: string;
  filipino: string;
  description: string;
}

export interface EthicsRule {
  id: number;
  duty: string;
  iconName: string;
}

export interface AnnouncementMemo {
  id: string;
  date: string;
  title: string;
  summary: string;
  category: 'Memo' | 'Announcement' | 'System';
  isImportant?: boolean;
}

export interface DocumentItem {
  id: string;
  title: string;
  type: string;
  status: 'Official' | 'Internal' | 'Public';
  description: string;
}
