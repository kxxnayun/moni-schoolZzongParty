import DdayBox from "../components/DdayBox";
import Header from "../components/Header";
import NoticeBox from "../components/NoticeBox";
import PartyInfoBox from "../components/PartyInfoBox";
import VisitorBox from "../components/VisitorBox";
import ProfileBox from "../components/ProfileBox";
import Layout from "../layout/Layout";
import MessageBox from "../components/MessageBox";

export default function InvitationPage() {
  return (
    <Layout>
      <Header />

      <div className="mt-3 flex">
        <div className="w-[150px]">
          <NoticeBox />
          <PartyInfoBox />
          <DdayBox />
          <VisitorBox />
        </div>

        <div className="flex-1">
          <ProfileBox />
          <MessageBox />
        </div>
      </div>
    </Layout>
  );
}
