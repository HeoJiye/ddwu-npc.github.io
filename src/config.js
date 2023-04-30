export const statisticsData = [
  { key: "창설년도", value: "2019" },
  { key: "누적 기수", value: "7기" },
  { key: "누적 동아리원", value: "100명" },
  { key: "런칭게임", value: "50개" },
];

export const curriculumData = [
  {
    key: "신입부원 프로젝트",
    value: (
      <>약 한 달동안 Solar2D 게임 개발 엔진으로 간단한 게임 개발 및 출시</>
    ),
  },

  {
    key: "장기 프로젝트",
    value: (
      <>약 일 년간 Unity 게임 개발 엔진으로 완성도 있는 게임 개발 및 출시</>
    ),
  },
  {
    key: "NPC 해커톤",
    value: <>매년 2월 진행하는 NPC 축제의 밤 해커톤 일주일 게임 개발 챌린지</>,
  },
  {
    key: "NPC 수료",
    value: (
      <>장기 프로젝트 마감까지 함께한 동아리원 분들께 NPC 동아리 수료증 수여</>
    ),
  },
];

export const juniorProjectData = [
  {
    key: "팀 빌딩",
    value: (
      <>기획 담당자의 발표를 듣고 본인이 참여하고 싶은 프로젝트에 참가합니다</>
    ),
  },
  {
    key: "프로젝트 진행",
    value: (
      <>
        한 달간 팀원들과 게임을 열심히 개발 정기 보고를 통해 진행상황 공유와
        질의응답을 합니다
      </>
    ),
  },
  {
    key: "최종 발표",
    value: <>열심히 개발한 게임에 대해 정기 회의 시간에 발표합니다</>,
  },
  {
    key: "플레이 스토어 출시",
    value: <>google play store에 게임을 출시합니다 (개발자 계정 지원)</>,
  },
];

export const teamInfoData = [
  {
    name: "기획팀",
    title: "게임의 뼈대, 기반을 담당하는 기획자",
    content:
      "다양한 상상력과 기획들로 스토리를 구성하는 팀입니다. 상황에 맞는 시나리로와 세계관 설정, 게임의 세밀한 부분을 설정합니다.",
    image: "pm_emoji.svg",
  },
  {
    name: "디자인팀",
    title: "캐릭터, 배경 등 게임에 필요한 것을 창조해 색을 입히는 디자이너",
    content:
      "게임에 등장하는 캐릭터, 아이템 원화, 배경, UI, 등 게임 리소스를 제작하는 팀입니다.",
    image: "designer_emoji.svg",
  },
  {
    name: "개발팀",
    title: "프로그래밍을 통해 게임을 제작하는 개발자",
    content:
      "프로그래밍을 통해 게임을 개발합니다. 현재 주로 Solar2D와 Unity를 사용해 게임을을 제작 합니다. 4주 간 간단한 게임 개발 교육을 받게 됩니다.",
    image: "dev_emoji.svg",
  },
];

export const projectData = {
  "4기": [
    {
      image: `${process.env.PUBLIC_URL}/img/project/4th/colorme.JPG`,
    },
    {
      image: `${process.env.PUBLIC_URL}/img/project/4th/whisky.PNG`,
    },
  ],
  "5기": [
    {
      image: `${process.env.PUBLIC_URL}/img/project/5th/bread.PNG`,
    },
    {
      image: `${process.env.PUBLIC_URL}/img/project/5th/land.PNG`,
    },
  ],
  "6기": [
    {
      image: `${process.env.PUBLIC_URL}/img/project/6th/Killingtag.PNG`,
    },
    {
      image: `${process.env.PUBLIC_URL}/img/project/6th/remember&recollect.PNG`,
    },
    {
      image: `${process.env.PUBLIC_URL}/img/project/6th/santa.PNG`,
    },
    {
      image: `${process.env.PUBLIC_URL}/img/project/6th/summer.PNG`,
    },
  ],
};

export const apply = {
  type: "8기",
  form: null,
};
