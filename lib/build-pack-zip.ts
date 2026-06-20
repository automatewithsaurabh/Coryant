import JSZip from "jszip";
import fs from "fs";
import path from "path";

const VALID_SLUGS = ["career", "gtm", "pm"] as const;
type PackSlug = (typeof VALID_SLUGS)[number];

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

  const zip = new JSZip();
  const packFolderName = `coryant-${slug}`;
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
