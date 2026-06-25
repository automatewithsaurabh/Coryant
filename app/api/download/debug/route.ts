import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

export async function GET() {
  const cwd = process.cwd();
  const skillsRoot = path.join(cwd, "coryant-skills");
  const gtmPath = path.join(skillsRoot, "coryant-gtm");
  const orchestratorPath = path.join(skillsRoot, "ORCHESTRATOR.md");

  let skillsContents: string[] = [];
  let gtmContents: string[] = [];

  try { skillsContents = fs.readdirSync(skillsRoot); } catch { skillsContents = []; }
  try { gtmContents = fs.readdirSync(gtmPath); } catch { gtmContents = []; }

  return NextResponse.json({
    cwd,
    skills_root_exists: fs.existsSync(skillsRoot),
    gtm_folder_exists: fs.existsSync(gtmPath),
    orchestrator_exists: fs.existsSync(orchestratorPath),
    skills_root_contents: skillsContents,
    gtm_contents: gtmContents,
  });
}
