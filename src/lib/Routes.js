const ROUTE = {
  AUTH: {
    LOGIN: "/login",
  },
  MAIN: "/",
  ABSENSI: {
    WFH: "/absensi/work-from-home",
    WFO: "/absensi/work-from-office",
  },
  KARYAWAN: "/karyawan",
  CREATE_KARYAWAN: "/karyawan/create",
  MASTER_DATA: {
    MAIN: "/master-data",
    HARI_LIBUR_NASIONAL: "/master-data/hari-libur-nasional",
    CREATE_HARI_LIBUR_NASIONAL: "/master-data/hari-libur-nasional/create",
    CUTI_TAHUNAN: "/master-data/cuti-tahunan",
    CREATE_CUTI_TAHUNAN: "/master-data/cuti-tahunan/create",
    TOLERANSI_KETERLAMBATAN: "/master-data/toleransi-keterlambatan",
    CREATE_TOLERANSI_KETERLAMBATAN:
      "/master-data/toleransi-keterlambatan/create",
    JAM_KERJA: "/master-data/jam-kerja",
  },
  PENGGUNA: "/pengguna",
  CREATE_PENGGUNA: "/pengguna/create",
};

const ROUTE_TEST = {
  TEST: "/test",
};

export { ROUTE, ROUTE_TEST };
