interface Database {
  users: InterfaceUser[]
}

type Pronouns = 'he/him' | 'he/it' | 'he/she' | 'he/they' | 'it/him' | 'it/its' | 'it/she' | 'it/they' | 'she/he' | 'she/her' | 'she/it' | 'she/they' | 'they/he' | 'they/it' | 'they/she' | 'they/them' | 'any' | 'other' | 'ask' | 'avoid';

interface InterfaceUser {
  username: string,
  pronouns: Pronouns,
  location: string,
  timezone: string,
  website: string,
}

export type { Database, InterfaceUser };