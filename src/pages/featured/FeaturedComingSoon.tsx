import { Navigate, useParams } from "react-router-dom";
import { FeaturedDetailHero } from "../../components/featured/FeaturedDetailHero";
import { SectionHeading } from "../../components/SectionHeading";
import { getFeaturedProjectBySlug } from "../../data/featuredProjects";

const TET_YEU_THUONG_IMAGES = {
  2022: [
    "/featured/tet-yeu-thuong/2022/470668924_1614368169178745_7800432191787674176_n.jpg",
    "/featured/tet-yeu-thuong/2022/470672807_1614367995845429_6348641887508330644_n.jpg",
    "/featured/tet-yeu-thuong/2022/470675456_1614368165845412_4892361911762377488_n.jpg",
    "/featured/tet-yeu-thuong/2022/470794546_1614368132512082_3050704303645685501_n.jpg",
    "/featured/tet-yeu-thuong/2022/470794607_1614368162512079_2308277182624648488_n.jpg",
    "/featured/tet-yeu-thuong/2022/471129994_1614368135845415_7767570866983211415_n.jpg",
    "/featured/tet-yeu-thuong/2022/471196033_1614367895845439_7938041709302173666_n.jpg",
    "/featured/tet-yeu-thuong/2022/471252909_1614367872512108_157557752433934285_n.jpg",
  ],
  2023: [
    "/featured/tet-yeu-thuong/2023/473802463_923836206560420_2493180411835404344_n.jpg",
    "/featured/tet-yeu-thuong/2023/473899064_923836163227091_5192952972583378489_n.jpg",
    "/featured/tet-yeu-thuong/2023/474097451_923836219893752_6887322473994130891_n.jpg",
    "/featured/tet-yeu-thuong/2023/474141779_923836199893754_6428362189709019724_n.jpg",
    "/featured/tet-yeu-thuong/2023/474289780_923836153227092_3144970377150930186_n.jpg",
    "/featured/tet-yeu-thuong/2023/474647782_926636169613757_5873981218858515514_n.jpg",
    "/featured/tet-yeu-thuong/2023/474656373_926636062947101_4631558918969122122_n.jpg",
    "/featured/tet-yeu-thuong/2023/474681914_926636119613762_800864924004446152_n.jpg",
  ],
  2024: {
    "Biên Hòa": [
      "/featured/tet-yeu-thuong/2024/Biên Hoà/BH1.jpg",
      "/featured/tet-yeu-thuong/2024/Biên Hoà/bh2.jpg",
      "/featured/tet-yeu-thuong/2024/Biên Hoà/bh3.jpg",
      "/featured/tet-yeu-thuong/2024/Biên Hoà/bh4.jpg",
      "/featured/tet-yeu-thuong/2024/Biên Hoà/bh5.jpg",
    ],
    "Sài Gòn": [
      "/featured/tet-yeu-thuong/2024/Biên Hoà/Sài Gòn/sg1.jpg",
      "/featured/tet-yeu-thuong/2024/Biên Hoà/Sài Gòn/sg2.jpg",
      "/featured/tet-yeu-thuong/2024/Biên Hoà/Sài Gòn/sg3.jpg",
      "/featured/tet-yeu-thuong/2024/Biên Hoà/Sài Gòn/sg4.jpg",
      "/featured/tet-yeu-thuong/2024/Biên Hoà/Sài Gòn/sg5.jpg",
    ],
    "Long Thành": [
      "/featured/tet-yeu-thuong/2024/Biên Hoà/Sài Gòn/Long Thành/lt1.jpg",
      "/featured/tet-yeu-thuong/2024/Biên Hoà/Sài Gòn/Long Thành/lt2.jpg",
      "/featured/tet-yeu-thuong/2024/Biên Hoà/Sài Gòn/Long Thành/lt3.jpg",
      "/featured/tet-yeu-thuong/2024/Biên Hoà/Sài Gòn/Long Thành/lt4.jpg",
      "/featured/tet-yeu-thuong/2024/Biên Hoà/Sài Gòn/Long Thành/lt5.jpg",
    ],
  },
  2025: {
    "Biên Hòa": {
      "Trao quà cho các bệnh nhân tại Bệnh viện Y học Cổ truyền tỉnh Đồng Nai": [
        "/featured/tet-yeu-thuong/2025/Biên Hoà/bh 5.jpg",
        "/featured/tet-yeu-thuong/2025/Biên Hoà/bh1- bệnh viện y học cổ truyền đồng nai.jpg",
        "/featured/tet-yeu-thuong/2025/Biên Hoà/bh2.jpg",
        "/featured/tet-yeu-thuong/2025/Biên Hoà/bh3.jpg",
        "/featured/tet-yeu-thuong/2025/Biên Hoà/bh4.jpg",
      ],
    },
    "Long Thành": {
      "Phiên chợ Tết 0 đồng": [
        "/featured/tet-yeu-thuong/2025/Long Thành/Chợ tết 0 đồng/480963607_951502060460501_1716860178941080482_n.jpg",
        "/featured/tet-yeu-thuong/2025/Long Thành/Chợ tết 0 đồng/lt2.jpg",
        "/featured/tet-yeu-thuong/2025/Long Thành/Chợ tết 0 đồng/lt3.jpg",
        "/featured/tet-yeu-thuong/2025/Long Thành/Chợ tết 0 đồng/lt4.jpg",
        "/featured/tet-yeu-thuong/2025/Long Thành/Chợ tết 0 đồng/lt5.jpg",
      ],
      "Trao quà cho các em nhỏ có hoàn cảnh khó khăn tại quầy mì gói 2k": [
        "/featured/tet-yeu-thuong/2025/Long Thành/Trao quà cho các em nhỏ tại quầy mì gói 2k/lt-2k 1.jpg",
        "/featured/tet-yeu-thuong/2025/Long Thành/Trao quà cho các em nhỏ tại quầy mì gói 2k/lt-2k 2.jpg",
        "/featured/tet-yeu-thuong/2025/Long Thành/Trao quà cho các em nhỏ tại quầy mì gói 2k/lt-2k 3.jpg",
        "/featured/tet-yeu-thuong/2025/Long Thành/Trao quà cho các em nhỏ tại quầy mì gói 2k/lt-2k 4.jpg",
        "/featured/tet-yeu-thuong/2025/Long Thành/Trao quà cho các em nhỏ tại quầy mì gói 2k/lt-2k 5.jpg",
      ],
    },
    "Sài Gòn": {
      "Trao quà cho các cô chú lớn tuổi có hoàn cảnh khó khăn": [
        "/featured/tet-yeu-thuong/2025/Sài Gòn/Trao quà cho các cô chú lớn tuổi có hoàn cảnh khó khăn/sg1.jpg",
        "/featured/tet-yeu-thuong/2025/Sài Gòn/Trao quà cho các cô chú lớn tuổi có hoàn cảnh khó khăn/sg2.jpg",
        "/featured/tet-yeu-thuong/2025/Sài Gòn/Trao quà cho các cô chú lớn tuổi có hoàn cảnh khó khăn/sg3.jpg",
        "/featured/tet-yeu-thuong/2025/Sài Gòn/Trao quà cho các cô chú lớn tuổi có hoàn cảnh khó khăn/sg4.jpg",
        "/featured/tet-yeu-thuong/2025/Sài Gòn/Trao quà cho các cô chú lớn tuổi có hoàn cảnh khó khăn/sg5.jpg",
      ],
      "Trao quà cho các em nhỏ tại Mái Ấm Linh Sơn - Chùa Linh Sơn": [
        "/featured/tet-yeu-thuong/2025/Sài Gòn/Trao quà cho các em nhỏ tại Mái Ấm Linh Sơn - Chùa Linh Sơn/sg-ls1.jpg",
        "/featured/tet-yeu-thuong/2025/Sài Gòn/Trao quà cho các em nhỏ tại Mái Ấm Linh Sơn - Chùa Linh Sơn/sg-ls2.jpg",
        "/featured/tet-yeu-thuong/2025/Sài Gòn/Trao quà cho các em nhỏ tại Mái Ấm Linh Sơn - Chùa Linh Sơn/sg-ls3.jpg",
        "/featured/tet-yeu-thuong/2025/Sài Gòn/Trao quà cho các em nhỏ tại Mái Ấm Linh Sơn - Chùa Linh Sơn/sg-ls5.jpg",
        "/featured/tet-yeu-thuong/2025/Sài Gòn/Trao quà cho các em nhỏ tại Mái Ấm Linh Sơn - Chùa Linh Sơn/sg-lt4.jpg",
      ],
    },
  },
  2026: {
    "Biên Hòa": [
      "/featured/tet-yeu-thuong/2026/Biên Hoà/bh1.jpg",
      "/featured/tet-yeu-thuong/2026/Biên Hoà/bh2.jpg",
      "/featured/tet-yeu-thuong/2026/Biên Hoà/bh3.jpg",
      "/featured/tet-yeu-thuong/2026/Biên Hoà/bh4.jpg",
      "/featured/tet-yeu-thuong/2026/Biên Hoà/bh5.jpg",
    ],
    "Long Thành": [
      "/featured/tet-yeu-thuong/2026/Long Thành/lt1.jpg",
      "/featured/tet-yeu-thuong/2026/Long Thành/lt2.jpg",
      "/featured/tet-yeu-thuong/2026/Long Thành/lt3.jpg",
      "/featured/tet-yeu-thuong/2026/Long Thành/lt4.jpg",
      "/featured/tet-yeu-thuong/2026/Long Thành/lt5.jpg",
    ],
    "Sài Gòn": [
      "/featured/tet-yeu-thuong/2026/Sài Gòn/632956205_1215446364066068_2208952922840658499_n.jpg",
      "/featured/tet-yeu-thuong/2026/Sài Gòn/sg1.jpg",
      "/featured/tet-yeu-thuong/2026/Sài Gòn/sg2.jpg",
      "/featured/tet-yeu-thuong/2026/Sài Gòn/sg3.jpg",
      "/featured/tet-yeu-thuong/2026/Sài Gòn/sg5.jpg",
    ],
  },
};

export function FeaturedComingSoon() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getFeaturedProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/du-an-noi-bat" replace />;
  }

  const isTetYeuThuong = slug === "tet-yeu-thuong";

  return (
    <div>
      <FeaturedDetailHero
        title={project.title}
        tagline={project.tagline}
        countLabel={project.countLabel}
        gradient={project.coverGradient}
        image={project.coverImage}
      />

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        {project.summary && (
          <p className="mb-10 max-w-3xl text-base leading-relaxed text-ink-600">{project.summary}</p>
        )}

        {isTetYeuThuong && (
          <SectionHeading
            eyebrow="Hành trình sẻ chia"
            title="Góp chút ấm áp ngày xuân gửi những mảnh đời còn nhiều lo toan."
            description="Mỗi phần quà trao tay là sự trân trọng và sẻ chia, để ai cũng có một mùa Tết trọn vẹn."
          />
        )}

        {project.regions && (
          <div className="mb-6 flex flex-wrap gap-2">
            {project.regions.map((r) => (
              <span
                key={r}
                className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-ink-600 shadow-sm ring-1 ring-ink-100"
              >
                📍 {r}
              </span>
            ))}
          </div>
        )}

        {isTetYeuThuong && (
          <div className="mb-12 space-y-12">
            {Object.entries(TET_YEU_THUONG_IMAGES).map(([year, value]) => {
              if (Array.isArray(value)) {
                const images = value as string[];
                return (
                  <section key={year}>
                    <div className="mb-4">
                      <h2 className="font-display text-2xl font-bold text-ink-900">Năm {year}</h2>
                    </div>
                    <div className="flex gap-3 overflow-x-auto pb-2">
                      {images.map((image) => (
                        <div key={image} className="min-w-[220px] flex-1 overflow-hidden rounded-2xl bg-ink-100 shadow-sm ring-1 ring-ink-100 sm:min-w-[180px] lg:min-w-[220px]">
                          <img
                            src={image}
                            alt={`Tết Yêu Thương năm ${year}`}
                            className="h-52 w-full object-cover transition duration-500 hover:scale-105"
                          />
                        </div>
                      ))}
                    </div>
                  </section>
                );
              }

              const locations = Object.entries(
                value as Record<string, string[] | Record<string, string[]>>,
              );
              return (
                <section key={year}>
                  <div className="mb-4">
                    <h2 className="font-display text-2xl font-bold text-ink-900">Năm {year}</h2>
                  </div>
                  <div className="space-y-8">
                    {locations.map(([location, locationImages]) => (
                      <div key={location}>
                        <h3 className="mb-3 font-display text-xl font-bold text-ink-900">{location}</h3>
                        {Array.isArray(locationImages) ? (
                          <div className="flex gap-3 overflow-x-auto pb-2">
                            {locationImages.map((image) => (
                              <div key={image} className="min-w-[220px] flex-1 overflow-hidden rounded-2xl bg-ink-100 shadow-sm ring-1 ring-ink-100 sm:min-w-[180px] lg:min-w-[220px]">
                                <img
                                  src={image}
                                  alt={`Tết Yêu Thương năm ${year} tại ${location}`}
                                  className="h-52 w-full object-cover transition duration-500 hover:scale-105"
                                />
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="space-y-6">
                            {Object.entries(locationImages).map(([activity, images]) => (
                              <div key={activity}>
                                <h4 className="mb-3 text-base font-semibold leading-relaxed text-ink-700">{activity}</h4>
                                <div className="flex gap-3 overflow-x-auto pb-2">
                                  {images.map((image) => (
                                    <div key={image} className="min-w-[220px] flex-1 overflow-hidden rounded-2xl bg-ink-100 shadow-sm ring-1 ring-ink-100 sm:min-w-[180px] lg:min-w-[220px]">
                                      <img
                                        src={image}
                                        alt={`${activity} tại ${location}, Tết Yêu Thương năm ${year}`}
                                        className="h-52 w-full object-cover transition duration-500 hover:scale-105"
                                      />
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}

        {project.subPrograms && (
          <div className="mb-10 grid gap-4 sm:grid-cols-2">
            {project.subPrograms.map((p) => (
              <div
                key={p}
                className="rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-ink-100"
              >
                <p className="font-display text-base font-bold text-ink-900">{p}</p>
              </div>
            ))}
          </div>
        )}

        {!isTetYeuThuong && project.summary && (
          <p className="mb-10 max-w-3xl text-base leading-relaxed text-ink-600">{project.summary}</p>
        )}

        {!isTetYeuThuong && (
          <div className="mb-10 rounded-2xl bg-brand-50 px-5 py-4 text-sm leading-relaxed text-brand-700">
            Nội dung chi tiết của hoạt động này đang được HANS cập nhật. Câu chuyện, số liệu và hình ảnh
            đầy đủ sẽ sớm được bổ sung tại đây.
          </div>
        )}
      </div>
    </div>
  );
}
