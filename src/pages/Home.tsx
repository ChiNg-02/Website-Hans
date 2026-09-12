import { Link } from "react-router-dom";
import { SectionHeading } from "../components/SectionHeading";
import { ActivityCard } from "../components/ActivityCard";
import { getFeaturedActivities } from "../data/activities";
import { homeStats, homeStatsPeriod } from "../data/stats";
import { achievements } from "../data/achievements";

export function Home() {
  const featured = getFeaturedActivities();
  const ongoing = featured.filter((a) => a.status === "ongoing");
  const upcoming = featured.filter((a) => a.status === "upcoming");

  return (
    <div>
      {/* Hero banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-banner.jpg"
            alt="Tình nguyện viên HANS cùng các em nhỏ vùng cao trong chương trình Hạt Giống Vùng Cao 2026"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/55 to-ink-900/25" />
        </div>
        <div className="relative mx-auto flex min-h-[480px] max-w-6xl flex-col items-start justify-end gap-6 px-4 py-14 sm:min-h-[560px] sm:px-6 sm:py-20">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white ring-1 ring-white/30 backdrop-blur">
            🌱 CLB thiện nguyện Hơi Ấm Nhân Sinh
          </span>
          <h1 className="font-display text-4xl font-extrabold leading-tight text-white drop-shadow-sm sm:text-5xl">
            Lan tỏa <span className="text-brand-300">hơi ấm</span>, kết nối những{" "}
            <span className="text-accent-300">trái tim</span> tử tế
          </h1>
          <p className="max-w-md text-base leading-relaxed text-white/90">
            HANS là nơi những người trẻ cùng chung tay tạo nên các dự án thiện nguyện thiết
            thực — từ vùng cao xa xôi đến những góc phố quen thuộc.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/hoat-dong"
              className="rounded-full bg-brand-500 px-6 py-3 text-sm font-bold text-white shadow-md shadow-black/20 transition hover:-translate-y-0.5 hover:bg-brand-600"
            >
              Đồng hành cùng HANS
            </Link>
            <Link
              to="/ve-hans/gioi-thieu"
              className="rounded-full bg-white/10 px-6 py-3 text-sm font-bold text-white ring-1 ring-white/40 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
            >
              Tìm hiểu về HANS
            </Link>
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

        <div className="flex flex-col gap-10">
          <div>
            <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-brand-700">
              <span className="h-2 w-2 rounded-full bg-brand-500" />
              Đang diễn ra
            </h3>
            {ongoing.length === 0 ? (
              <p className="rounded-2xl bg-white p-6 text-sm text-ink-400 ring-1 ring-ink-100">
                Tạm thời chưa có hoạt động.
              </p>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {ongoing.map((activity) => (
                  <ActivityCard key={activity.id} activity={activity} />
                ))}
              </div>
            )}
          </div>

          <div>
            <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-accent-500">
              <span className="h-2 w-2 rounded-full bg-accent-400" />
              Sắp diễn ra
            </h3>
            {upcoming.length === 0 ? (
              <p className="rounded-2xl bg-white p-6 text-sm text-ink-400 ring-1 ring-ink-100">
                Tạm thời chưa có hoạt động.
              </p>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {upcoming.map((activity) => (
                  <ActivityCard key={activity.id} activity={activity} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Những con số biết nói */}
      <section className="bg-brand-900 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Hành trình HANS"
            title="Những con số biết nói"
            description={homeStatsPeriod}
            align="center"
            tone="light"
          />
          <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4">
            {homeStats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-2 rounded-2xl bg-white/10 px-4 py-6 text-center ring-1 ring-white/10 backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
              >
                <span className="text-3xl">{stat.icon}</span>
                <p className="font-display text-2xl font-extrabold text-white sm:text-3xl">
                  {stat.prefix && (
                    <span className="mr-1 align-middle text-base font-bold text-brand-200">
                      {stat.prefix}
                    </span>
                  )}
                  {stat.value}
                </p>
                <p className="text-xs leading-snug text-brand-100 sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Những dấu ấn đáng tự hào */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Dấu ấn"
            title="Những dấu ấn đáng tự hào"
            description="Những ghi nhận từ các cấp Đoàn – Hội dành cho hành trình thiện nguyện của HANS."
          />
          <Link
            to="/ve-hans/thanh-tich"
            className="mb-10 text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            Xem tất cả →
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a) => (
            <div
              key={a.issuer + a.description}
              className="flex flex-col gap-3 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-ink-100 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-16 items-center justify-center rounded-xl border-2 border-dashed border-accent-200 bg-accent-50 text-2xl text-accent-400">
                🏅
              </div>
              <p className="font-display text-sm font-bold text-ink-900">{a.issuer}</p>
              <p className="text-sm leading-relaxed text-ink-500">{a.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
