import DdayBox from "../components/DdayBox";
import Header from "../components/Header";
import NoticeBox from "../components/NoticeBox";
import PartyInfoBox from "../components/PartyInfoBox";
import Layout from "../layout/Layout";

export default function InvitationPage() {
  return (
    <Layout>
      <Header />
      <NoticeBox />
      <PartyInfoBox />
      <DdayBox />
    </Layout>
  );
}
