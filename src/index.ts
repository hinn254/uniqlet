import { randomBytes } from "crypto";

interface UniqletOptions {
  length?: number;
  prefix?: string;
}

// Crockford Base32 alphabet - removes confusing characters (0/O, 1/I/l, etc.)
const ALPHABET = "0123456789abcdefghjkmnpqrstvwxyz";

// Validation functions
function isValidPrefix(prefix: string): boolean {
  if (prefix.length > 63) {
    return false;
  }
  
  for (let i = 0; i < prefix.length; i++) {
    const code = prefix.charCodeAt(i);
    const isLowerAtoZ = code > 96 && code < 123; // a-z
    const isDigit = code > 47 && code < 58; // 0-9
    const isUnderscore = code === 95; // _
    
    // First character must be a letter
    if (i === 0 && !isLowerAtoZ) {
      return false;
    }
    
    // Last character must be a letter or digit (not underscore)
    if (i === prefix.length - 1 && !(isLowerAtoZ || isDigit)) {
      return false;
    }
    
    // All characters must be lowercase letters, digits, or underscore
    if (!(isLowerAtoZ || isDigit || isUnderscore)) {
      return false;
    }
  }
  
  return true;
}

// Utility functions
export function getPrefix(id: string): string {
  const underscoreIndex = id.lastIndexOf("_");
  return underscoreIndex === -1 ? "" : id.substring(0, underscoreIndex);
}

export function getSuffix(id: string): string {
  const underscoreIndex = id.lastIndexOf("_");
  return underscoreIndex === -1 ? id : id.substring(underscoreIndex + 1);
}

export function parseUniqlet(id: string): { prefix: string; suffix: string } {
  return { prefix: getPrefix(id), suffix: getSuffix(id) };
}

export function uniqlet(options: UniqletOptions = {}): string {
  const { length = 21, prefix } = options;
  
  // Validate prefix if provided
  if (prefix && !isValidPrefix(prefix)) {
    throw new Error(`Invalid prefix "${prefix}". Must be at most 63 lowercase letters [a-z], digits [0-9], and underscores [_], starting with a letter and ending with a letter or digit.`);
  }
  
  // Validate length
  if (length < 1 || length > 1000) {
    throw new Error(`Invalid length ${length}. Must be between 1 and 1000.`);
  }
  
  const bytes = randomBytes(length);
  let id = "";

  for (let i = 0; i < length; i++) {
    id += ALPHABET[bytes[i]! % ALPHABET.length];
  }

  return prefix ? `${prefix}_${id}` : id;
}
