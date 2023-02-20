import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { ROUTE, ROUTE_TEST } from "@/lib/Routes";
import * as UTIL from "@/utils/devTools";
import * as MODULE from "@/modules";
import * as MOCK from "@/mocks";
import * as LAYOUT from "@/layouts";
import * as MISC from "@/misc";

/**
 * import component or anything you've just made in /mock folder into here
 * and put it on @testRoutes for unbreaking changes in production
 *
 * NOTE: Don't forget to define the test routes path in /lib/Routes file inside @ROUTE_TEST constant
 * or you can directly just name the route as the value of the path below
 */

const testRoutes = UTIL.isDevMode
  ? [
      {
        path: ROUTE_TEST.TEST,
        element: <MOCK.TestPage />,
      },
    ]
  : null;

const unprotectedRoutes = [
  {
    path: ROUTE.AUTH.LOGIN,
    element: <MODULE.AuthLogin />,
  },
];

const protectedRoutes = [
  {
    path: ROUTE.MAIN,
    element: <MODULE.Main />,
  },
  {
    path: ROUTE.ABSENSI.WFH,
    element: <MODULE.WorkFromHome />,
  },
  {
    path: ROUTE.ABSENSI.WFO,
    element: <MODULE.WorkFromOffice />,
  },
  {
    path: ROUTE.KARYAWAN,
    element: <MODULE.Karyawan />,
  },
  {
    path: ROUTE.CREATE_KARYAWAN,
    element: <MODULE.CreateKaryawan />,
  },
  {
    path: ROUTE.MASTER_DATA.MAIN,
    element: <MODULE.MasterDataLayout />,
    children: [
      {
        path: ROUTE.MASTER_DATA.HARI_LIBUR_NASIONAL,
        element: <MODULE.HariLiburNasional />,
      },
      {
        path: ROUTE.MASTER_DATA.CREATE_HARI_LIBUR_NASIONAL,
        element: <MODULE.CreateHariLiburNasional />,
      },
      {
        path: ROUTE.MASTER_DATA.TOLERANSI_KETERLAMBATAN,
        element: <MODULE.ToleransiKeterlambatan />,
      },
      {
        path: ROUTE.MASTER_DATA.CREATE_TOLERANSI_KETERLAMBATAN,
        element: <MODULE.CreateToleransiKeterlambatan />,
      },
      {
        path: ROUTE.MASTER_DATA.CUTI_TAHUNAN,
        element: <MODULE.CutiTahunan />,
      },
      {
        path: ROUTE.MASTER_DATA.CREATE_CUTI_TAHUNAN,
        element: <MODULE.CreateCutiTahunan />,
      },
      {
        path: ROUTE.MASTER_DATA.JAM_KERJA,
        element: <MODULE.JamKerja />,
      },
    ],
  },
  {
    path: ROUTE.PENGGUNA,
    element: <MODULE.Pengguna />,
  },
  {
    path: ROUTE.CREATE_PENGGUNA,
    element: <MODULE.CreatePengguna />,
  },
];

const layoutedRoutes = createRoutesFromElements(
  <Route element={<LAYOUT.RootWrapper />} errorElement={<MISC.ErrorPage />}>
    {protectedRoutes.map((route, idx) => {
      return route.children && Array.isArray(route.children) ? (
        <Route key={idx} {...route}>
          {route.children?.map((_route, _idx) => (
            <Route key={_idx} {..._route} />
          ))}
        </Route>
      ) : (
        <Route key={idx} {...route} />
      );
    })}
  </Route>
);

const testRoutesAvail = testRoutes ?? [
  {
    path: "/test",
    element: (
      <MISC.FallbackPage message="Test route is not available in production" />
    ),
  },
];

export const bootstrapRoutes = createBrowserRouter([
  ...layoutedRoutes,
  ...unprotectedRoutes,
  ...testRoutesAvail,
]);
