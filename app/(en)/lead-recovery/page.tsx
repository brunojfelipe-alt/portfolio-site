import type { Metadata } from "next";
import LeadRecovery from "../../_components/LeadRecovery";
import { lead } from "../../_i18n/lead";

export const metadata: Metadata = {
  title: lead.en.metaTitle,
  description: lead.en.metaDescription,
};

export default function Page() {
  return <LeadRecovery lang="en" />;
}
