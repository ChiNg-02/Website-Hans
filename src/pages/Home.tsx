import { Link } from "react-router-dom";
import { SectionHeading } from "../components/SectionHeading";
import { ActivityCard } from "../components/ActivityCard";
import { CoverArt } from "../components/CoverArt";
import { getPastActivities, getUpcomingAndOngoing } from "../data/activities";
import { homeStats } from "../data/stats";

export function Home() {
  const upcoming = getUpcomingAndOngoing().slice(0, 3);
  const past = getPastActivities();

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-ink-50">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
          <div className="flex flex-col items-start gap-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-brand-700 shadow-sm ring-1 ring-brand-100">
              🌱 CLB thiện nguyện Hơi Ấm Nhân Sinh
            </span>
            <h1 className="font-display text-4xl font-extrabold leading-tight text-ink-900 sm:text-5xl">
              Lan tỏa <span className="text-brand-500">hơi ấm</span>, kết nối những{" "}
              <span className="text-accent-500">trái tim</span> tử tế
            </h1>
            <p className="max-w-md text-base leading-relaxed text-ink-500">
              HANS là nơi những người trẻ cùng chung tay tạo nên các dự án thiện nguyện thiết
              thực — từ vùng cao xa xôi đến những góc phố quen thuộc.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/hoat-dong"
                className="rounded-full bg-brand-500 px-6 py-3 text-sm font-bold text-white shadow-md shadow-brand-200 transition hover:-translate-y-0.5 hover:bg-brand-600"
              >
                Đồng hành cùng HANS
              </Link>
              <Link
                to="/ve-hans/gioi-thieu"
                className="rounded-full bg-white px-6 py-3 text-sm font-bold text-ink-700 ring-1 ring-ink-200 transition hover:-translate-y-0.5 hover:ring-brand-300"
              >
                Tìm hiểu về HANS
              </Link>
            </div>
          </div>
          <div className="relative hidden md:block">
            <CoverArt
              gradient={["#97dfb2", "#f2a294"]}
              className="aspect-square rounded-[2.5rem] shadow-xl"
            >
              <div className="flex h-full items-center justify-center text-8xl">💚</div>
            </CoverArt>
          </div>
        </div>
      </section>

      {/* Hoạt động sắp/đang diễn ra */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Cùng tham gia"
            title="Hoạt động sắp/đang diễn ra"
            description="Những dự án đang cần bạn đồng hành ngay lúc này."
          />
          <Link
            to="/hoat-dong"
            className="mb-10 text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            Xem tất cả →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {upcoming.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </section>

      {/* Những con số biết nói */}
      <section className="bg-brand-600 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Hành trình HANS"
            title="Những con số biết nói"
            align="center"
          />
          <div className="mt-[-2.5rem] grid grid-cols-2 gap-6 md:grid-cols-4">
            {homeStats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
                <p className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                  {stat.value}
                  {stat.suffix}
                </p>
                <p className="text-sm text-brand-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Những dự án đã từng tạo */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Dấu ấn"
          title="Những dự án đã từng tạo"
          description="Mỗi dự án là một câu chuyện yêu thương đã được viết nên cùng nhau."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {past.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="flex flex-col items-center gap-4 rounded-3xl bg-gradient-to-r from-accent-100 to-brand-100 px-6 py-12 text-center">
          <h3 className="font-display text-2xl font-extrabold text-ink-900 sm:text-3xl">
            Bạn cũng có thể là một phần của HANS
          </h3>
          <p className="max-w-lg text-ink-600">
            Dù là đăng ký tình nguyện viên, ủng hộ kinh phí hay hiện vật — mỗi đóng góp đều mang
            lại giá trị thực sự.
          </p>
          <Link
            to="/hoat-dong"
            className="rounded-full bg-ink-900 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-ink-800"
          >
            Khám phá hoạt động
          </Link>
        </div>
      </section>
    </div>
  );
}
