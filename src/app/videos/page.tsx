import InnerPage from "../components/InnerPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ Videos | Law Office of A. James Mullaney",
  description:
    "Answers to common questions about divorce, child support, parenting time and paternity in easy to digest video format.",
  alternates: { canonical: "/videos" }
};

const videos = [
  { id: "BeM5Fka4pHc", title: "Jacksonville Divorce Lawyer | Florida Family Law Attorney" },
  { id: "BeM5Fka4pHc", title: "What are the Residency Requirements to File for Divorce in Florida?" },
  { id: "BeM5Fka4pHc", title: "How is Child Support Calculated in Florida?" },
  { id: "BeM5Fka4pHc", title: "What is the Difference Between Uncontested and Simplified Divorce?" },
  { id: "BeM5Fka4pHc", title: "What Happens at the Final Hearing?" },
  { id: "BeM5Fka4pHc", title: "How Does Alimony Work in Florida?" },
];

export default function VideosPage() {
  return (
    <InnerPage
      title="FAQ Videos"
      breadcrumbs={[{ label: "Videos" }]}
      showSidebar={false}
    >
      <p>
        Answers to common questions about divorce, child support, parenting
        time, and paternity in easy-to-digest video format.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {videos.map((video, idx) => (
          <div key={idx}>
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <h3 className="text-[18px] mt-3">{video.title}</h3>
          </div>
        ))}
      </div>
    </InnerPage>
  );
}
