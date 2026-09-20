import { FeaturedDetailHero } from "../../components/featured/FeaturedDetailHero";
import { SectionHeading } from "../../components/SectionHeading";
import { getFeaturedProjectBySlug } from "../../data/featuredProjects";

const LOCATIONS = [
  {
    name: "Long Thành",
    edition: "Kỳ 41",
    images: [
      "/featured/bep-an-thien-nguyen/long-thanh/1789542123581_193652901113894693_6446683610066719997_ced672ef47364e2fa593f57d91ecdf3e.jpg",
      "/featured/bep-an-thien-nguyen/long-thanh/1789542123603_193652901113894693_6446683610066719997_0c67f26531d5751364626c2f1cab9971.jpg",
      "/featured/bep-an-thien-nguyen/long-thanh/1789542123623_193652901113894693_6446683610066719997_eefaa5ea36876d87a3ba0349652689ad.jpg",
      "/featured/bep-an-thien-nguyen/long-thanh/1789542123640_193652901113894693_6446683610066719997_b0ec5e1e585ded9bad98da36b9e15fb3.jpg",
      "/featured/bep-an-thien-nguyen/long-thanh/1789542123657_193652901113894693_6446683610066719997_05566b9c050f84e1c85d4f942b6e6d9a.jpg",
      "/featured/bep-an-thien-nguyen/long-thanh/1789542123673_193652901113894693_6446683610066719997_13d3671cfc77ecab1fddfe40ef898a10.jpg",
    ],
  },
  {
    name: "Biên Hòa",
    edition: "Kỳ 41",
    images: [
      "/featured/bep-an-thien-nguyen/bien%20hoa/1789541900679_193652901113894693_6446683610066719997_d3ebf6d37110736dc9be44e611a17807.jpg",
      "/featured/bep-an-thien-nguyen/bien%20hoa/1789541900689_193652901113894693_6446683610066719997_fec62df04be1da759381346812d962d4.jpg",
      "/featured/bep-an-thien-nguyen/bien%20hoa/1789541900700_193652901113894693_6446683610066719997_1591603cd7670879605ad9580bad8ccb.jpg",
      "/featured/bep-an-thien-nguyen/bien%20hoa/hi.jpg",
      "/featured/bep-an-thien-nguyen/bien%20hoa/hihi.jpg",
      "/featured/bep-an-thien-nguyen/bien%20hoa/hihihi.jpg",
    ],
  },
  {
    name: "Sài Gòn",
    edition: "Kỳ 19",
    images: [
      "/featured/bep-an-thien-nguyen/sai%20gon/1789542225524_193652901113894693_6446683610066719997_1f8a6115131b3d47703689e6dd40c3c0.jpg",
      "/featured/bep-an-thien-nguyen/sai%20gon/1789542225560_193652901113894693_6446683610066719997_24a1e14e740c3228a42d96e143658651.jpg",
      "/featured/bep-an-thien-nguyen/sai%20gon/1789542225583_193652901113894693_6446683610066719997_78e98d4fd712b79ebb2ddf289969d8de.jpg",
      "/featured/bep-an-thien-nguyen/sai%20gon/1789542225605_193652901113894693_6446683610066719997_b72d18b0007356ca971ebb5928942f8e.jpg",
      "/featured/bep-an-thien-nguyen/sai%20gon/1789542225623_193652901113894693_6446683610066719997_f023d08738177bbafc82da680d000c4c.jpg",
      "/featured/bep-an-thien-nguyen/sai%20gon/1789542225638_193652901113894693_6446683610066719997_5edf4680911b9cdf5564c43a94bd880c.jpg",
    ],
  },
];

const SHARED_QR = "/featured/bep-an-thien-nguyen/qr%20thu%20chi%203%20kvuc/qr%20thu%20chi.jpg";

export function BepAnThienNguyen() {
  const project = getFeaturedProjectBySlug("bep-an-thien-nguyen")!;

  return (
    <div>
      <FeaturedDetailHero
        title={project.title}
        countLabel={project.countLabel}
        gradient={project.coverGradient}
        image={project.coverImage}
      />

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <p className="mb-12 max-w-3xl text-base leading-relaxed text-ink-600">{project.summary}</p>

        <SectionHeading
          eyebrow="Hành trình sẻ chia"
          title="Những bữa ăn được nấu bằng sự chung tay"
          description="Mỗi suất ăn là một phần sẻ chia được gửi đi đúng lúc."
        />

        <div className="flex flex-col gap-12">
          {LOCATIONS.map((location) => (
            <section key={location.name}>
              <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="font-display text-xl font-bold text-ink-900">{location.name}</h2>
                <span className="text-sm font-medium text-brand-600">{location.edition}</span>
              </div>
              {location.images.length > 0 ? (
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {location.images.map((image) => (
                    <div key={image} className="aspect-[4/3] overflow-hidden rounded-2xl bg-ink-100">
                      <img
                        src={image}
                        alt={`Hoạt động Bếp Thiện Nguyện tại ${location.name}`}
                        className="h-full w-full object-cover transition duration-500 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-ink-200 bg-white px-5 py-8 text-center text-sm text-ink-400">
                  Ảnh hoạt động tại khu vực này sẽ được cập nhật.
                </div>
              )}
            </section>
          ))}
        </div>

        <section className="mt-14 rounded-3xl bg-white p-6 text-center shadow-sm ring-1 ring-ink-100 sm:p-8">
          <SectionHeading
            eyebrow="Minh bạch thu - chi"
            title="QR thu - chi dùng chung cho 3 khu vực"
            description="Quét mã để theo dõi các khoản đóng góp và chi phí của Bếp Thiện Nguyện."
            align="center"
            compact
          />
          <img src={SHARED_QR} alt="QR thu - chi Bếp Thiện Nguyện" className="mx-auto mt-6 h-64 w-64 object-contain" />
        </section>

      </div>
    </div>
  );
}