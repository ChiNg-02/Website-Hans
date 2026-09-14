import { SectionHeading } from "../../components/SectionHeading";

const REGIONS = ["Long Thành", "Biên Hòa", "Sài Gòn"];

interface OrgMember {
  initials: string;
  name: string;
  role: string;
}

const LEADER: OrgMember = { initials: "TAT", name: "Trần Anh Tuấn", role: "Chủ nhiệm" };

const MANAGEMENT: OrgMember[] = [
  { initials: "TVK", name: "Thân Văn Khoa", role: "Phó chủ nhiệm" },
  { initials: "NHT", name: "Nguyễn Hùng Thịnh", role: "Phó chủ nhiệm" },
  { initials: "NTN", name: "Nguyễn Thị Như Quỳnh", role: "Thủ quỹ" },
];

const SUPPORT: OrgMember[] = [
  { initials: "KC", name: "Kim Chi", role: "Trưởng nhóm TNV Biên Hòa" },
  { initials: "HTT", name: "Hồ Thị Thỏa", role: "Trưởng nhóm TNV Sài Gòn" },
  { initials: "HHN", name: "Hàn Hùng Nam", role: "Hỗ trợ TNV" },
];

const LINE = "bg-brand-300";
/** Must match the grid's `gap-4` (1rem = 16px) below so the math lines up exactly. */
const GAP_PX = 16;
/** Horizontal distance from the row's edge to the center of its first/last of 3 equal columns. */
const EDGE_INSET = `calc((100% - ${2 * GAP_PX}px) / 6)`;

/**
 * The connector between a parent card and the 3-across row beneath it: a
 * trunk down from the parent, a horizontal bar spanning the exact centers of
 * the first and last card, and a drop to each of the 3 cards - all computed
 * with the same gap the card grid uses, so nothing is ever off by the gap.
 * Collapses to one straight line on mobile, where the row stacks to 1 column.
 */
function OrgConnector() {
  return (
    <div className="relative h-6 sm:h-12" aria-hidden="true">
      {/* Mobile: cards stack in one column, so a single straight line connects them. */}
      <span className={`absolute left-1/2 top-0 h-full w-[1.5px] -translate-x-1/2 sm:hidden ${LINE}`} />

      {/* Desktop: full branch */}
      <span className={`absolute left-1/2 top-0 hidden h-6 w-[1.5px] -translate-x-1/2 sm:block ${LINE}`} />
      <span
        className={`absolute top-6 hidden h-[1.5px] sm:block ${LINE}`}
        style={{ left: EDGE_INSET, right: EDGE_INSET }}
      />
      <span
        className={`absolute top-6 hidden h-6 w-[1.5px] sm:block ${LINE}`}
        style={{ left: EDGE_INSET, transform: "translateX(-50%)" }}
      />
      <span className={`absolute left-1/2 top-6 hidden h-6 w-[1.5px] -translate-x-1/2 sm:block ${LINE}`} />
      <span
        className={`absolute top-6 hidden h-6 w-[1.5px] sm:block ${LINE}`}
        style={{ right: EDGE_INSET, transform: "translateX(50%)" }}
      />
    </div>
  );
}

function OrgRow({ members, tone }: { members: OrgMember[]; tone: "management" | "support" }) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {members.map((m) => (
        <OrgCard key={m.name} member={m} tone={tone} />
      ))}
    </div>
  );
}

function OrgCard({
  member,
  tone,
}: {
  member: OrgMember;
  tone: "leader" | "management" | "support";
}) {
  const avatarClass =
    tone === "leader"
      ? "bg-gradient-to-br from-brand-400 to-brand-700"
      : tone === "management"
        ? "bg-gradient-to-br from-ink-600 to-ink-800"
        : "bg-gradient-to-br from-accent-400 to-accent-600";
  const roleClass = tone === "support" ? "text-accent-600" : "text-brand-700";

  return (
    <div
      className={`flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ${
        tone === "leader" ? "ring-brand-200" : "ring-ink-100"
      }`}
    >
      <span
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-xs font-extrabold tracking-wide text-white ${avatarClass}`}
      >
        {member.initials}
      </span>
      <div className="min-w-0">
        <p className={`text-xs font-bold uppercase tracking-wide ${roleClass}`}>{member.role}</p>
        <p className="truncate font-display font-bold text-ink-900">{member.name}</p>
      </div>
    </div>
  );
}

export function Introduction() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <SectionHeading
          eyebrow="Về HANS"
          title="Giới thiệu CLB Hơi Ấm Nhân Sinh"
          description="HANS (Hơi Ấm Nhân Sinh) là câu lạc bộ thiện nguyện do những người trẻ sáng lập và vận hành, với mong muốn mang sự ấm áp đến gần hơn với những hoàn cảnh khó khăn trong xã hội."
        />

        {/* Ra đời từ năm 2019 */}
        <div className="mb-20 grid gap-10 md:grid-cols-2 md:items-center md:gap-14">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-lg ring-1 ring-ink-100">
              <img
                src="/about/team.jpg"
                alt="Các thành viên HANS trong một hoạt động thiện nguyện"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <span className="absolute -bottom-5 left-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-brand-700 shadow-md ring-1 ring-ink-100">
              🌱 Từ 2019
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-2xl font-extrabold text-ink-900 sm:text-3xl">
              Ra đời từ năm 2019
            </h2>
            <p className="leading-relaxed text-ink-600">
              Ra đời vào ngày 7/7/2019, HANS bắt đầu với một nhóm người trẻ mong muốn đóng góp điều
              gì đó ý nghĩa cho cộng đồng. Đến nay, HANS đã trở thành một tổ chức thiện nguyện với
              nhiều hoạt động ý nghĩa.
            </p>
            <p className="rounded-2xl bg-brand-50 px-5 py-4 font-medium leading-relaxed text-brand-800">
              Chúng mình tin rằng thiện nguyện không cần phải to lớn - chỉ cần xuất phát từ sự chân
              thành, mỗi hành động nhỏ đều có thể tạo nên những thay đổi lớn.
            </p>
          </div>
        </div>

        {/* Khu vực hoạt động */}
        <div className="mb-20">
          <h3 className="mb-6 font-display text-xl font-bold text-ink-900 sm:text-2xl">
            Khu vực hoạt động
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {REGIONS.map((region) => (
              <div
                key={region}
                className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-ink-100"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-lg">
                  📍
                </span>
                <p className="font-display font-bold text-ink-900">{region}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cơ cấu tổ chức */}
        <div>
          <SectionHeading
            eyebrow="Đội ngũ HANS"
            title="Cơ cấu tổ chức"
            description="Những người đồng hành cùng HANS trong hành trình lan tỏa sự tử tế."
          />

          <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-ink-100 sm:p-10">
            <div className="mx-auto w-full max-w-xs">
              <OrgCard member={LEADER} tone="leader" />
            </div>
            <OrgConnector />
            <OrgRow members={MANAGEMENT} tone="management" />
            <OrgConnector />
            <OrgRow members={SUPPORT} tone="support" />
          </div>
        </div>
      </div>
    </div>
  );
}
