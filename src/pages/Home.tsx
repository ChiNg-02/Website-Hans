import { useState } from "react";
import { Link } from "react-router-dom";
import { SectionHeading } from "../components/SectionHeading";
import { ActivityCard } from "../components/ActivityCard";
import { Carousel } from "../components/Carousel";
import { useInView } from "../lib/useInView";
import { getFeaturedActivities } from "../data/activities";
import { homeStats, homeStatsPeriod } from "../data/stats";
import type { StatItem } from "../data/stats";
import { achievements } from "../data/achievements";
import type { Achievement } from "../data/achievements";

function StatFigure({ stat, index, inView }: { stat: StatItem; index: number; inView: boolean }) {
  return (
    <div
      className={`flex flex-col items-center gap-2.5 px-5 py-7 text-center transition-all duration-700 ease-out sm:px-6 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      }`}
      style={{ transitionDelay: inView ? `${index * 80}ms` : "0ms" }}
    >
      <p className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        {stat.prefix && (
          <span className="mr-1.5 align-middle text-sm font-bold uppercase tracking-wide text-brand-300">
            {stat.prefix}
          </span>
        )}
        {stat.value}
      </p>
      <span className="h-0.5 w-8 rounded-full bg-brand-400" />
      <p className="max-w-[11rem] text-xs leading-snug text-brand-100/90 sm:text-sm">{stat.label}</p>
    </div>
  );
}

function StatsDashboard() {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <section className="relative overflow-hidden py-14 sm:py-16">
      <div className="absolute inset-0">
        <img
          src="/stats-bg.jpg"
          alt="Đoàn tình nguyện viên HANS trao quà cho trẻ em vùng cao"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900/93 via-ink-900/90 to-brand-900/95" />
      </div>
      <div ref={ref} className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col items-center gap-3 text-center sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-300">
            Hành trình HANS
          </span>
          <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
            Những con số biết nói
          </h2>
          <p className="text-sm text-brand-100/80">{homeStatsPeriod}</p>
        </div>

        <div className="grid grid-cols-2 divide-x divide-y divide-white/10 border border-white/10 sm:grid-cols-4">
          {homeStats.map((stat, i) => (
            <StatFigure key={stat.label} stat={stat} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AchievementSlide({ achievement, index }: { achievement: Achievement; index: number }) {
  return (
    <div className="flex h-[430px] w-[280px] flex-col gap-4 rounded-3xl bg-white p-6 shadow-lg ring-1 ring-ink-100 sm:h-[450px] sm:w-[320px]">
      <div className="flex h-52 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-ink-50 p-2 sm:h-60">
        <img
          src={`/achievements/${index + 1}/${String(index + 1).padStart(2, "0")}.jpg`}
          alt={`Bằng khen: ${achievement.issuer}`}
          className="h-full w-full object-contain"
        />
      </div>
      <p className="min-h-12 font-display text-base font-bold leading-snug text-ink-900">
        {achievement.issuer}
      </p>
      <p className="line-clamp-3 text-sm leading-relaxed text-ink-500">{achievement.description}</p>
    </div>
  );
}

export function Home() {
  const featured = getFeaturedActivities();
  const ongoing = featured.filter((a) => a.status === "ongoing");
  const upcoming = featured.filter((a) => a.status === "upcoming");
  const [activityTab, setActivityTab] = useState<"ongoing" | "upcoming">("ongoing");
  const activeList = activityTab === "ongoing" ? ongoing : upcoming;

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
            thực - từ vùng cao xa xôi đến những góc phố quen thuộc.
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

        <div className="mb-6 inline-flex gap-1 rounded-full bg-ink-100 p-1">
          <button
            type="button"
            onClick={() => setActivityTab("ongoing")}
            className={`rounded-full px-5 py-2 text-sm font-bold transition ${
              activityTab === "ongoing"
                ? "bg-ink-900 text-white shadow-sm"
                : "text-ink-600 hover:text-ink-800"
            }`}
          >
            Đang diễn ra
          </button>
          <button
            type="button"
            onClick={() => setActivityTab("upcoming")}
            className={`rounded-full px-5 py-2 text-sm font-bold transition ${
              activityTab === "upcoming"
                ? "bg-ink-900 text-white shadow-sm"
                : "text-ink-600 hover:text-ink-800"
            }`}
          >
            Sắp diễn ra
          </button>
        </div>

        <div key={activityTab} className="animate-[fadeIn_0.3s_ease-out]">
          {activeList.length === 0 ? (
            <p className="rounded-2xl bg-white p-6 text-sm text-ink-400 ring-1 ring-ink-100">
              Tạm thời chưa có hoạt động.
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {activeList.map((activity) => (
                <ActivityCard key={activity.id} activity={activity} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Những con số biết nói */}
      <StatsDashboard />

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
        <Carousel tone="light">
          {achievements.map((a, index) => (
            <AchievementSlide key={a.issuer + a.description} achievement={a} index={index} />
          ))}
        </Carousel>
      </section>
    </div>
  );
}
