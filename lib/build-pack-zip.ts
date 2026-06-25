import JSZip from "jszip";
import fs from "fs";
import path from "path";

const VALID_SLUGS = [
  "career",
  "gtm",
  "pm",
  "founders-associate",
  "chartered-accountant",
  "content",
  "sales",
  "supply-chain",
  "tutor",
  "real-estate",
] as const;
type PackSlug = (typeof VALID_SLUGS)[number];

const FOLDER_NAMES: Record<string, string> = {
  career: "coryant-career",
  gtm: "coryant-gtm",
  pm: "coryant-pm",
  "founders-associate": "coryant-founder",
  "chartered-accountant": "coryant-ca",
  content: "coryant-content",
  sales: "coryant-sales",
  "supply-chain": "coryant-scm",
  tutor: "coryant-academy",
  "real-estate": "coryant-realestate",
};

const SKILLS_ROOT = path.join(process.cwd(), "coryant-skills");

function addFolderToZip(zip: JSZip, folderPath: string, zipPath: string = "") {
  const entries = fs.readdirSync(folderPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(folderPath, entry.name);
    const entryZipPath = zipPath ? `${zipPath}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      addFolderToZip(zip, fullPath, entryZipPath);
    } else {
      const content = fs.readFileSync(fullPath);
      zip.file(entryZipPath, content);
    }
  }
}

export async function buildPackZip(slug: string): Promise<Buffer> {
  if (!VALID_SLUGS.includes(slug as PackSlug)) {
    throw new Error(`Invalid pack slug: ${slug}`);
  }

  const packFolderName = FOLDER_NAMES[slug];
  if (!packFolderName) {
    throw new Error(`No folder mapping for slug: ${slug}`);
  }

  const zip = new JSZip();
  const packPath = path.join(SKILLS_ROOT, packFolderName);
  const orchestratorPath = path.join(SKILLS_ROOT, "ORCHESTRATOR.md");

  if (!fs.existsSync(packPath)) {
    throw new Error(`Pack folder not found on disk: ${packPath}`);
  }
  if (!fs.existsSync(orchestratorPath)) {
    throw new Error(`ORCHESTRATOR.md not found at: ${orchestratorPath}`);
  }

  // Files go at the zip root (no subfolder) so SKILL.md is found at root,
  // which is required by Claude Code's zip import.
  addFolderToZip(zip, packPath, "");

  const orchestratorContent = fs.readFileSync(orchestratorPath);
  zip.file("ORCHESTRATOR.md", orchestratorContent);

  const buffer = await zip.generateAsync({
    type: "nodebuffer",
    compression: "DEFLATE",
    compressionOptions: { level: 6 },
  });

  return buffer;
}

export function isValidPackSlug(slug: string): slug is PackSlug {
  return VALID_SLUGS.includes(slug as PackSlug);
}
