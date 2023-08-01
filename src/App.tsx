/* MODULE IMPORTS */

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

/* PAGE IMPORTS */

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ProtectedRoute } from "./features/authentication";
import { Suspense, lazy } from "react";
import styled from "styled-components";
import { Logo, Spinner } from "./components/ui";

const AppLayout = lazy(() => import("@/components/layout/AppLayout"));
const Account = lazy(() => import("@/pages/Account"));
const Booking = lazy(() => import("@/pages/Booking"));
const Bookings = lazy(() => import("@/pages/Bookings"));
const Cabins = lazy(() => import("@/pages/Cabins"));
const Checkin = lazy(() => import("@/pages/Checkin"));
const Dashboard = lazy(() => import("@/pages/Dashboard"));
const Login = lazy(() => import("@/pages/Login"));
const PageNotFound = lazy(() => import("@/pages/PageNotFound"));
const Settings = lazy(() => import("@/pages/Settings"));
const Users = lazy(() => import("@/pages/Users"));

const queryClient = new QueryClient();

const StyledSpinner = styled.div`
    width: 100%;
    height: 100vh;
    background-color: var(--color-grey-50);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2.5rem;
`;

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <BrowserRouter>
                <Suspense
                    fallback={
                        <StyledSpinner>
                            <Logo />
                            <Spinner />
                        </StyledSpinner>
                    }
                >
                    <Routes>
                        <Route
                            element={
                                <ProtectedRoute>
                                    <AppLayout />
                                </ProtectedRoute>
                            }
                        >
                            <Route
                                index
                                element={<Navigate to="/dashboard" />}
                            />

                            {ROUTES_LIST.map((route) => (
                                <Route
                                    path={route.path}
                                    element={route.component}
                                />
                            ))}
                        </Route>
                        <Route path="/login" element={<Login />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
            <Toaster
                position="top-center"
                gutter={12}
                containerStyle={{ margin: "8px" }}
                toastOptions={{
                    success: {
                        duration: 3000,
                    },
                    error: {
                        duration: 5000,
                    },
                    style: {
                        fontSize: "16px",
                        maxWidth: "500px",
                        padding: "16px 24px",
                        backgroundColor: "var(--color-grey-0)",
                        color: "var(--color-grey-700)",
                    },
                }}
            />
        </QueryClientProvider>
    );
}

export default App;

const ROUTES_LIST = [
    {
        path: "/account",
        component: <Account />,
        exact: true,
    },
    {
        path: "/bookings",
        component: <Bookings />,
        exact: true,
    },
    {
        path: "/bookings/:bookingId",
        component: <Booking />,
        exact: true,
    },
    {
        path: "/checkin/:bookingId",
        component: <Checkin />,
        exact: true,
    },
    {
        path: "/cabins",

        component: <Cabins />,
        exact: true,
    },
    {
        path: "/dashboard",
        component: <Dashboard />,
        exact: true,
    },
    {
        path: "/settings",
        component: <Settings />,
        exact: true,
    },
    {
        path: "/users",
        component: <Users />,
        exact: true,
    },
];

/*
    <div>
            <Heading as="h1">H1 Hello World</Heading>
            <Heading as="h2">H2 Hello World</Heading>
            <Heading as="h3">H3 Hello World</Heading>
            <Heading as="h4">H4 Hello World</Heading>
            </div>
            <div>
                <Center>
                    <Button>Check In</Button>
                </Center>
            </div>
            <div>
                <Center>
                    <Input placeholder="Hello" />
                </Center>
            </div>
            <div>
                <Row justify="even">
                    <Button size="large">Check In</Button>
                    <Button variant="secondary">Check In</Button>
                </Row>
            </div>
            <div>
                <Center>
                    <Column align="center">
                        <Button size="small">Check In</Button>
                        <Button>Check In</Button>
                        <Button size="large">Check In</Button>
                    </Column>
                </Center>
            </div>
            <div>
                <Center>
                    <Column align="center">
                        <Button>Check In</Button>
                        <Button variant="secondary">Check In</Button>
                        <Button variant="danger">Check In</Button>
                    </Column>
                </Center>
    </div>
*/
