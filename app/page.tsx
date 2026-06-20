import { createClient } from "@/lib/supabase/server";
import Hero from "@/components/marketing/Hero";
import PacksSection from "@/components/marketing/PacksSection";
import PipelineTrace from "@/components/marketing/PipelineTrace";
import ArchitectureSection from "@/components/marketing/ArchitectureSection";
import InstallSection from "@/components/marketing/InstallSection";
import Footer from "@/components/marketing/Footer";

export default async function Home() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <main>
      <Hero isLoggedIn={!!user} />
      <PacksSection />
      <PipelineTrace />
      <ArchitectureSection />
      <InstallSection />
      <Footer />
    </main>
  );
}
