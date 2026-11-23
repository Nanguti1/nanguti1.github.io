import type { CaseStudy } from "@/lib/case-study";
import { caseStudy as twoBGamersStore } from "@/content/2b-gamers-store";
import { caseStudy as hamalineInsurance } from "@/content/hamaline-insurance";
import { caseStudy as simplifiNetworks } from "@/content/simplifi-networks";
import { caseStudy as blvdGuide } from "@/content/blvd-guide";
import { caseStudy as afriqNetworks } from "@/content/afriq-networks";
import { caseStudy as mwalimuplus } from "@/content/mwalimuplus";

const registry: Record<string, CaseStudy> = {
  "2b-gamers-store": twoBGamersStore,
  "hamaline-insurance": hamalineInsurance,
  "simplifi-networks": simplifiNetworks,
  "blvd-guide": blvdGuide,
  "afriq-networks": afriqNetworks,
  mwalimuplus,
};

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return registry[slug];
}
