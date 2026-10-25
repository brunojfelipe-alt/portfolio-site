import type { Metadata } from "next";
import LeadRecovery from "../../../_components/LeadRecovery";
import { lead } from "../../../_i18n/lead";

export const metadata: Metadata = {
  title: lead.pt.metaTitle,
  description: lead.pt.metaDescription,
};

export default function Page() {
  return <LeadRecovery lang="pt" />;
}
