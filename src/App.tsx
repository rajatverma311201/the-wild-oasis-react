/* MODULE IMPORTS */

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

/* PAGE IMPORTS */

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense, lazy } from "react";
import styled from "styled-components";
import { Logo, Spinner } from "./components/ui";

const ProtectedRoute = lazy(
    () => import("@/features/authentication/ProtectedRoute")
);
const Account = lazy(() => import("@/pages/Account"));
const Booking = lazy(() => import("@/pages/Booking"));
const Bookings = lazy(() => import("@/pages/Bookings"));
const Cabins = lazy(() => import("@/pages/Cabins"));
const Checkin = lazy(() => import("@/pages/Checkin"));
const Dashboard = lazy(() => import("@/pages/Dashboard"));

const Settings = lazy(() => import("@/pages/Settings"));
const Users = lazy(() => import("@/pages/Users"));
const Login = lazy(() => import("@/pages/Login"));
const PageNotFound = lazy(() => import("@/pages/PageNotFound"));
const AppLayout = lazy(() => import("@/components/layout/AppLayout"));

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
                            <Logo /> <Spinner />
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

                            <Route path="/account" element={<Account />} />
                            <Route path="/bookings" element={<Bookings />} />
                            <Route
                                path="bookings/:bookingId"
                                element={<Booking />}
                            />
                            <Route
                                path="checkin/:bookingId"
                                element={<Checkin />}
                            />
                            <Route path="/cabins" element={<Cabins />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/settings" element={<Settings />} />
                            <Route path="/users" element={<Users />} />
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
