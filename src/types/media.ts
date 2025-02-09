export interface MediaItem {
  name: string;
  id?: string;
  publicUrl?: string;
  size?: number;
  created_at?: string;
  last_modified?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  metadata?: any;
} 