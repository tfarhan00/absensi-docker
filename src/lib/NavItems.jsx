/**
 * @isParent is mandatory
 */
import React from "react";
import { BiHomeCircle, BiGroup, BiData, BiUserPlus, BiFingerprint } from "react-icons/bi";
import { ROUTE } from "@/lib/Routes";

export const NAV_ITEMS = [
  {
    name: "Dashboard", // Dashboard is the main page
    path: ROUTE.MAIN,
    icon: <BiHomeCircle />,
    isParent: false,
  },
  {
    name: "Absensi",
    icon: <BiFingerprint />,
    isParent: true,
    children: [
      {
        name: "Work From Home",
        path: ROUTE.ABSENSI.WFH,
      },
      {
        name: "Work From Office",
        path: ROUTE.ABSENSI.WFO,
      },
    ]
  },
  {
    name: "Karyawan",
    path: ROUTE.KARYAWAN,
    icon: <BiGroup />,
    isParent: false,
  },
  {
    name: "Master Data",
    icon: <BiData />,
    isParent: true,
    children: [
      {
        name: "Hari Libur Nasional",
        path: ROUTE.MASTER_DATA.HARI_LIBUR_NASIONAL,
      },
      {
        name: "Cuti Tahunan",
        path: ROUTE.MASTER_DATA.CUTI_TAHUNAN,
      },
      {
        name: "Toleransi Keterlambatan",
        path: ROUTE.MASTER_DATA.TOLERANSI_KETERLAMBATAN,
      },
      {
        name: "Jam Kerja",
        path: ROUTE.MASTER_DATA.JAM_KERJA,
      },
    ],
  },
  {
    name: "Pengguna",
    path: ROUTE.PENGGUNA,
    icon: <BiUserPlus />,
    isParent: false,
  },
];
