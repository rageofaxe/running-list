enum Hashtag {
  HOME,
  WORK,
  HOBBY
}

export type Week = {
  tasks: Task[];
  title: string;
  startDate: Date;
};

export type Profile = {
  email: string;
  settings: Settings;
};

export enum WeekSize {
  WEEKDAYS,
  WEEKENDS,
  ENTIRE
}

export type Settings = {
  isTitleWrapped: boolean;
  weekSize: keyof WeekSize;
};

export enum TaksStatus {
  PLANNED = "PLANNED",
  MOVED = "MOVED",
  FAILED = "FAILED",
  DONE = "DONE"
}

export type DayState = {
  id: number;
  date: Date;
  status: TaksStatus;
};

export type Task = {
  id: number;
  createDate: Date;
  title: string;
  description?: string;
  hashtags?: Hashtag[];
  dayStates: DayState[];
  isFreeze: boolean;
};
