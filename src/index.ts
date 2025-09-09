import { randomBytes } from "crypto";

interface UniqletOptions {
  length?: number;
  prefix?: string;
}

const ALPHABET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_";

export function uniqlet(options: UniqletOptions = {}): string {
  const { length = 21, prefix } = options;
  const bytes = randomBytes(length);
  let id = "";

  for (let i = 0; i < length; i++) {
    id += ALPHABET[bytes[i]! % ALPHABET.length];
  }

  return prefix ? `${prefix}_${id}` : id;
}
